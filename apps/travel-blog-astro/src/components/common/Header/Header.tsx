import styled, { theme, ThemeProvider } from '@theme'
import { Box, Inline } from '@ui'
import { Navigation } from './components/Navigation/Navigation'
import { useLayoutEffect, useState } from 'react'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;

  border-bottom: 1px solid #333;
  z-index: 1000;
`

const GlassmorphicHeader = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgb(14, 14, 15, 0.75);
  // background-color: #121212;
  // background-color: #34344a;
  backdrop-filter: blur(14px);
`

const NavigationWrapper = styled(Inline)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Header = () => {
  const getSize = () => {
    return window.innerWidth <= 768 ? 'small' : 'big'
  }

  const [state, setState] = useState<'big' | 'small'>(getSize)

  useLayoutEffect(() => {
    const handleResize = () => setState(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <GlassmorphicHeader />
        <NavigationWrapper align="space-between" alignY="center">
          <Box paddingX="M">Logo</Box>
          {state === 'big' && <Navigation />}

          <Box paddingX="M"></Box>
        </NavigationWrapper>
      </StyledHeader>
    </ThemeProvider>
  )
}
