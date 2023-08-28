import { ActionDescriptor } from './ActionDescriptor';
import { injectSafe } from '../../utils/inject';
import { EntityManagerService } from '../../services';

export class EditAction<T extends { _id: string }> implements ActionDescriptor {
  @injectSafe(() => EntityManagerService)
  entityManager!: EntityManagerService;

  displayName = 'Edit';

  constructor(private entityName: string, private entityData: T) {}

  proceed = async () => undefined;
}
