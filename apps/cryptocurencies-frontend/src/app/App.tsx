import * as AppShell from './AppShell'
import { Routes } from './router'
import { BulkPanel, Navigation, Sidebar, FlashMessage, ModalContainer } from '@components'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSidebar, useBulkPanel } from '@hooks'

export default function App() {
  const location = useLocation()
  const sidebar = useSidebar()
  const bulkPanel = useBulkPanel()

  useEffect(() => {
    sidebar.pop()
    bulkPanel.clear()
  }, [location])

  return (
    <AppShell.Container>
      <Navigation />
      <AppShell.Main>
        <AppShell.Content>
          <AppShell.PageWrapper>
            <Routes />
          </AppShell.PageWrapper>

          <AppShell.BulkPanel>
            <BulkPanel />
          </AppShell.BulkPanel>
        </AppShell.Content>

        <AppShell.Sidebar opened={sidebar.isOpen}>
          <Sidebar />
        </AppShell.Sidebar>
      </AppShell.Main>
      <FlashMessage />
      <ModalContainer />
    </AppShell.Container>
  )
}
