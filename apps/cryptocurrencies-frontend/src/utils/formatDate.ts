import formatDate from 'date-fns/format'

export function formatTimestamp(value: number, format: string = "MMM d, yyyy 'at' h:mm aaaaa'm'") {
  return formatDate(value, format)
}
