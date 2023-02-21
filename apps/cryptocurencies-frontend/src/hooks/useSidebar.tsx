import { IconNames } from '@ui'
import { createContext, ReactNode, useContext, useState } from 'react'

interface SidebarContextProps {
  isOpen: boolean
  sidebarItem: SidebarItem | null
  push: (item: SidebarItem) => void
  pop: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  sidebarItem: null,
  push: () => console.log('You are using SidebarContext out of SidebarContext.Provider'),
  pop: () => console.log('You are using SidebarContext out of SidebarContext.Provider')
})

export interface SidebarItem {
  isDestructive?: boolean
  title: string
  icon?: IconNames
  Renderer: React.ComponentType
}

export const SidebarProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sidebarItem, setSidebarItem] = useState<SidebarItem | null>(null)

  const pop = () => {
    setIsOpen(false)
    setSidebarItem(null)
  }

  const push = (item: SidebarItem) => {
    setIsOpen(true)
    setSidebarItem(item)
  }

  return <SidebarContext.Provider value={{ pop, push, isOpen, sidebarItem }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext)
