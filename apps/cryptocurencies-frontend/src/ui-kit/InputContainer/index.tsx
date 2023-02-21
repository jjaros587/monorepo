import { Label, InputErrorContainer } from '@ui'

interface Props {
  label: string
  required?: boolean
  error?: string
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
