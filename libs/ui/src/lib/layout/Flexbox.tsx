import styled from '@theme'
import { ReactNode } from 'react'

interface Props {
  direction: 'row' | 'column'
  children: ReactNode
}

const FlexBoxBase = styled.div<Props>`
  display: inline-flex;
  flex-direction: ${(p) => p.direction};
  gap: 10px;
  flex-wrap: wrap;
`

export const Flexbox: React.FC<Props> = ({ children, ...props }) => {
  return <FlexBoxBase {...props}>{children}</FlexBoxBase>
}
