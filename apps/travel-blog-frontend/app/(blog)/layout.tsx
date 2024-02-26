'use client'

import { Content } from '../../src/common'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Content>{children}</Content>
}
