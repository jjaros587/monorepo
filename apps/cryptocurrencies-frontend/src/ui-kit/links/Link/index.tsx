import styled, { css } from '@theme'

interface Props {
  disabled?: boolean
}

export const Link = styled.a<Props>`
  ${(p) => (p.disabled ? p.theme.font.body('disabled') : p.theme.font.body())};
  text-decoration: underline solid ${(p) => (p.disabled ? p.theme.fontColors.disabled : p.theme.fontColors.basic)};
  cursor: pointer;

  :hover {
    ${(p) =>
      p.disabled
        ? css`
            cursor: not-allowed;
          `
        : css`
            ${p.theme.font.body('light')}
            text-decoration: underline solid ${(p) => p.theme.fontColors.light};
          `}
`
