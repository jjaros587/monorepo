import { TransactionTypes } from '../../types'
import { Transaction } from '../models'
import { WalletModel } from '../models/walletModel'

export class InventoryService {
  public static async calculateIn(transaction: Transaction) {
    const { user, asset, amount, price } = transaction
    const wallet = await WalletModel.findOne({ asset, user })

    if (!wallet) {
      await WalletModel.create({ user, asset, amount, price })
    } else {
      const newAmount = wallet.amount + amount
      const newPrice = (wallet.amount * wallet.price + amount * price) / newAmount
      wallet.update({ amount: newAmount, price: newPrice })
    }
  }

  public static async calculateOut(transaction: Transaction) {
    const { user, asset, amount, price } = transaction

    const wallet = await WalletModel.findOne({ asset, user })
    if (!wallet) {
      return
      //   throw new Error(`Couldn't find wallet for asset ${asset}`)
    }

    const newAmount = wallet.amount - amount
    const newPrice = (wallet.amount * wallet.price - amount * price) / newAmount
    wallet.update({ amount: newAmount, price: newPrice })
  }
}
