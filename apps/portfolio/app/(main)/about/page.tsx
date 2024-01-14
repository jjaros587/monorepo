'use client'

import { PageSection } from '../../../src/components/PageSection'
import { Strenghts } from './sections/Strenghts'
import { Page } from '../../../src/components/Page'
import { About } from './sections/About/About'
import { Box } from '@ui'

export default function AboutPage() {
  return (
    <Page title="About me">
      <Box paddingTop="XL">
        <About />
      </Box>
      <PageSection title="Strenghts">
        <Strenghts />
      </PageSection>
      <PageSection title="Hobbies"></PageSection>
    </Page>
  )
}
