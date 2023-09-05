import { DocumentNode } from '@apollo/client'
import { buildDeleteMutation } from '../graphql/factories/buildDeleteMutation'
import { buildCreateMutation } from '../graphql/factories/buildCreateMutation'
import { buildUpdateMutation } from '../graphql/factories/buildUpdateMutation'
import { buildListQuery } from '../graphql/factories/buildListQuery'

export class DocumentNodeService {
  async list(entityName: string, properties: string[]): Promise<DocumentNode> {
    return buildListQuery(entityName, properties)
  }

  async create(entityName: string): Promise<DocumentNode> {
    return buildCreateMutation(entityName)
  }

  async update(entityName: string): Promise<DocumentNode> {
    return buildUpdateMutation(entityName)
  }

  async delete(entityName: string): Promise<DocumentNode> {
    return buildDeleteMutation(entityName)
  }
}
