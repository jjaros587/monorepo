import React from 'react'
import { Checkbox } from '@ui'

interface Props {
  defaultChecked?: boolean
  onClick?: (checked: boolean) => void
}

export const ManagedCheckbox = ({ defaultChecked, onClick }: Props) => {
  const [checked, setChecked] = React.useState<boolean>(!!defaultChecked)

  const handleChange = () => {
    onClick?.(checked)
    setChecked(!checked)
  }

  return <Checkbox checked={checked} onClick={handleChange} />
}
