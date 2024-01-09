import styled, { css } from '@theme'
import { Box, Inline, Text, Stack } from '@ui'
import { Children, FC, ReactNode, useState } from 'react'

interface TabItemProps {
  title: string
  children: ReactNode
}

interface TabsProps {
  children: ReactNode
}

const TabNavItem = styled(Box)<{ isSelected: boolean }>`
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.primary};
    `}

  box-shadow: 0px 2px 0px 0px ${(p) => p.theme.colors.primary};
  cursor: pointer;
`

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div>{children}</div>
}

export const _Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <Stack gap="M">
      <Inline>
        {Children.map(children, (child, index) =>
          child ? (
            <TabNavItem
              key={index}
              onClick={() => handleTabClick(index)}
              isSelected={activeTab === index}
              paddingY="XXS"
              paddingX="L"
            >
              <Text color="light">{(child as React.ReactElement).props.title}</Text>
            </TabNavItem>
          ) : null,
        )}
      </Inline>
      <div>{Children.toArray(children)[activeTab]}</div>
    </Stack>
  )
}

export const Tabs = Object.assign(_Tabs, { Item: TabItem })
