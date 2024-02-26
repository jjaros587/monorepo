import { Text, Inline } from '@ui'
import { Card } from '../../../../../src/components/Card'
import Grid from '@mui/material/Grid'
import { FC, useMemo } from 'react'
import { Experience, allExperiences } from '@contentlayer/generated'
import { calculateYears } from '../../../../../src/utils/calculateYears'

const FactItem: FC<{ number: number; text: string }> = ({ number, text }) => {
  return (
    <Grid item sm={12} md={4}>
      <Card fullHeight>
        <Inline alignY="center" noWrap gap="L">
          <Inline.Item>
            <Text variant="headline2" color="primary">
              {number}
            </Text>
          </Inline.Item>
          <Inline.Item>
            <Text variant="headline2" color="light">
              {text}
            </Text>
          </Inline.Item>
        </Inline>
      </Card>
    </Grid>
  )
}

export const Facts = () => {
  const { totalYears, yearsAsFe, yearsAsQa } = useMemo(() => {
    return {
      totalYears: calculateYearsTotal(),
      yearsAsFe: calculateYearsByType('FE'),
      yearsAsQa: calculateYearsByType('QA'),
    }
  }, [])

  return (
    <Grid container spacing={3}>
      <FactItem number={totalYears} text={'yrs wroking in IT'} />
      <FactItem number={yearsAsFe} text={'yrs as FE engineer'} />
      <FactItem number={yearsAsQa} text={'yrs as QA engineer'} />
    </Grid>
  )
}

function calculateYearsTotal() {
  const dates = allExperiences.map((item) => new Date(item.dateFrom))
  const oldest = dates.reduce((minDate, currentDate) => {
    return currentDate.getTime() < minDate.getTime() ? currentDate : minDate
  })
  return calculateYears([[oldest, undefined]])
}

function calculateYearsByType(type: Experience['jobType']) {
  const dates: [Date, Date | undefined][] = allExperiences
    .filter((item) => item.jobType === type)
    .map(({ dateFrom, dateTo }) => {
      return [new Date(dateFrom), dateTo ? new Date(dateTo) : undefined]
    })

  return calculateYears(dates)
}
