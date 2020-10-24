import { API_BASE_URL } from './config'

export class OompaLoompaClient {
  constructor () {
    this.baseUrl = API_BASE_URL
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

  buildUrl (resource, queryString = '') {
    let url = `${this.baseUrl}/${resource}`
    console.log(this.baseUrl)
    if (queryString) {
      url += `?${this.serialize(queryString)}`
    }
    return url
  }

  async find (options = {}) {
    const url = this.buildUrl('/', options)
    const response = await fetch(url)
    return response.json()
  }
}
