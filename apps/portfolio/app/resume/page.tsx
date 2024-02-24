'use client'

import { SkillsGeneral } from './sections/SkillsGeneral'
import { SkillsTechnical } from './sections/SkillsTechnical'
import { PageSection } from '../../src/components/PageSection'
import { Page } from '../../src/components/Page'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'

export default function ResumePage() {
  return (
    <Page title="Resume">
      <PageSection title="General skills">
        <SkillsGeneral />
      </PageSection>
      <PageSection title="Technical skills">
        <SkillsTechnical />
      </PageSection>
      <PageSection title="Work experience">
        <Experience />
      </PageSection>
      <PageSection title="Education">
        <Education />
      </PageSection>
      <PageSection title="References"></PageSection>
    </Page>
  )
}
