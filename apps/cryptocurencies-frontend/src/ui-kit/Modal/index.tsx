import { Card } from '@ui'
import { Portal } from 'react-portal'
import { ConfirmModal } from './modals/ConfirmModal'
import { ModalOverlay, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from './styled'

interface Props {
  onOverlayClick: () => void
  onEscape: () => void
}

const ModalBase: React.FC<Props> = ({ children, onOverlayClick, onEscape }) => {
  return (
    <Portal>
      <ModalOverlay />
      <ModalWrapper>
        <Card size="L">{children}</Card>
      </ModalWrapper>
    </Portal>
  )
}

export const Modal = Object.assign(ModalBase, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
})

export { ConfirmModal }
