import { ReactNode } from 'react'
import { Label } from './InputLabel'
import { Box } from '../../layout'
import { Text } from '../../Text'

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
      {error ? (
        <Box paddingTop="XS" paddingLeft="M">
          <Text color="danger">{error}</Text>
        </Box>
      ) : null}
    </div>
  )
}
