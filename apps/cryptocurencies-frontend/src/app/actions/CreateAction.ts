import { EntityNames } from 'src/config/EntityConfig'
import { ActionDescriptor } from './ActionDescriptor'

export class CreateAction implements ActionDescriptor {
  displayName = 'Create'
  static create() {}

  constructor(entityName: EntityNames) {}

  proceed = () => {
    // sidebar.push({
    //   isDestructive: true,
    //   title: 'Add New Transaction',
    //   Renderer: () => Component(handleAdd)
    // })
  }
}
