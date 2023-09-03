import { getModelForClass, mongoose, prop } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
export class Inventory {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id: string

  // Scalars
  @Field(() => String)
  @prop({ type: () => String, required: true, unique: true })
  public abbr: string

  @Field(() => String)
  @prop({ type: () => String, required: true, unique: true })
  public price: string
}

export const InventoryModel = getModelForClass(Inventory, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'inventory' },
})
