import { Text, Inline, Box } from '@ui'
import { Card } from '../../../../../../src/components/Card'
import Grid from '@mui/material/Grid'
import { FC, useMemo } from 'react'
import { RESUME_DATA } from '../../../../../../assets/data/resume'

const FactItem: FC<{ number: number; text: string }> = ({ number, text }) => {
  return (
    <Grid item sm={12} md={4}>
      <Card fullHeight>
        <Inline alignY="center" noWrap gap="L">
          <Inline.Item>
            <Text variant="headline1" color="primary">
              {number}
            </Text>
          </Inline.Item>
          <Inline.Item>
            <Text variant="headline1" color="light">
              {text}
            </Text>
          </Inline.Item>
        </Inline>
      </Card>
    </Grid>
  )
}

export const Facts = () => {
  const totalYears = useMemo(() => {
    const dates = RESUME_DATA.experience.map((item) => new Date(`${item.date.from}-01`))
    const oldest = dates.reduce((minDate, currentDate) => {
      return currentDate.getTime() < minDate.getTime() ? currentDate : minDate
    })
    return calculateYears(oldest)
  }, [])

  const yearsAsFe = useMemo(() => {
    const oldest = new Date(
      `${RESUME_DATA.experience.find((item) => item.firstFe)?.date.from || new Date()}-01`,
    )

    return calculateYears(oldest)
  }, [])

  return (
    <Grid container spacing={3}>
      <FactItem number={totalYears} text={'Years working in IT'} />
      <FactItem number={yearsAsFe} text={'Years as FE engineer'} />
      <FactItem number={4} text={'asdfdg fsd'} />
    </Grid>
  )
}

function calculateYears(dateFrom: Date) {
  const currentDate = new Date()
  const yearsDifference = currentDate.getFullYear() - dateFrom.getFullYear()
  const monthsDifference = currentDate.getMonth() - dateFrom.getMonth()
  const totalMonths = yearsDifference * 12 + monthsDifference

  return Math.floor(totalMonths / 12)
}
