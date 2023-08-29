import { EntityManagerService, ModalManager } from '../../services'
import { ActionDescriptor } from './ActionDescriptor'
import { injectSafe } from '../../utils/inject'
import { buildDeleteMutation } from '../../graphql/factories/buildDeleteMutation'
import { apiClient } from '../../api'

export class DeleteAction<T extends { _id: string }> implements ActionDescriptor {
  @injectSafe(() => EntityManagerService)
  entityManager!: EntityManagerService

  @injectSafe(() => ModalManager)
  modalManager!: ModalManager

  displayName = 'Delete'

  constructor(private entityName: string, private entityData: T) {}

  proceed = async () => {
    const accepted = await this.modalManager.confirm({
      title: 'Confirm delete',
      description: 'Are you sure you want to delete this item?',
      confirmButtonLabel: 'Delete',
    })
    if (!accepted) {
      return
    }
    const deleteMutation = buildDeleteMutation(this.entityName)
    await apiClient.mutate({
      mutation: deleteMutation,
      variables: { _id: this.entityData._id },
    })
    // console.log('mutation', JSON.stringify(deleteMutation))
    // debugger
    // this.entityManager.delete(this.entityName, this.entityData._id)
  }
}
