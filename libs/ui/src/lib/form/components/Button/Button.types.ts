import { IconNames } from '@icons'

export type ButtonVariant = 'primary' | 'secondary' | 'link'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  disabled?: boolean
  icon?: IconNames
  variant?: ButtonVariant
  type?: 'button' | 'submit'
}
