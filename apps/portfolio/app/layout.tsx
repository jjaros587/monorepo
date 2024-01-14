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

  background: ${(p) => p.theme.colors.background};
`

const Content = styled.div`
  position: relative;
  flex: 1;
  height: auto;
  overflow-y: scroll;
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
                <div>{children}</div>
              </Content>
            </Main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
