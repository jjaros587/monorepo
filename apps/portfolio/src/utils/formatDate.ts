export function formatDate(input: string): string {
  const date = new Date(input)

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)

  return formattedDate
}
