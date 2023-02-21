import { ClassType, Field, ObjectType } from 'type-graphql'
import { PageInfo } from '../types/PageInfo'

export function createPaginagedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType(`Paginated${TItemClass.name}Response`, { isAbstract: true })
  abstract class PaginatedResponse {
    @Field((_type) => [TItemClass])
    items: TItem[]

    @Field((_type) => PageInfo)
    pageInfo: PageInfo
  }
  return PaginatedResponse
}
