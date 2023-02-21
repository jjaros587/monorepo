import { useService } from '@hooks'
import { observer } from 'mobx-react'
import { ModalManager } from '@services'

export const ModalContainer = observer(() => {
  const { modal } = useService(ModalManager)
  return modal ? <>{modal}</> : null
})
