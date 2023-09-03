import { Box, Button, Inline, Text } from '@ui'
import { useBulkPanel } from '../../hooks'
import * as AppShell from '../../app/AppShell'

export const BulkPanel = () => {
  const { items, clear } = useBulkPanel()

  if (items.length === 0) {
    return null
  }

  return (
    <AppShell.BulkPanel>
      <Inline>
        <Text color="light">Items: {items.length}</Text>
        <Inline gap="M">
          <Button onClick={clear}>Clear selection</Button>
          <Button primary onClick={clear}>
            Action
          </Button>
        </Inline>
      </Inline>
    </AppShell.BulkPanel>
  )
}
