export function isArray<T>(data: T | T[]): data is Array<T> {
  return Array.isArray(data)
}
