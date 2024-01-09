'use client'

import styled, { ThemeProvider, theme } from '@theme'
import './global.css'
import { StyledComponentsRegistry } from './registry'
import { Header } from '../src/components/Header/Header'
import { HEADER_HEIGHT, HEADER_GAP } from '../src/constants'
import { Box } from '@ui'
import { Footer } from '../src/components/Footer/Footer'

const Main = styled.main`
  ${(p) => p.theme.margin('L')}
  position: relative;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${HEADER_GAP});
  top: ${HEADER_GAP};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black' }}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Header />
            <Main>
              <Box padding="L" className="contentWrapper">
                {children}
              </Box>
            </Main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
