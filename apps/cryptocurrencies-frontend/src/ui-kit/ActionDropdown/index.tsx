import styled from '@theme'
import { ActionDescriptor } from '../../app/actions/ActionDescriptor'
import { ReactNode, useMemo } from 'react'
import { Popup, Box, IconButton } from '@ui'

const ActionItem = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  border: none;
  background-color: ${(p) => p.theme.colors.surfaceContrast};
  ${(p) => p.theme.padding('XS', 'S')}
  ${(p) => p.theme.font.body()};

  &:not([disabled]) {
    cursor: pointer;
  }

  &:not([disabled]):hover {
    color: white;
    background-color: ${(p) => p.theme.colors.primary};
  }
`

export const ActionsPopup = ({ actions }: { actions: ActionDescriptor[] }) => {
  return (
    <Box>
      {actions.map((action) => (
        <ActionItem onClick={action.proceed}>{action.displayName}</ActionItem>
      ))}
    </Box>
  )
}

export const ActionDropdown: React.FC<{
  actions?: Array<ActionDescriptor | null>
  children: ReactNode
}> = ({ actions: _actions, children }) => {
  const actions = useMemo(() => _actions?.filter(Boolean) as ActionDescriptor[], [_actions])

  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <Popup popup={<ActionsPopup actions={actions} />} placement="bottom-end">
      {children || <IconButton icon={'menuHamburger'} size={'M'} />}
    </Popup>
  )
}
