import { Stack, Text } from '@ui'
import { ResumeTimeline } from '../../../src/components/ResumeTimeline/ResumeTimeline'
import { formatDate } from '../../../src/utils/formatDate'
import { formatDateDifference } from '../../../src/utils/formatDateDifference'
import { allExperiences } from '@contentlayer/generated'

export const Experience = () => {
  const experiences = allExperiences.sort((a, b) => b._id.localeCompare(a._id))

  return (
    <Stack gap="M">
      <Text variant="paragraph">I started as a Tester. Soon I got more responsibility . </Text>
      <ResumeTimeline
        data={experiences}
        mapItemToProps={({ position, company, body, dateFrom, dateTo, place }) => ({
          title: position,
          subtitle: company,
          content: body.code,
          place,
          date: `${formatDate(dateFrom)} - ${
            dateTo ? formatDate(dateTo) : 'present'
          } (${formatDateDifference(dateFrom, dateTo)})`,
        })}
      />
    </Stack>
  )
}
