import { ClassType, Field, ObjectType } from 'type-graphql'

export function createCRUDResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType(`Delete${TItemClass.name}Response`, { isAbstract: true })
  abstract class DeleteResponse {
    @Field((_type) => Boolean)
    success: boolean

    @Field((_type) => TItemClass, { nullable: true })
    item: TItem
  }
  return DeleteResponse
}
