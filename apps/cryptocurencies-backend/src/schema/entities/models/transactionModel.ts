import { getModelForClass, mongoose, plugin, prop, Ref } from '@typegoose/typegoose'
// import { Field } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { User } from './userModel'
import { Asset } from './assetModel'
import mongooseAutoPopulate from 'mongoose-autopopulate'
import { Field, InputType, ObjectType } from 'type-graphql'
import { InputField } from 'src/decorators/InputField'
import { TransactionTypes } from '@types'

@ObjectType()
@plugin(mongooseAutoPopulate as any)
export class Transaction {
  // ID
  @Field((_type) => String)
  @prop({ required: true, default: () => uuidv4() })
  public _id: string

  // Refs
  @Field((_type) => User)
  // @InputField(() => String, false)
  @prop({ ref: () => User, type: () => String, required: true, autopopulate: true })
  public user: Ref<User, string>

  @Field((_type) => Asset)
  @InputField(() => String)
  @prop({ ref: () => Asset, type: () => String, required: true, autopopulate: true })
  public asset: Ref<Asset, string>

  // Scalars
  @Field((_type) => Number)
  @InputField(() => Number)
  @prop({ required: true })
  public date: number

  @Field((_type) => Number)
  @InputField(() => Number)
  @prop({ required: true })
  public amount: number

  @Field((_type) => Number)
  @InputField(() => Number)
  @prop({ required: true })
  public price: number

  @Field((_type) => Number)
  @InputField(() => Number)
  @prop({ required: true, default: 0 })
  public fee: number

  @Field((_type) => Number)
  public total(): number {
    return this.amount * this.price + this.fee
  }

  @Field((_type) => TransactionTypes)
  @InputField(() => TransactionTypes)
  @prop({ required: true, enum: TransactionTypes, type: String })
  public type: TransactionTypes
}

export const TransactionModel = getModelForClass(Transaction, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'transaction', _id: false }
})
