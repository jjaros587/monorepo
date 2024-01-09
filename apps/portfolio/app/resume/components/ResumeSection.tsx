import { Box, Text, Stack, ReactFCWithChildren } from '@ui'

interface Props {
  title: string
  id: string
}

export const ResumeSection: ReactFCWithChildren<Props> = ({ title, id, children }) => {
  return (
    <Box id={id}>
      <Text variant="headline1">{title}</Text>
      <Stack gap="XL">{children}</Stack>
    </Box>
  )
}
