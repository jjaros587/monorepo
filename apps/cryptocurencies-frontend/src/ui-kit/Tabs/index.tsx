import { useState, useMemo } from 'react'
import { IconNames, Inline } from '@ui'
import styled, { css } from '@theme'

export interface TabDescriptor<ID extends string = string> {
  id: ID
  displayName: string
  icon?: IconNames
  disabled?: boolean
  Content: React.ReactNode
}

interface Props {
  tabs: TabDescriptor[]
}

const TabItem = styled.div<{ isActive: boolean }>`
  ${(p) => p.theme.padding('M', 'XL')}
  cursor: pointer;
  ${(p) =>
    p.isActive &&
    css`
      background-color: ${p.theme.colors.primary};
    `}
  :hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`

export const Tabs = ({ tabs }: Props) => {
  const availableTabs = useMemo(() => {
    return tabs.filter((tab) => !tab.disabled)
  }, [])
  const [activeTab, setActiveTab] = useState<TabDescriptor>(availableTabs[0])

  const handleTabChange = (newTab: TabDescriptor) => {
    setActiveTab(newTab)
  }

  return (
    <>
      <Inline>
        {availableTabs.map((tab) => (
          <TabItem isActive={tab.id === activeTab.id} onClick={() => handleTabChange(tab)}>
            {tab.displayName}
          </TabItem>
        ))}
      </Inline>
      <div>{activeTab.Content}</div>
    </>
  )
}
