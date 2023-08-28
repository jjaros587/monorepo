import * as S from './styled'
import takeRight from 'lodash/takeRight'
import { useFlashMessage } from '../../hooks'

export type FlashMessageType = 'warning' | 'danger' | 'success' | 'info' | 'info2'

export const FlashMessage = () => {
  const { items } = useFlashMessage()

  return items.length > 0 ? (
    <S.FlashMessageContainer>
      {takeRight(items, 5).map((message) => {
        const { type, title, content, id } = message
        return (
          <S.FlashMessage type={type} key={id}>
            {title && <S.FlashMessageTitle>{title}</S.FlashMessageTitle>}
            <S.FlashMessageContent>{content}</S.FlashMessageContent>
          </S.FlashMessage>
        )
      })}
    </S.FlashMessageContainer>
  ) : null
}
