import { AssetModel, TransactionModel, UserModel } from '../schema/entities/models'
import { assets } from './data/assets'
import { users } from './data/users'
import { mongoose } from '@typegoose/typegoose'
import { transactions } from './data/transactions'

export function importData(run: boolean) {
  if (!run) {
    return
  }
  console.log('Import of data started...')
  insertData(AssetModel, assets)
  insertData(UserModel, users)
  insertData(TransactionModel, transactions)
  printData(true)
  console.log('Import of data finished succesfully\n')
}

function insertData<T extends { _id: string }>(model: typeof mongoose.Model, data: Array<T>) {
  console.log(`   Importing data for ${model.modelName}`)
  data.forEach(async (item) => {
    const foundItem = await model.findById(item._id)
    if (!foundItem) {
      await model.create(item)
    }
  })
}

async function printData(run: boolean) {
  console.log('Printing data...')
  console.log('assets', await AssetModel.find())
  console.log('users', await UserModel.find())
  console.log('transactions', await TransactionModel.find())
}
