import { Text, Box } from '@ui'

export const InputErrorContainer = ({ error }: { error?: string }) => {
  if (error) {
    return (
      <Box paddingTop="XS" paddingLeft="M">
        <Text color="danger">{error}</Text>
      </Box>
    )
  }

  return null
}
