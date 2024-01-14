import styled from '@theme'
import { Box } from '@ui'
import { FC } from 'react'

const NavButton = styled(Box)`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 15px;
  right: 15px;
  border-radius: 50%;
  z-index: 1000;

  cursor: pointer;

  background-color: var(--colors-display);

  :hover {
    background-color: var(--colors-primary);
  }
`

interface Props {
  variant: 'small' | 'big'
  isOpened: boolean
  toggle: () => void
}

export const ToggleButton: FC<Props> = ({ variant, isOpened, toggle }) => {
  if (variant === 'big') {
    return null
  }

  return (
    <NavButton onClick={toggle} align="center" alignY="center">
      {isOpened ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
    </NavButton>
  )
}
