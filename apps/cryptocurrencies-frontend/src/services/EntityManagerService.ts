import { apiClient } from '../api/ApiClient'
import { EntityNames, Operations, entityConfig } from '../config/EntityConfig'
import { ListingResponse, ListingArgs } from '../models/types'
import { injectSafe } from '../utils/inject'
import { DocumentNodeService } from './DocumentNodeService'

export class EntityManagerService {
  @injectSafe(() => DocumentNodeService)
  dns!: DocumentNodeService

  async createEntity<T>(entityName: string, data: T) {
    const createMutation = this.dns.create(entityName)
    return apiClient.mutate({ mutation: createMutation, variables: { new: data } })
  }

  async updateEntity<T>(entityName: string, _id: string, data: T) {
    const updateMutation = this.dns.update(entityName)
    return apiClient.mutate({ mutation: updateMutation, variables: { _id, patch: data } })
  }

  async deleteEntity(entityName: string, _id: string) {
    const deleteMutation = this.dns.delete(entityName)
    return apiClient.mutate({
      mutation: deleteMutation,
      variables: { _id },
    })
  }

  fetchEntities<T>(entityName: string, properties: string[]) {
    const listQuery = this.dns.list(entityName, properties)
    return async (args: ListingArgs) =>
      apiClient
        .query<{ [key: string]: ListingResponse<T> }>({
          query: listQuery,
          variables: args,
        })
        .then(({ data }) => data[`${entityName}s`])
  }
}

export function isOperationPermitted(entityName: EntityNames, operation: Operations) {
  return entityConfig[entityName].operations.some((_operation) => _operation === operation)
}
