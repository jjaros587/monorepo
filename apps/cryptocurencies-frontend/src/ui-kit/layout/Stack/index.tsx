import styled, { PositiveSpaceUnit } from '@theme'

interface Props {
  gap?: PositiveSpaceUnit
}

const StackBase = styled.div<Props>`
  display: grid;
  gap: ${(p) => p.gap && p.theme.spacing[p.gap]};
`

export const Stack: React.FC<Props> = ({ children, ...rest }) => {
  return <StackBase {...rest}>{children}</StackBase>
}
