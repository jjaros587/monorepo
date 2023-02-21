import { Field as GqlField, ObjectType as GqlType } from 'type-graphql'

@GqlType()
export class PageInfo {
  @GqlField((_type) => Boolean)
  hasNextPage: boolean

  @GqlField((_type) => Number)
  totalCount: number

  @GqlField((_type) => Number)
  nextItems: number
}
