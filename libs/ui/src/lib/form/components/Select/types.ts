import { IconNames } from '@icons'

export interface SelectItem {
  label: string
  value: unknown
  icon?: IconNames
  disabled?: boolean
}
