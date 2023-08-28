import * as AppShell from './AppShell'
import { useEffect } from 'react'

import { Routes } from './router'
import { useLocation } from 'react-router-dom'
import { BulkPanel, Navigation, Sidebar, FlashMessage, ModalContainer } from '../components'
import { useSidebar, useBulkPanel } from '../hooks'

export function App() {
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
