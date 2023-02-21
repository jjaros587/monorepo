import styled from '@theme'

export const Container = styled.div`
  & > *:not(:last-child) {
    ${(p) => p.theme.margin.bottom('M')}
  }
`

export const ActionContainer = styled.div`
  & > *:not(:last-child) {
    ${(p) => p.theme.margin.right('S')}
  }
  ${(p) => p.theme.margin.top('M')}
  ${(p) => p.theme.margin.bottom('S')}
`
