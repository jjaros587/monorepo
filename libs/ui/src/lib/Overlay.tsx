import { ReactFCWithChildren } from './types'
import { Portal } from 'react-portal'
import styled from '@theme'
import { Box } from './layout'
import { MouseEvent, useCallback, useEffect } from 'react'
import { useDocumentEventListener } from '@hooks'

const Container = styled(Box)`
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
`

interface Props {
  open: boolean
  onClose: () => void
  closeOnEsc?: boolean
  closeOnOverlayClick?: boolean
}

export const Overlay: ReactFCWithChildren<Props> = (props) => {
  const { children, open, onClose, closeOnEsc = true, closeOnOverlayClick = true } = props

  const onEscClick = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) {
        onClose()
      }
    },
    [closeOnEsc, onClose],
  )

  const onOverlayClick = useCallback(
    (e: MouseEvent) => {
      // Check if the click event is on the overlay and not on its content
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    },
    [closeOnOverlayClick, onClose],
  )

  useEffect(() => {
    lockScroll(open)
  }, [open])

  useDocumentEventListener('keydown', onEscClick)

  if (!open) {
    return null
  }

  return (
    <Portal>
      <Container align="center" alignY="center" padding="XL" onClick={onOverlayClick}>
        {children}
      </Container>
    </Portal>
  )
}

function lockScroll(state: boolean) {
  document.documentElement.style.overflow = state ? 'hidden' : ''
}
