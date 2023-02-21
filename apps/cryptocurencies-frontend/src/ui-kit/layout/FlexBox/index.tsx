import styled from '@theme'

interface Props {
  direction: 'row' | 'column'
}

const FlexBoxBase = styled.div<Props>`
  display: inline-flex;
  flex-direction: ${(p) => p.direction};
  gap: 10px;
  flex-wrap: wrap;
`

export const FlexBox: React.FC<Props> = ({ children, ...props }) => {
  return <FlexBoxBase {...props}>{children}</FlexBoxBase>
}
