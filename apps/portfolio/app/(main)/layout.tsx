'use client'

import styled from '@theme'

const Content = styled.div`
  ${(p) => p.theme.padding('XXL')}
  max-width: 1440px;
  margin: auto;
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Content>{children}</Content>
}
