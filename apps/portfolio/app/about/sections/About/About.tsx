import Grid from '@mui/material/Grid'
import { Text, Box, Stack } from '@ui'
import Image from 'next/image'
import { Facts } from './components/Facts'
import { Info } from './components/Info'

export const About = () => {
  return (
    <Stack gap="L">
      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <Box alignY="center" style={{ height: '100%' }}>
            <Image
              src="/portrait_aboutMe.jpg"
              alt="portrait_aboutMe"
              width="450"
              height="500"
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={8}>
          <Stack gap="L">
            <Text variant="paragraph">
              A passionate Frontend Engineer with diverse experience in roles and programming
              languages that have shaped my journey within the development process. However, I
              discovered my true passion in frontend engineering. I&apos;m a collaborative team
              player, valuing the power of open communication and attention to detail. I embrace
              challenges and am not afraid to learn from my mistakes.
            </Text>

            <Text variant="paragraph">
              Beyond coding, I&apos;m an adventurer who loves nature and exploring new countries,
              learning foreign languages, hiking, and embracing physical activities
            </Text>
            <div>
              <Info />
            </div>
          </Stack>
        </Grid>
      </Grid>
      <Facts />
    </Stack>
  )
}
