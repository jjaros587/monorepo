export function formatDateDifference(from: string, to?: string): string {
  const fromDate = new Date(`${from}-01`)
  const toDate = to ? new Date(`${to}-01`) : new Date() // Use current date if 'to' is not specified

  const monthsDifference =
    (toDate.getFullYear() - fromDate.getFullYear()) * 12 + toDate.getMonth() - fromDate.getMonth()

  if (monthsDifference < 12) {
    return `${monthsDifference} ${monthsDifference === 1 ? 'month' : 'months'}`
  } else {
    const years = Math.floor(monthsDifference / 12)
    const remainingMonths = monthsDifference % 12

    let result = ''
    if (years > 0) {
      result += `${years} ${years === 1 ? 'year' : 'years'}`
    }

    if (remainingMonths > 0) {
      result += ` ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
    }

    return result.trim()
  }
}
