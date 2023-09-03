import { ClassType, Field, ObjectType } from 'type-graphql'
import { PageInfo } from '../types/PageInfo'

export function createPaginagedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType(`PaginatedResponse${TItemClass.name}`, { isAbstract: true })
  abstract class PaginatedResponse {
    @Field(() => [TItemClass])
    items: TItem[]

    @Field(() => PageInfo)
    pageInfo: PageInfo
  }

  return PaginatedResponse
}
