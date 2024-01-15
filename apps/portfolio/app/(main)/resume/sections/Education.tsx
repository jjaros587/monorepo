import { ExpandContent, Stack, Text } from '@ui'
import { ResumeTimeline } from '../components/ResumeTimeline/ResumeTimeline'
import { RESUME_DATA } from '../../../../assets/data/resume'
import { EducationContent } from '../components/EducationContent'

export const Education = () => {
  return (
    <Stack gap="M">
      <Text variant="paragraph">
        I was always interested in modern technologies, and that&apos;s why I chose IT as my career
        very early on and studied it from secondary school. It turned out to be a good choice
        because I continued my studies at the university, where I could benefit from the knowledge I
        had gained earlier, deepen it, and put everything into context. Thanks to this, I
        accomplished several achievements...
        <ExpandContent showLabel="Show achievements" hideLabel="Hide achievements">
          <ol>
            <li>I was granted a merit scholarship based on my academic results.</li>
            <li>
              I was acknowledged for achieving the 1st place in the competition for the top student
              in the &apos;Follow-up Master&apos;s Studies&apos; category, major &apos;Information
              Systems and Technologies&apos; after the 1st year of study, accompanied with special
              one-time scholarship.
            </li>
            <li>I received an award from the faculty dean for my master&apos;s thesis.</li>
            <li>
              I received multiple job opportunities from university teachers at their workplaces.
              While I already had previous professional experience, utilizing one of these proved to
              be a significant boost in my career, teaching me valuable lessons, opening doors, and
              guiding me to my current path.
            </li>
          </ol>
        </ExpandContent>
      </Text>
      <ResumeTimeline
        data={RESUME_DATA.education}
        mapItemToProps={(education) => {
          const { degree, school, date, ...rest } = education

          return {
            title: degree,
            subtitle: school,
            content: <EducationContent education={education} />,
            date: date.toString(),
            ...rest,
          }
        }}
      />
    </Stack>
  )
}
