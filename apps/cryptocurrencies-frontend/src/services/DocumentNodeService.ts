import { DocumentNode } from '@apollo/client'
import { buildDeleteMutation } from '../graphql/factories/buildDeleteMutation'
import { buildCreateMutation } from '../graphql/factories/buildCreateMutation'
import { buildUpdateMutation } from '../graphql/factories/buildUpdateMutation'
import { buildListQuery } from '../graphql/factories/buildListQuery'

export class DocumentNodeService {
  list(entityName: string, properties: string[]): DocumentNode {
    return buildListQuery(entityName, properties)
  }

  create(entityName: string): DocumentNode {
    return buildCreateMutation(entityName)
  }

  update(entityName: string): DocumentNode {
    return buildUpdateMutation(entityName)
  }

  delete(entityName: string): DocumentNode {
    return buildDeleteMutation(entityName)
  }
}
