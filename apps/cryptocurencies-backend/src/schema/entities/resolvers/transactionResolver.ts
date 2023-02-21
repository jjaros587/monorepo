import { Arg, Resolver, Mutation, Authorized, FieldResolver, Root, Query, ResolverInterface, Ctx } from 'type-graphql'
import { Transaction, TransactionModel, WalletModel } from '@models'
import { TransactionTypes } from '@types'
import { createBaseResolver } from 'src/schema/factories/createBaseResolver'
import { generateInputType } from 'src/decorators/InputField'

@Resolver((_of) => Transaction)
export class TransactionResolver extends createBaseResolver(Transaction, TransactionModel) {
  @Authorized()
  @Mutation(() => Transaction)
  async transactionCreate(
    @Arg('new', generateInputType(Transaction, 'create')) newTransaction: Transaction,
    @Ctx() { user }: any
  ): Promise<Transaction> {
    const { asset, amount, type } = newTransaction
    const wallet = await WalletModel.findOne({ asset })
    if (wallet) {
      await WalletModel.updateOne(
        { _id: wallet._id },
        {
          current: [TransactionTypes.BOUGHT, TransactionTypes.RECEIVED].includes(type)
            ? wallet.current + amount
            : wallet.current - amount
        }
      )
    } else {
      await WalletModel.create({ user, asset, current: amount })
    }
    const transaction = await TransactionModel.create({ user, ...newTransaction })
    return transaction
  }

  @Authorized()
  @Mutation(() => Transaction)
  async transactionUpdate(
    @Arg('_id') _id: string,
    @Arg('patch', generateInputType(Transaction, 'edit')) patch: Transaction
  ): Promise<Transaction> {
    const { user, asset, amount, type } = patch
    const wallet = await WalletModel.findOne({ asset })
    if (wallet) {
      await WalletModel.updateOne(
        { _id: wallet._id },
        {
          current: [TransactionTypes.BOUGHT, TransactionTypes.RECEIVED].includes(type)
            ? wallet.current + amount
            : wallet.current - amount
        }
      )
    } else {
      await WalletModel.create({ user, asset, current: amount })
    }
    const transaction = await TransactionModel.create(patch)
    return transaction
  }

  // @FieldResolver()
  // total(@Root() transaction: Transaction): number {
  //   console.log('transaction', transaction)
  //   const { amount, price, fee } = transaction
  //   return amount * price + fee
  // }
}
