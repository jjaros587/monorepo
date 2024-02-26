'use client'

import StyledComponentsRegistry from '../lib/registry'
import { Header, Footer, ScrollToTopButton } from '../src/common'
import './global.css'
import { theme, ThemeProvider } from '@theme'
import { ReactNode } from 'react'

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
      />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
            <ScrollToTopButton />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
