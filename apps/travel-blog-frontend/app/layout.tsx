'use client';

import StyledComponentsRegistry from '../lib/registry';
import { Header, Footer } from '@common';
import './global.css';
import { theme, ThemeProvider } from '@theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
