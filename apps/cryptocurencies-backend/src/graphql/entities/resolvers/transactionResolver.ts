import {
  Arg,
  Resolver,
  Mutation,
  Authorized,
  Ctx,
  InputType,
  Field,
  FieldResolver,
  Root,
} from 'type-graphql'
import { createBaseResolver } from '../../factories/createBaseResolver'
import { TransactionTypes } from '../../types/enums'
import { Transaction, TransactionModel } from '../models/transactionModel'
import { InventoryService } from '../services/InventoryService'
import { createCRUDResponse } from '../../factories/createCRUDResponse'
import { Context } from '../../types/Context'
import { ResolverInterface } from './types'

@InputType()
class TransactionNew {
  @Field(() => String)
  public asset: string

  @Field(() => Number)
  public date: number

  @Field(() => Number)
  public amount: number

  @Field(() => Number)
  public price: number

  @Field(() => Number)
  public fee: number

  @Field(() => TransactionTypes)
  public type: TransactionTypes
}

const CRUDResponse = createCRUDResponse(Transaction)
type CRUDResponseType = InstanceType<typeof CRUDResponse>

@Resolver(() => Transaction)
export class TransactionResolver
  extends createBaseResolver(Transaction, TransactionModel)
  implements ResolverInterface<Transaction>
{
  @Authorized()
  @Mutation(() => CRUDResponse)
  async transactionCreate(
    // @Arg('new', generateInputType(Transaction, 'create'))
    @Arg('new', () => TransactionNew) newTransaction: Transaction,
    @Ctx() { user }: Context,
  ): Promise<CRUDResponseType> {
    const transaction = await TransactionModel.create({
      user: user._id,
      ...newTransaction,
    })

    await InventoryService.calculateIn(transaction)

    return { success: true, item: transaction }
  }

  @Authorized()
  @Mutation(() => CRUDResponse)
  async transactionUpdate(
    @Arg('_id', () => String) _id: string,
    @Arg('patch', () => TransactionNew) patch: Partial<Transaction>,
    // @Arg('patch', generateInputType(Transaction, 'edit')) patch: Transaction
  ): Promise<CRUDResponseType> {
    const transaction = await TransactionModel.findOne({ _id })
    await InventoryService.calculateOut(transaction)
    transaction.update(patch)
    await InventoryService.calculateIn(transaction)

    return { success: true, item: transaction }
  }

  @Authorized()
  @Mutation(() => CRUDResponse)
  async transactionDelete(@Arg('_id', () => String) _id: string): Promise<CRUDResponseType> {
    const transaction = await TransactionModel.findOneAndDelete({ _id })
    await InventoryService.calculateOut(transaction)

    return { success: true, item: null }
  }

  @FieldResolver()
  total(@Root() transaction: Transaction): number {
    const { amount, price, fee } = transaction
    return amount * price + fee
  }
}
