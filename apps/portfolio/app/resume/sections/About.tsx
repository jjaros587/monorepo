import Grid from '@mui/material/Grid'
import { Text } from '@ui'

export const About = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Text>sdfsd</Text>
      </Grid>
      <Grid item xs={12} md={8}>
        <Text variant="paragraph">
          A passionate Frontend Engineer with diverse experience in roles and programming languages
          that have shaped my journey within the development process. However, I discovered my true
          passion in frontend engineering. I'm a collaborative team player, valuing the power of
          open communication and attention to detail. I embrace challenges and am not afraid to
          learn from my mistakes.
        </Text>
      </Grid>
    </Grid>
  )
}
