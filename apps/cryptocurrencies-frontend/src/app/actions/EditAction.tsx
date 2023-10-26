import { ActionDescriptor } from './ActionDescriptor'
import { injectSafe } from '../../utils/inject'
import { EntityManagerService, SidebarManager, isOperationPermitted } from '../../services'
import { EntityNames } from '../../config/EntityConfig'
import { EntityForm } from '../../components/EntityForm'
import { capitalize } from 'lodash'
import { ListingModel } from '../../models/ListingModel'

type EntityData = { _id: string } & {
  [k: string]: any
}

export class EditAction<T extends { _id: string }> implements ActionDescriptor {
  @injectSafe(() => EntityManagerService)
  entityManager!: EntityManagerService

  @injectSafe(() => SidebarManager)
  sidebarManager!: SidebarManager

  displayName = 'Edit'

  static create(
    entityName: EntityNames,
    entityData: EntityData,
    listing: ListingModel<EntityData>,
  ) {
    if (!isOperationPermitted(entityName, 'edit')) {
      return null
    }

    return new EditAction(entityName, entityData, listing)
  }

  private constructor(
    private entityName: EntityNames,
    private entityData: T,
    private listing: ListingModel<EntityData>,
  ) {}

  proceed = async () => {
    this.sidebarManager.push({
      isDestructive: true,
      title: `Edit ${capitalize(this.entityName)}`,
      Renderer: () => (
        <EntityForm
          key={`edit_${this.entityData._id}`}
          entityName={this.entityName}
          initialValues={this.entityData}
          type={'edit'}
          fields={{}}
          onSuccess={() => {
            this.listing.reload()
            this.sidebarManager.pop()
          }}
        />
      ),
    })
  }
}
