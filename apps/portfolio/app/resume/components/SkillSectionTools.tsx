import { Inline, Stack, Text } from '@ui'
import { SkillSection } from './SkillSection'
import { Tag } from './Tag'
import { RESUME_DATA } from '../data'
import './ResumeTimeline/ResumeTimeline.styles.css'
import { SkillsTags } from './SkillsTags'
import Grid from '@mui/material/Grid'

export const SkillSectionTools = () => {
  return (
    <Grid container spacing={3}>
      {Object.entries(RESUME_DATA.skills).map(([title, values], index) => (
        <Grid item key={index} xs={6} md={12}>
          <SkillSection key={index} title={title}>
            {/* <Inline gap="S">
            {values.map((value, index) => (
              <Tag key={index} value={value} />
            ))}
          </Inline> */}
            {/* <Stack gap="S">
            {values.map((value, index) => (
              <Text key={index}>{value}</Text>
            ))}
          </Stack> */}
            {/* <Inline gap="S">
            {values.map((value, index) => (
              <Text key={index}>{value}</Text>
            ))}
          </Inline> */}
            {/* <Text>{values.join(', ')}</Text> */}
            <SkillsTags values={values} />
            {/* <div className="cd-timeline-content">
            <ul className="content-skills">
              {values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div> */}
          </SkillSection>
        </Grid>
      ))}
    </Grid>
  )
}
