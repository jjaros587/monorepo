import { FlashMessageType } from '.'
import styled, { Colors, css } from '@theme'

export const FlashMessageContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const flashMessageStyleGen = (color: Colors) => css`
  border: 1px solid ${(p) => p.theme.colors[color]};
  border-left: 5px solid ${(p) => p.theme.colors[color]};
  color: ${(p) => p.theme.colors[color]};
  background-color: ${(p) => p.theme.colors[color]}15;
  :hover {
    background-color: ${(p) => p.theme.colors[color]}35;
  }
`

export const FlashMessage = styled.div<{ type: FlashMessageType }>`
  box-shadow: 0px 0px 2px #259c08;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transition: 0.5s;
  }

  ${(p) => p.theme.margin.bottom('S')}
  width: 250px;
  min-height: 50px;
  max-height: 80px;
  z-index: 1000;
  ${(p) => p.theme.padding('M')};

  ${(p) => {
    switch (p.type) {
      case 'danger':
        return flashMessageStyleGen('danger')
      case 'warning':
        return flashMessageStyleGen('warning')
      case 'info':
        return flashMessageStyleGen('info')
      case 'success':
        return flashMessageStyleGen('success')
      case 'info2':
        return flashMessageStyleGen('info2')
    }
  }}
`

export const FlashMessageTitle = styled.div`
  font-weight: bold;
  ${(p) => p.theme.margin.bottom('XS')}
`

export const FlashMessageContent = styled.div``

//   transition: opacity 0.3s linear 2s;
//   width: 250px;
//   min-height: 50px;
//   max-height: 80px;
//   background-color: white;
//   margin-bottom: ${(p) => p.theme.spacing.S};
//   padding: ${(p) => p.theme.spacing.M};
//   z-index: 1000;
//   border-left: 10px solid
//     ${(p) => {
//       if (p.type === FlashMessageType.Error) {
//         return p.theme.colors.Danger
//       } else if (p.type === FlashMessageType.Warning) {
//         return p.theme.colors.White
//       } else {
//         return p.theme.colors.Blue
//       }
//     }};
