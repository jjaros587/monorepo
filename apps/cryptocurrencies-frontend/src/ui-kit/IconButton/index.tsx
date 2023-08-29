import { Icon, IconNames } from '@icons'
import styled, { PositiveSpaceUnit } from '@theme'

export const StyledIconButton = styled.button<{ size: PositiveSpaceUnit }>`
  ${(p) => p.theme.padding(0)}
  ${(p) => p.theme.margin(0)}
  transition: 0.5s ease-out;
  border-radius: 50%;

  background: none;
  border: none;

  :not(:disabled) {
    cursor: pointer;
    &&& svg {
      fill: ${(p) => p.theme.colors.primary};
    }
    :hover {
      background-color: ${(p) => p.theme.colors.primary};
      &&& svg {
        fill: ${(p) => p.theme.colors.surface};
      }
    }
  }

  :disabled {
    cursor: not-allowed;
    &&& svg {
      fill: ${(p) => p.theme.colors.disabled};
    }
  }
`
interface IconButtonProps {
  icon: IconNames
  onClick?: () => void
  disabled?: boolean
  size?: PositiveSpaceUnit
}

export const IconButton = ({ icon, size, ...rest }: IconButtonProps) => {
  const currentSize = size || 'L'
  return (
    <StyledIconButton size={currentSize} {...rest}>
      <Icon name={icon} size={currentSize} />
    </StyledIconButton>
  )
}

// export const StyledIconButton = styled.button<{ size: PositiveSpaceUnit }>`
//   transition: 0.5s ease-out;
//   border-radius: 50%;
//   padding: 0;
//   background: none;
//   border: none;

//   :not(:disabled) {
//     cursor: pointer;
//   }

//   &&& svg {
//     fill: ${(p) => p.theme.colors.primary};
//   }

//   :hover {
//     &&& svg {
//       fill: ${(p) => p.theme.colors.surface};
//       width: ${(p) => (p.size ? p.theme.spacing[p.size] : '30px')};
//       height: ${(p) => (p.size ? p.theme.spacing[p.size] : '30px')};
//     }

//     background-color: ${(p) => p.theme.colors.onBackground};
//     box-shadow: 0 0 0 3px ${(p) => p.theme.colors.onBackground};
//   }
// `
