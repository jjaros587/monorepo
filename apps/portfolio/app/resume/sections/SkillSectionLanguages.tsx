import { FC } from 'react'
import { SkillSection } from '../components/SkillSection'
import { Box, Inline, Text, Stack } from '@ui'
import { ProgressBar } from '../../../src/components/ProgressBar'
import { RESUME_DATA } from '../data'

export const SkillSectionLanguages: FC = () => {
  return (
    <SkillSection title="Languages">
      <Stack gap="S">
        {RESUME_DATA.languages.map(({ name, level, progress }, index) => {
          return (
            <Box key={index}>
              <Inline align="space-between">
                <Text>{name}</Text>
                <Text>{level}</Text>
              </Inline>
              <ProgressBar level={progress} total={6} />
            </Box>
          )
        })}
      </Stack>
    </SkillSection>
  )
}
