import styled from '@theme'

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${(p) => p.theme.padding(0)}
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
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

interface Props {
  checked: boolean
  onClick?: () => void
}

export const Checkbox = ({ checked, onClick }: Props) => {
  return (
    <>
      <HiddenCheckbox defaultChecked={checked} />
      <StyledCheckbox checked={checked} onClick={onClick}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </>
  )
}
