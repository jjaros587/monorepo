import { Inline } from '@ui'
import { Modal, Button } from '../..'

interface Props {
  onAccept: any
  onDecline: any
  title: string
  description: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
}

export const ConfirmModal = (props: Props) => {
  const { title, description, onAccept, onDecline, confirmButtonLabel, cancelButtonLabel } = props
  return (
    <Modal onOverlayClick={onDecline} onEscape={onDecline}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Inline gap="M" align="flex-end">
          <Button onClick={onAccept} primary>
            {confirmButtonLabel || 'Confirm'}
          </Button>
          <Button onClick={onDecline}>{cancelButtonLabel || 'Cancel'}</Button>
        </Inline>
      </Modal.Footer>
    </Modal>
  )
}
