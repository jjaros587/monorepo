import { Box, Inline, Button, Text, Stack } from '@ui'
import { FC } from 'react'

export const LandingPage: FC = () => {
  return (
    <Box align="center" alignY="center">
      <Stack gap="L">
        <Text variant="headline1">Manage your investments into crypto</Text>
        <Text variant="bodyMedium">dsfsdf ds fdas fds das fds fds f sdf ds fds fsd f </Text>
        <Inline gap="M">
          <Button primary>Explore the features</Button>
          <Button>Video</Button>
        </Inline>
      </Stack>
    </Box>
  )
}
