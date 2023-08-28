import styled from '@theme'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1040;
  background-color: #000;
  opacity: 0.7;
`

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: -15%;

  z-index: 1050;

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
