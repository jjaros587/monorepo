import { FC } from 'react'
import { Box, Inline, Text, Stack } from '@ui'
import { ProgressBar } from '../../../../src/components/ProgressBar'
import { Card } from '../../../../src/components/Card'
import { RESUME_DATA } from '../../../../assets/data/resume'
import Grid from '@mui/material/Grid'

export const SkillsGeneral: FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item sm={12} lg={6}>
        <Card title="Languages">
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
        </Card>
      </Grid>
      <Grid item sm={12} lg={6}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card title="Soft skills"></Card>
          </Grid>
          <Grid item xs={12}>
            <Card title="Drivers licence">
              <Text>Driving license category A, B</Text>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
