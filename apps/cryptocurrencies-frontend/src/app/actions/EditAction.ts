import { ActionDescriptor } from './ActionDescriptor'
import { injectSafe } from '../../utils/inject'
import { EntityManagerService, isOperationPermitted } from '../../services'
import { EntityNames, entityConfig } from '../../config/EntityConfig'

export class EditAction<T extends { _id: string }> implements ActionDescriptor {
  @injectSafe(() => EntityManagerService)
  entityManager!: EntityManagerService

  displayName = 'Edit'

  static create(entityName: EntityNames, entityData: any) {
    if (!isOperationPermitted(entityName, 'edit')) {
      return null
    }

    return new EditAction(entityName, entityData)
  }

  private constructor(private entityName: EntityNames, private entityData: T) {}

  proceed = async () => undefined
}
