export enum STORAGE_KEYS {
  AUTH = 'cryptocurencies-auth'
}

export class LocalStorageService {
  get<T>(key: STORAGE_KEYS): T | null {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }

  set(key: STORAGE_KEYS, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
    if (key === STORAGE_KEYS.AUTH) {
      document.dispatchEvent(new Event('authStorage'))
    }
  }

  remove(key: STORAGE_KEYS) {
    localStorage.removeItem(key)
  }
}
