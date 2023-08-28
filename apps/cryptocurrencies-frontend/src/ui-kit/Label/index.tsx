import { Box, Inline, Text } from '@ui'

interface Props {
  label: string
  required?: boolean
}

export const Label = ({ label, required }: Props) => {
  return (
    <Box paddingBottom="XS">
      <Inline gap="XS">
        <Text>{label}</Text>
        {required && <Text color="danger">*</Text>}
      </Inline>
    </Box>
  )
}
