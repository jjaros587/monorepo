import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({
  primary,
  type = 'button',
  variant = 'secondary',
  children,
  ...rest
}) => {
  const calculatedVariant = primary ? 'primary' : variant

  return (
    <StyledButton type={type} variant={calculatedVariant} {...rest}>
      {children}
    </StyledButton>
  )
}
