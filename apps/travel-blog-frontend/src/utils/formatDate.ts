import formatDate from 'date-fns/format'

export function formatISODate(value: string, format = "MMM d, yyyy 'at' h:mm aaaaa'm'") {
  const date = Date.parse(value)
  return formatDate(date, format)
}
