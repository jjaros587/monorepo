import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class CurrentUser {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  email: string;
}

@ObjectType()
export class Session {
  @Field(() => CurrentUser)
  user: CurrentUser;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
