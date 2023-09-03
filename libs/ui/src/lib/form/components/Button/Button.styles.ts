import styled, { css } from '@theme'
import { ButtonVariant } from './Button.types'

export const primaryButtonCss = css`
  background-color: ${(p) => p.theme.colors.primary};
  ${(p) => p.theme.font.body('light')}

  outline: 1px solid ${(p) => p.theme.colors.primary};
`

export const secondaryButtonCss = css`
  background: transparent;
  ${(p) => p.theme.font.body('primary')}

  outline: 1px solid ${(p) => p.theme.colors.primary};
`

export const linkButtonCss = css`
  background-color: transparent;

  :not(:disabled) {
    text-decoration: underline solid ${(p) => p.theme.fontColors.basic};
    ${(p) => p.theme.font.body()};
    :hover {
      ${(p) => p.theme.font.body('light')};
      text-decoration: underline solid ${(p) => p.theme.fontColors.light};
    }
  }

  :disabled {
    ${(p) => p.theme.font.body('disabled')};
    text-decoration: underline solid ${(p) => p.theme.fontColors.disabled};
    background-color: transparent;
  }
`

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  white-space: nowrap;
  cursor: pointer;

  height: ${(p) => p.theme.spacing.XL};
  ${(p) => p.theme.padding(0, 'XL')}

  border: none;
  border-radius: 4px;

  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  :not(:disabled) {
    :hover,
    :focus {
      transform: scale(1.05);
    }
    :active {
      transform: scale(0.95);
    }
  }

  :disabled {
    color: white;
    opacity: 0.5;
    background-color: grey;
    cursor: not-allowed;
    user-select: none;
    &:active {
      pointer-events: none;
    }
  }

  ${(p) => p.variant === 'primary' && primaryButtonCss};
  ${(p) => p.variant === 'secondary' && secondaryButtonCss};
  ${(p) => p.variant === 'link' && linkButtonCss};
`
