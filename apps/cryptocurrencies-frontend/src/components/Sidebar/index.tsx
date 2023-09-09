import { useService } from '../../hooks'
import { Box, Text, Inline, IconButton } from '@ui'
import { ModalManager, SidebarManager } from '../../services'
import { observer } from 'mobx-react'

const SidebarComponent = () => {
  const { pop, sidebarItem } = useService(SidebarManager)
  const modalManager = useService(ModalManager)

  const handleOnCLose = async () => {
    if (sidebarItem?.isDestructive) {
      const accepted = await modalManager.confirm({
        title: 'Unsaved changes',
        description: 'Are you sure you want close the sidebar? All changes made will be lost.',
        confirmButtonLabel: 'Close',
      })

      if (!accepted) {
        return
      }
    }
    pop()
  }

  return (
    sidebarItem && (
      <>
        <Box padding="M" backgroundColor="primary">
          <Inline>
            <Inline.Item flexGrow>
              <Text variant="headline2" color="light">
                {sidebarItem.title}
              </Text>
            </Inline.Item>
            <IconButton icon={'close'} onClick={handleOnCLose} inverted />
          </Inline>
        </Box>
        <Box padding="M">
          <sidebarItem.Renderer />
        </Box>
      </>
    )
  )
}

export const Sidebar = observer(SidebarComponent)
