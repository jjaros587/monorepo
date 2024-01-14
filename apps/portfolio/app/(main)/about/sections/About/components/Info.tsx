import { Text, Inline, Box } from '@ui'
import { Card } from '../../../../../../src/components/Card'
import Grid from '@mui/material/Grid'
import { FC, ReactNode } from 'react'

const InfoItem: FC<{ title: string; text: string | ReactNode }> = ({ title, text }) => {
  return (
    <div>
      <Text color="primary">{title}:</Text> <Text>{text}</Text>
    </div>
  )
}

export const Info = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <InfoItem title="Name" text="Jakub Jaroš" />
        <InfoItem title="Birthday" text="8 August 1995" />
        <InfoItem title="Degree" text="Master" />
        <InfoItem title="Location" text="Prague (Czechia)" />
      </Grid>

      <Grid item xs={6}>
        <InfoItem
          title="Email"
          text={<a href="mailto:jjaros587@gmail.com">jjaros587@gmail.com</a>}
        />
        <InfoItem title="Phone" text={<a href="tel:+420605859213">+420 605 859 213</a>} />
        <InfoItem title="Freelance" text="Available" />
        <InfoItem title="Relocation" text="Possible" />
      </Grid>
    </Grid>
  )
}
