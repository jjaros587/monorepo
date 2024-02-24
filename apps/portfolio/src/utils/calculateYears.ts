export function calculateYears(dates: [Date, Date | undefined][]) {
  let totalMonths = 0

  dates.forEach(([dateFrom, dateTo]) => {
    const _dateTo = dateTo || new Date()
    const yearsDifference = _dateTo.getFullYear() - dateFrom.getFullYear()
    const monthsDifference = _dateTo.getMonth() - dateFrom.getMonth()
    totalMonths += yearsDifference * 12 + monthsDifference
  })

  return Math.floor(totalMonths / 12)
}
