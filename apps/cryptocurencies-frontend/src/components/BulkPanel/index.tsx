import { Box, Button, Inline, Text } from '@ui'
import { useBulkPanel } from 'src/hooks/useBulkPanel'

export const BulkPanel = () => {
  const { items, clear } = useBulkPanel()

  if (items.length > 0) {
    {
      return (
        <Box backgroundColor="secondary">
          <Text color="light">Items: {items.length}</Text>
          <Inline gap="M">
            <Button onClick={clear}>Clear selection</Button>
            <Button primary onClick={clear}>
              Action
            </Button>
          </Inline>
        </Box>
      )
    }
  }
  return null
}
