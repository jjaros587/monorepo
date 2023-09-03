export function isEmail(value: any) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Email address is invalid'
  }
}

export const DEFAULT_RULES: { [key: string]: Array<(value: unknown) => string | undefined> } = {
  email: [isEmail],
}
