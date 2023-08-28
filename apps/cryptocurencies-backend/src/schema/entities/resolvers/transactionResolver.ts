import {
  Arg,
  Resolver,
  Mutation,
  Authorized,
  Ctx,
  InputType,
  Field,
} from 'type-graphql';
import { createBaseResolver } from '../../factories/createBaseResolver';
import { TransactionTypes } from '../../types/enums';
import { Transaction, TransactionModel } from '../models/transactionModel';
import { WalletModel } from '../models/walletModel';

@InputType()
class TransactionNew {
  @Field(() => String)
  public asset: string;

  @Field(() => String)
  public date: string;

  @Field(() => Number)
  public amount: number;

  @Field(() => Number)
  public price: number;

  @Field(() => Number)
  public fee: number;

  @Field(() => TransactionTypes)
  public type: TransactionTypes;
}

@Resolver(() => Transaction)
export class TransactionResolver extends createBaseResolver(
  Transaction,
  TransactionModel
) {
  @Authorized()
  @Mutation(() => Transaction)
  async transactionCreate(
    // @Arg('new', generateInputType(Transaction, 'create'))
    @Arg('new', () => TransactionNew) newTransaction: Transaction,
    @Ctx() { user }: any
  ): Promise<Transaction> {
    const { asset, amount, type } = newTransaction;
    const wallet = await WalletModel.findOne({ asset });
    if (wallet) {
      await WalletModel.updateOne(
        { _id: wallet._id },
        {
          current: [
            TransactionTypes.BOUGHT,
            TransactionTypes.RECEIVED,
          ].includes(type)
            ? wallet.current + amount
            : wallet.current - amount,
        }
      );
    } else {
      await WalletModel.create({ user, asset, current: amount });
    }
    const transaction = await TransactionModel.create({
      user,
      ...newTransaction,
    });
    return transaction;
  }

  @Authorized()
  @Mutation(() => Transaction)
  async transactionUpdate(
    @Arg('_id', () => String) _id: string,
    @Arg('patch', () => TransactionNew) patch: Partial<Transaction>
    // @Arg('patch', generateInputType(Transaction, 'edit')) patch: Transaction
  ): Promise<Transaction> {
    const { user, asset, amount, type } = patch;
    const wallet = await WalletModel.findOne({ asset });
    if (wallet) {
      await WalletModel.updateOne(
        { _id: wallet._id },
        {
          current: [
            TransactionTypes.BOUGHT,
            TransactionTypes.RECEIVED,
          ].includes(type)
            ? wallet.current + amount
            : wallet.current - amount,
        }
      );
    } else {
      await WalletModel.create({ user, asset, current: amount });
    }
    const transaction = await TransactionModel.create(patch);
    return transaction;
  }

  // @FieldResolver()
  // total(@Root() transaction: Transaction): number {
  //   console.log('transaction', transaction)
  //   const { amount, price, fee } = transaction
  //   return amount * price + fee
  // }
}
