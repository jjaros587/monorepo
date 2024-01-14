'use client'

import { SkillsGeneral } from './sections/SkillsGeneral'
import { SkillsTechnical } from './sections/SkillsTechnical'
import { ResumeTimeline } from './components/ResumeTimeline/ResumeTimeline'
import { RESUME_DATA } from '../../../assets/data/resume'
import { formatDate } from './utils/formatDate'
import { formatDateDifference } from './utils/formatDateDifference'
import { PageSection } from '../../../src/components/PageSection'
import { EducationContent } from './components/EducationContent'
import { Page } from '../../../src/components/Page'
import { Text } from '@ui'

export default function ResumePage() {
  return (
    <Page title="Resume">
      <PageSection title="General skills">
        <SkillsGeneral />
      </PageSection>
      <PageSection title="Technical skills">
        <SkillsTechnical />
      </PageSection>
      <PageSection title="Work experience" info="asfsdafwe r w fds fdasf asdf">
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
      </PageSection>
      <PageSection title="Education">
        <Text>
          I was always interested in modern technologies, and that&apos;s why I chose IT as my
          career very early on and studied it from secondary school. It turned out to be a good
          choice because I continued my studies at the university, where I could benefit from the
          knowledge I had gained earlier, deepen it, and put everything into context. Thanks to
          this, I achieved several academic successes, such as:
          <ul>
            <li>I was granted a merit scholarship based on my academic achievements.</li>
            <li>
              I was acknowledged for achieving the 1st place in the competition for the top student
              in the &apos;Follow-up Master&apos;s Studies&apos; category, major &apos;Information
              Systems and Technologies&apos; after the 1st year of study, accompanied with special
              one-time scholarship.
            </li>
            <li>I received an ward from the faculty dean for my master&apos;s thesis.</li>
            <li>
              I received multiple job opportunities from university teachers at their workplaces.
              While I already had previous professional experience, utilizing one of these proved to
              be a significant boost in my career, teaching me valuable lessons, opening doors, and
              guiding me to my current path.
            </li>
          </ul>
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
      </PageSection>
      <PageSection title="References"></PageSection>
    </Page>
  )
}
