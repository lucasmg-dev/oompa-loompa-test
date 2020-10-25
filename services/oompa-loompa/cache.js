export class Cache {
  static get (key) {
    if (!this.valid(key)) return null

    const data = JSON.parse(localStorage.getItem(key))
    return data.value
  }

  static set (key, value) {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 1)
    const data = {
      expireAt: currentDate,
      value
    }
    localStorage.setItem(key, JSON.stringify(data))
  }

  static valid (key) {
    const data = JSON.parse(localStorage.getItem(key))
    if (!data) return false

    if (this.checkTime(data.expireAt)) return true
    return false
  }

  static checkTime (expireAt) {
    const expireAtDate = new Date(expireAt)
    const today = new Date()

    if (expireAtDate > today) return true
    return false
  }
}
