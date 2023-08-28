import styled from '@theme'

export const CurrentUserEmail = styled.div`
  ${(p) => p.theme.font.bodyMedium()};
  ${(p) => p.theme.margin.bottom('M')};
  ${(p) => p.theme.padding(0, 'XS', 'S')};
  text-align: center;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
`

export const CurrentUserItem = styled.div`
  ${(p) => p.theme.font.bodyMedium()};
  cursor: pointer;

  :hover {
    color: ${(p) => p.theme.colors.primary};

    svg {
      fill: ${(p) => p.theme.colors.primary} !important;
    }
  }
`
