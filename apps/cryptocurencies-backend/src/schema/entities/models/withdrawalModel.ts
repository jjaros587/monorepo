import {
  getModelForClass,
  mongoose,
  plugin,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';
import { User } from './userModel';
import mongooseAutoPopulate from 'mongoose-autopopulate';

@ObjectType()
@plugin(mongooseAutoPopulate)
export class Withdrawal {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id: string;
  // Refs
  @Field(() => User)
  @prop({
    ref: () => User,
    type: () => String,
    required: true,
    autopopulate: true,
  })
  public user: Ref<User, string>;

  // Scalars
  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public date: number;

  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public amount: number;
}

export const WithdrawalModel = getModelForClass(Withdrawal, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'withdrawal', _id: false },
});
