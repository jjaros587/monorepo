import { Min, Max } from 'class-validator'
import { ArgsType, Field, InputType } from 'type-graphql'
import { prop } from '@typegoose/typegoose'
import { OrderDirection } from '@types'

@InputType()
class OrderArgs {
  @Field((_type) => String)
  orderBy: string

  @Field((_type) => OrderDirection, { nullable: true, defaultValue: OrderDirection.Asc })
  @prop({ required: true, enum: OrderDirection, type: String })
  orderDirection: string
}

@ArgsType()
export class PaginationArgs {
  @Field((_type) => Number, { nullable: true })
  @Min(0)
  skip: number

  @Field((_type) => Number, { nullable: true })
  @Min(1)
  @Max(50)
  limit: number

  @Field((_type) => OrderArgs, { nullable: true })
  order: OrderArgs

  // helpers - index calculations
  get startIndex(): number {
    return this.skip + 1
  }
  get endIndex(): number {
    return this.skip + this.limit
  }
}
