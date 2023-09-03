import { ReactNode } from 'react'
import { InputErrorContainer } from '..'
import { Label } from '@ui'

interface Props {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

export const InputContainer: React.FC<Props> = ({ children, label, required, error }) => {
  return (
    <div>
      <Label label={label} required={required} />
      {children}
      <InputErrorContainer error={error} />
    </div>
  )
}
