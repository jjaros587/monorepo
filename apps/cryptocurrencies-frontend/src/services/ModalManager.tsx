import { ConfirmModal } from '../ui-kit'
import { observable, computed, action, makeObservable } from 'mobx'
import { isValidElement } from 'react'

export type RenderModal = (accept: () => void, decline: () => void) => React.ReactNode

function isRenderModal(modal: RenderModal | React.ReactNode): modal is RenderModal {
  return !isValidElement(modal) && typeof modal === 'function'
}

export class ModalManager {
  constructor() {
    makeObservable(this)
  }

  @observable
  private _modal: React.ReactNode | RenderModal = null
  private _resolve: any

  @computed
  get modal() {
    return isRenderModal(this._modal) ? this._modal(this.accept, this.decline) : this._modal
  }

  @action
  showModal = async <T,>(modal: React.ReactNode | RenderModal) => {
    this._modal = modal
    return new Promise<{ accepted: boolean; data: T }>((resolve) => {
      this._resolve = resolve
    })
  }

  async confirm(props: {
    title: string
    description: string
    confirmButtonLabel?: string
    cancelButtonLabel?: string
  }) {
    const { accepted } = await this.showModal<never>((accept: () => void, decline: () => void) => {
      return <ConfirmModal onAccept={accept} onDecline={decline} {...props} />
    })
    return accepted
  }

  @action
  closeModal = () => {
    this._modal = null
  }

  @action
  accept = () => {
    if (this._resolve) {
      this._resolve({
        accepted: true,
      })
    }
    this.closeModal()
  }

  @action
  decline = () => {
    if (this._resolve) {
      this._resolve({
        accepted: false,
      })
    }
    this.closeModal()
  }
}
