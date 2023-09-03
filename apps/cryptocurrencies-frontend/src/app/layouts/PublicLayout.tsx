import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Box, Inline, Button } from '@ui'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import styled from '@theme'
import imgUrl from './background2.jpg'

const Container = styled(Box)`
  z-index: 1;
`

const BackgroundImage = styled.div`
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 1)), url(${imgUrl});
  background-size: cover;
  filter: blur(2px);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const PublicLayout = observer(({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  return (
    <Container fullScreen>
      <BackgroundImage />
      <Box padding="M" align="flex-end">
        <Inline gap="M">
          <Button onClick={() => navigate(SCREEN_DESCRIPTORS.protected.descriptors['login'].route)}>
            Log in
          </Button>
          <Button
            primary
            onClick={() => navigate(SCREEN_DESCRIPTORS.protected.descriptors['signup'].route)}
          >
            Sign up
          </Button>
        </Inline>
      </Box>
      <Box align="center" alignY="center">
        {children}
      </Box>
    </Container>
  )
})
