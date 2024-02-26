'use client'

import styled, { GlobalStyle, ThemeProvider, createTheme } from '@theme'
import '../assets/css/global.css'
import { StyledComponentsRegistry } from './registry'
import { Navigation } from '../src/components/Navigation/Navigation'
import { useMemo } from 'react'
import Script from 'next/script'

const Main = styled.main`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  background: var(--colors-background);
`

const Content = styled.div`
  position: relative;
  flex: 1;
  height: auto;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    ${(p) => p.theme.padding('XL')}
  }

  ${(p) => p.theme.padding('XXL')}
  max-width: 1440px;
  margin: auto;
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useMemo(
    () =>
      createTheme({
        colors: {
          navigation: '#1A1A1A',
          background: '#2C3D4F',
          surface: '#314254',
        },
      }),
    [],
  )

  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/9a5f795d71.js" />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main>
              <Navigation />
              <Content>
                <Wrapper>{children}</Wrapper>
              </Content>
            </Main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
