import { Inline, Stack, Text, Box } from '@ui'
import { ResumeSection } from '../components/ResumeSection'
import { ResumeSectionItem } from '../components/ResumeSectionItem'
import { formatDate } from '../utils/formatDate'
import { formatDateDifference } from '../utils/formatDateDifference'
import { Tag } from '../components/Tag'
import { RESUME_DATA } from '../data'

const Tags = ({ items }: { items: string[] }) => {
  return items.map((item, index) => <Text key={index}>{item}</Text>)
}

export const Experience = () => {
  return (
    <ResumeSection title="Experience" id="experience">
      {RESUME_DATA.experience.map(
        ({ date, place, position, company, description, stack }, index) => (
          <ResumeSectionItem
            key={index}
            left={
              <Stack>
                <Inline align="space-between">
                  <Text>
                    {formatDate(date.from)} - {date.to ? formatDate(date.to) : 'present'}
                  </Text>
                  <Text>{formatDateDifference(date.from, date.to)}</Text>
                </Inline>
                <Text>{place}</Text>
              </Stack>
            }
            right={
              <Stack gap="XXS">
                <Text variant="headline2">{position}</Text>
                <Text variant="bodyMedium">{company}</Text>
                <Box paddingTop="XS" paddingBottom="S">
                  <Text>{description}</Text>
                </Box>
                <Inline gap="S">
                  {stack.map((value, index) => (
                    <Tag value={value} key={index} />
                  ))}
                </Inline>
              </Stack>
            }
          />
        ),
      )}
    </ResumeSection>
  )
}
