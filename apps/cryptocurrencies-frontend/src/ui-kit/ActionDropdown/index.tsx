import styled from '@theme'
import { ActionDescriptor } from '../../app/actions/ActionDescriptor'
import { ReactNode } from 'react'
import { Popup, Board, IconButton } from '@ui'

const ActionItem = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  border: none;
  background-color: ${(p) => p.theme.colors.surface};
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
    <Board>
      {actions.map((action) => (
        <ActionItem onClick={action.proceed}>{action.displayName}</ActionItem>
      ))}
    </Board>
  )
}

export const ActionDropdown: React.FC<{ actions?: ActionDescriptor[]; children: ReactNode }> = ({
  actions,
  children,
}) => {
  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <Popup popup={<ActionsPopup actions={actions} />} placement="bottom-end">
      {children || <IconButton icon={'menuHamburger'} size={'M'} />}
    </Popup>
  )
}
