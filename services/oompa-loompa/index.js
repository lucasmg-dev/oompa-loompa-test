import { API_BASE_URL } from './config'
import { Cache } from './cache'

export class OompaLoompaClient {
  constructor ({ useCache = true } = {}) {
    this.baseUrl = API_BASE_URL
    this.useCache = useCache
  }

  serialize (obj, prefix) {
    const str = []
    for (const p in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
        const k = prefix ? prefix + '[' + p + ']' : p; const v = obj[p]
        str.push((v !== null && typeof v === 'object')
          ? this.serialize(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v))
      }
    }
    return str.join('&')
  }

  buildUrl (resource, queryString = null) {
    let url = `${this.baseUrl}/${resource}`
    if (queryString) {
      url += `?${this.serialize(queryString)}`
    }
    return url
  }

  async find (options = null) {
    const url = this.buildUrl('', options)

    if (this.useCache) {
      const fromCache = Cache.get(url)
      if (fromCache) return fromCache
    }

    const response = await fetch(url)
    const data = await response.json()

    if (this.useCache) {
      Cache.set(url, data)
    }

    return data
  }

  async getById (id) {
    const url = this.buildUrl(`${id}`)

    if (this.useCache) {
      const fromCache = Cache.get(url)
      if (fromCache) return fromCache
    }

    const response = await fetch(url)
    const data = await response.json()

    if (this.useCache) {
      Cache.set(url, data)
    }

    return data
  }
}
