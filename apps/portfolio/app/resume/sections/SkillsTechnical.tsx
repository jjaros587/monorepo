import { RESUME_DATA } from '../../../assets/data/resume'
import { TagsList } from '@ui'
import { Card } from '../../../src/components/Card'
import Grid from '@mui/material/Grid'

export const SkillsTechnical = () => {
  return (
    <Grid container spacing={4}>
      {Object.entries(RESUME_DATA.skills).map(([title, values], index) => (
        <Grid item key={index} xs={12} md={6}>
          <Card key={index} title={title} fullHeight>
            <TagsList values={values} />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
