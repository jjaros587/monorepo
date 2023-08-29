import { IconButton } from '../../ui-kit'
import { useSidebar } from '../../hooks'
import { Box, Text, Inline } from '@ui'

export const Sidebar = () => {
  const { pop, sidebarItem } = useSidebar()

  return (
    sidebarItem && (
      <>
        <Box padding="M">
          <Inline>
            <Inline.Item flexGrow>
              <Text variant="headline2">{sidebarItem.title}</Text>
            </Inline.Item>
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
