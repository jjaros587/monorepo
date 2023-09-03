import * as AppShell from '../AppShell'
import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BulkPanel, Navigation, Sidebar, FlashMessage } from '../../components'
import { useSidebar, useBulkPanel, useService } from '../../hooks'
import { ModalManager } from '../../services'
import { observer } from 'mobx-react'
import { Routes } from '../router/Routes'

export const AppLayout = observer(({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const sidebar = useSidebar()
  const bulkPanel = useBulkPanel()
  const { modal } = useService(ModalManager)

  useEffect(() => {
    sidebar.pop()
    bulkPanel.clear()
  }, [location])

  return (
    <AppShell.Container>
      <Navigation />
      <AppShell.Main>
        <AppShell.Content>
          <AppShell.PageWrapper>{children}</AppShell.PageWrapper>
          <BulkPanel />
        </AppShell.Content>

        <AppShell.Sidebar opened={sidebar.isOpen}>
          <Sidebar />
        </AppShell.Sidebar>
      </AppShell.Main>

      <FlashMessage />
      {modal ? modal : null}
    </AppShell.Container>
  )
})
