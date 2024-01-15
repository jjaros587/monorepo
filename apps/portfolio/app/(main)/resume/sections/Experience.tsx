import { Stack, Text } from '@ui'
import { ResumeTimeline } from '../components/ResumeTimeline/ResumeTimeline'
import { RESUME_DATA } from '../../../../assets/data/resume'
import { formatDate } from '../utils/formatDate'
import { formatDateDifference } from '../utils/formatDateDifference'

export const Experience = () => {
  return (
    <Stack gap="M">
      <Text variant="paragraph">I started as a Tester. Soon I got more responsibility . </Text>
      <ResumeTimeline
        data={RESUME_DATA.experience}
        mapItemToProps={({ position, company, description, date, ...rest }) => ({
          title: position,
          subtitle: company,
          content: description,
          date: `${formatDate(date.from)} - ${
            date.to ? formatDate(date.to) : 'present'
          } (${formatDateDifference(date.from, date.to)})`,
          ...rest,
        })}
      />
    </Stack>
  )
}
