import { ClassType, Field, ObjectType } from 'type-graphql'

export function createCRUDResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType(`CRUDResponse${TItemClass.name}`, { isAbstract: true })
  abstract class CRUDResponse {
    @Field(() => Boolean)
    success: boolean

    @Field(() => TItemClass, { nullable: true })
    item: TItem
  }

  return CRUDResponse
}
