import { apiClient } from '../api';
import { entityConfig } from '../config/EntityConfig';
import { injectSafe } from '../utils/inject';
import { DocumentNodeService } from './DocumentNodeService';

export class EntityManagerService {
  @injectSafe(() => DocumentNodeService)
  ds!: DocumentNodeService;

  readonly entities = entityConfig;

  async delete<T>(entityName: string, _id: string) {
    const node = await this.ds.delete(entityName);
    await apiClient.mutate<{ [key: string]: T }>({
      mutation: node,
      variables: { _id },
    });
  }
}
