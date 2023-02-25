'use client';

import StyledComponentsRegistry from '../lib/registry';
import { Header, Footer } from '@common';
import './global.css';
import { theme, ThemeProvider } from '@theme';
import { ScrollToTopButton } from 'src/common/ScrollToTopButton/ScrollToTopButton';

export default function HomepageLayout({
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
            <ScrollToTopButton />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
