import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class PageInfo {
  @Field(() => Boolean)
  hasPreviousPage: boolean

  @Field(() => Boolean)
  hasNextPage: boolean

  @Field(() => Number)
  totalCount: number

  @Field(() => Number)
  nextItems: number
}
