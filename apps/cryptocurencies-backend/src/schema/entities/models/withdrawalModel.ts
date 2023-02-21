import { getModelForClass, mongoose, plugin, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { User } from './userModel'
import mongooseAutoPopulate from 'mongoose-autopopulate'

@ObjectType()
@plugin(mongooseAutoPopulate as any)
export class Withdrawal {
  // ID
  @Field((_type) => String)
  @prop({ required: true, default: () => uuidv4() })
  public _id: string
  // Refs
  @Field((_type) => User)
  @prop({ ref: () => User, type: () => String, required: true, autopopulate: true })
  public user: Ref<User, string>

  // Scalars
  @Field((_type) => Number)
  @prop({ required: true })
  public date: number

  @Field((_type) => Number)
  @prop({ required: true })
  public amount: number
}

export const WithdrawalModel = getModelForClass(Withdrawal, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'withdrawal', _id: false }
})
