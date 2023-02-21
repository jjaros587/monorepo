import { Box, IconButton, Inline, InlineItem, Text } from '@ui'
import { useSidebar } from '@hooks'
import styled from '@theme'

export const Sidebar = () => {
  const { pop, sidebarItem } = useSidebar()

  return (
    sidebarItem && (
      <>
        <Box paddingX="S" paddingY="M">
          <Inline>
            <InlineItem flexGrow>
              <Text variant="headline2">{sidebarItem.title}</Text>
            </InlineItem>
            <IconButton icon={'close'} onClick={pop} />
          </Inline>
        </Box>
        <Box padding="M">
          <sidebarItem.Renderer />
        </Box>
      </>
    )
  )
}
