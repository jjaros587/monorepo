import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class CurrentUser {
  @Field((_type) => String)
  _id: string

  @Field((_type) => String)
  email: string
}

@ObjectType()
export class Session {
  @Field((_type) => CurrentUser)
  user: CurrentUser

  @Field((_type) => String)
  accessToken: string

  @Field((_type) => String)
  refreshToken: string
}
