import { Card, Overlay } from '@ui'
import { ReactNode } from 'react'
import styled from '@theme'

export const ModalWrapper = styled.div`
  margin-top: -15%;

  overflow-x: hidden;
  overflow-y: auto;
`

export const ModalHeader = styled.div`
  ${(p) => p.theme.font.headline2()};
  ${(p) => p.theme.padding.bottom('M')};
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
`

export const ModalBody = styled.div`
  ${(p) => p.theme.padding('XXL', 0)};
  ${(p) => p.theme.font.body()};
`

export const ModalFooter = styled.div`
  ${(p) => p.theme.padding.top('M')};
  border-top: 1px solid ${(p) => p.theme.colors.primary};
`

interface Props {
  onClose: () => void
  children: ReactNode
}

const ModalBase: React.FC<Props> = ({ children, onClose }) => {
  return (
    <Overlay onClose={onClose} open={true}>
      <ModalWrapper>
        <Card size="L">{children}</Card>
      </ModalWrapper>
    </Overlay>
  )
}

export const Modal = Object.assign(ModalBase, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
