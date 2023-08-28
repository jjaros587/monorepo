import styled from '@theme'

export const Container = styled.div`
  ${(p) => p.theme.font.body('danger')};
  ${(p) => p.theme.padding.top('XS')};
  ${(p) => p.theme.padding.left('M')};
`

export const InputErrorContainer = ({ error }: { error?: string }) => {
  return <>{error && <Container>{error}</Container>}</>
}
