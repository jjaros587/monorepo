import styled from '@theme'

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${(p) => p.theme.padding(0)}
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: ${(p) => p.theme.spacing.M};
  height: ${(p) => p.theme.spacing.M};
  background-color: ${(p) => (p.checked ? p.theme.colors.secondary : 'white')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.secondary};
  }

  :hover {
    box-shadow: 0 0 0 2px ${(p) => p.theme.colors.secondary};
  }

  ${Icon} {
    visibility: ${(p) => (p.checked ? 'visible' : 'hidden')};
  }
`
