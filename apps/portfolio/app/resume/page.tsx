'use client'

import { Inline, Stack, Box, Text } from '@ui'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { ResumeNavigation } from './components/ResumeNavigation'
import Grid from '@mui/material/Grid'
import styled from '@theme'
import { HEADER_HEIGHT, HEADER_GAP } from '../../src/constants'
import { Tabs } from '../../src/components/Tabs'
import { SkillSectionLanguages } from './sections/SkillSectionLanguages'
import { SkillSectionTools } from './components/SkillSectionTools'
import { ResumeTimeline } from './components/ResumeTimeline/ResumeTimeline'
import { ResumeTimeline2 } from './components/ResumeTimeline/ResumeTimeline2'
import { ResumeTimeline3 } from './components/ResumeTimeline/ResumeTimeline3'
import { RESUME_DATA } from './data'
import { formatDate } from './utils/formatDate'
import { formatDateDifference } from './utils/formatDateDifference'
import { About } from './sections/About'

const LeftContainer = styled(Box)`
  position: sticky;
  overflow-y: auto;
  max-height: calc(100vh - ${HEADER_HEIGHT} - ${HEADER_GAP});
  top: 0;
`

const RightContainer = styled(Box)`
  overflow-y: auto;
`

export default function ResumePage() {
  return (
    <>
      <About />
      <Grid container rowSpacing={{ xs: 6, md: 0 }} columnSpacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={4}>
          <LeftContainer>
            {/* <ResumeNavigation />
          <Tabs>
            <Tabs.Item title="General">
              <Stack gap="M">
                <SkillSectionLanguages />
              </Stack>
            </Tabs.Item>
            <Tabs.Item title="Technical">
              <Stack gap="M">
                <SkillSectionTools />
              </Stack>
            </Tabs.Item>
          </Tabs> */}
            <div>
              <Text variant="headline1">Skills</Text>
              <Box padding="M" style={{ background: '#2F2F35' }}>
                <SkillSectionLanguages />
                <SkillSectionTools />
              </Box>
            </div>
          </LeftContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <RightContainer>
            <Stack gap="XXL">
              {/* <ResumeTimeline3 /> */}

              <ResumeTimeline
                title="Work experience"
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
              <ResumeTimeline
                title="Education"
                data={RESUME_DATA.education}
                mapItemToProps={({ degree, school, date, ...rest }) => ({
                  title: degree,
                  subtitle: school,
                  content: '',
                  date: date.toString(),
                  ...rest,
                })}
              />
              <Experience />
              <Education />
            </Stack>
          </RightContainer>
        </Grid>
      </Grid>
    </>
  )
}
