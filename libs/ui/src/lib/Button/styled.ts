import styled, { css } from '@theme';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  white-space: nowrap;
  color: white;
  cursor: pointer;
  text-align: center;

  height: ${(p) => p.theme.spacing.XL};
  ${(p) => p.theme.padding(0, 'XL')}

  border: transparent;
  border-radius: 4px;
  outline-offset: 0px;

  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  :not(:disabled) {
    :hover,
    :focus {
      outline-color: rgba(0, 0, 0, 0);
      outline-offset: 15px;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.2);
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

  :active:after {
  }

  :active {
    outline-color: rgba(0, 0, 0, 0);
    transform: scale(0.95);
  }

  ${(p) => p.variant === 'primary' && primaryButtonCss};
  ${(p) => p.variant === 'secondary' && secondaryButtonCss};
  ${(p) => p.variant === 'link' && linkButtonCss};
`;

export const primaryButtonCss = css`
  background-color: ${(p) => p.theme.colors.primary};
  outline: 1px solid ${(p) => p.theme.colors.primary};
`;

export const secondaryButtonCss = css`
  background-color: ${(p) => p.theme.colors.terciary};
  outline: 1px solid ${(p) => p.theme.colors.terciary};
`;

export const linkButtonCss = css`
  background-color: transparent;
  border: none;
  ${(p) => p.theme.padding(0)}

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
`;
