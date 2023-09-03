import { Icon, IconNames } from '@icons'
import styled, { PositiveSpaceUnit } from '@theme'
import { ButtonHTMLAttributes } from 'react'

export const StyledIconButton = styled.button<{ size: PositiveSpaceUnit }>`
  ${(p) => p.theme.padding(0)}
  ${(p) => p.theme.margin(0)}
  background: none;
  border: none;

  transition: 0.25s ease-out;
  border-radius: 50%;
  cursor: pointer;

  :not(:disabled) {
    :hover {
      transform: scale(1.2);
    }
  }

  :disabled {
    cursor: not-allowed;
    &&& svg {
      fill: ${(p) => p.theme.colors.disabled};
    }
  }
`
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconNames
  size?: PositiveSpaceUnit
  inverted?: boolean
}

export const IconButton = ({ icon, size: _size, inverted, ...rest }: IconButtonProps) => {
  const size = _size || 'L'

  return (
    <StyledIconButton size={size} {...rest}>
      <Icon name={icon} size={size} color={inverted ? 'surface' : 'primary'} />
    </StyledIconButton>
  )
}
