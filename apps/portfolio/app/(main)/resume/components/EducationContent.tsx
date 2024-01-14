import styled from '@theme'
import { Box, Text } from '@ui'
import { FC, ReactNode } from 'react'
import { Education } from '../../../../assets/data/resume'
import Grid from '@mui/material/Grid'

interface Props {
  education: Education
}

const Item = ({ title, value }: { title: string; value?: string | ReactNode }) => {
  if (!value) {
    return null
  }

  return (
    <Grid container>
      <Grid item xs={2}>
        <Text>{title}:</Text>
      </Grid>

      <Grid item xs={10}>
        <Text>{value}</Text>
      </Grid>
    </Grid>
  )
}

export const EducationContent: FC<Props> = ({ education }) => {
  const { main, side, thesis } = education

  return (
    <>
      <Item title="Main" value={main} />
      <Item title="Side" value={side} />
      {thesis && (
        <Item
          title="Theses"
          value={
            <a target="_blank" href={thesis.link}>
              {thesis.label}
            </a>
          }
        />
      )}
    </>
  )
}
