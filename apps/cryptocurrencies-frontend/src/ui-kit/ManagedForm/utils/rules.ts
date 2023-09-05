export function isEmail(value: any) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Email address is invalid'
  }
}
