import styled, { css } from '@theme'

export const inputBaseCSS = css`
  ${(p) => p.theme.font.caption()};
  ${(p) => p.theme.margin.bottom('XS')}

  position: relative;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  background-color: #0d0f13;
  border: none;
  font-size: 14px;
  :hover {
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.primary};
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
`

export const Input = styled.input<{ hasError?: boolean }>`
  ${inputBaseCSS}
  :focus {
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.primary};
  }

  ${(p) => p.hasError && ErrorBorder}
`

export const ErrorBorder = css`
  &&& {
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.danger};

    :focus {
      box-shadow: 0 0 0 2px ${(p) => p.theme.colors.danger};
    }
  }
`
