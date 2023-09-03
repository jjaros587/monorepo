import { getModelForClass, mongoose, prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
export class User {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id: string;

  // Scalars
  @Field(() => String)
  @prop({ type: () => String, required: true, unique: true })
  public email: string;

  @Field(() => String)
  @prop({ type: () => String, required: true })
  public password: string;
}

export const UserModel = getModelForClass(User, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'user', _id: false },
});
