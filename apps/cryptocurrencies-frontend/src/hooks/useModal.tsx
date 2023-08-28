import { ConfirmModal } from '../ui-kit'
import React, {
  createContext,
  isValidElement,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react'

interface BulkPanelContextProps {
  modal: React.ReactNode | RenderModal
  showModal: (modal: React.ReactNode | RenderModal) => void
  closeModal: () => void
  confirm: () => Promise<boolean>
}

function onError() {
  console.log('You are using ModalContext out of ModalContext.Provider')
}

export type RenderModal = (accept: () => void, decline: () => void) => React.ReactNode

function isRenderModal(modal: RenderModal | React.ReactNode): modal is RenderModal {
  return !isValidElement(modal) && typeof modal === 'function'
}

export const ModalContext = createContext<BulkPanelContextProps>({
  modal: null,
  showModal: onError,
  closeModal: onError,
  confirm: async () => true,
})

export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [_modal, setModal] = useState<React.ReactNode | RenderModal>(null)
  let _resolve: any = undefined

  const modal = useMemo(() => {
    if (_modal) {
      return isRenderModal(_modal)
        ? _modal(
            () => {
              if (_resolve) {
                _resolve({
                  accepted: true,
                })
              }
              closeModal()
            },
            () => {
              if (_resolve) {
                _resolve({
                  accepted: false,
                })
              }
              closeModal()
            },
          )
        : _modal
    } else {
      return _modal
    }
  }, [_modal])

  const accept = () => {
    if (_resolve) {
      _resolve({
        accepted: true,
      })
    }
    closeModal()
  }

  const decline = () => {
    if (_resolve) {
      _resolve({
        accepted: false,
      })
    }
    closeModal()
  }

  const showModal = async <T,>(modal: React.ReactNode | RenderModal) => {
    setModal(modal)

    return new Promise<{ accepted: boolean; data: T }>((resolve) => {
      _resolve = resolve
    })
  }

  const confirm = async () => {
    const { accepted } = await showModal<never>((accept: () => void, decline: () => void) => {
      return (
        <ConfirmModal
          onAccept={accept}
          onDecline={decline}
          title="Confirm delete"
          description="Are you sure you want to delete...?"
        />
      )
    })

    return accepted
  }

  const closeModal = () => setModal(null)

  return (
    <ModalContext.Provider value={{ modal, showModal, closeModal, confirm }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
