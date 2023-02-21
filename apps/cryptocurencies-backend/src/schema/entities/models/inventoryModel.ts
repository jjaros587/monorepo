import { getModelForClass, mongoose, prop } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
export class Inventory {
  // ID
  @Field((_type) => String)
  @prop({ required: true, default: () => uuidv4() })
  public _id: string

  // Scalars
  @Field((_type) => String)
  @prop({ required: true, unique: true })
  public abbr: string

  @Field((_type) => String)
  @prop({ required: true, unique: true })
  public price: string
}

export const AssetModel = getModelForClass(Inventory, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'asset', _id: false }
})
