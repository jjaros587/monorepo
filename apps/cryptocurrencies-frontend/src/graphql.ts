export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** New withdrawal data */
export type AddWithdrawalInput = {
  amount: Scalars['Float']
  date: Scalars['Float']
  user: Scalars['String']
}

export type Asset = {
  __typename?: 'Asset'
  _id: Scalars['String']
  abbr: Scalars['String']
  name: Scalars['String']
}

export type CurrentUser = {
  __typename?: 'CurrentUser'
  _id: Scalars['String']
  email: Scalars['String']
}

export type DeleteAssetResponse = {
  __typename?: 'DeleteAssetResponse'
  item?: Maybe<Asset>
  success: Scalars['Boolean']
}

export type DeleteTransactionResponse = {
  __typename?: 'DeleteTransactionResponse'
  item?: Maybe<Transaction>
  success: Scalars['Boolean']
}

export type DeleteUserResponse = {
  __typename?: 'DeleteUserResponse'
  item?: Maybe<User>
  success: Scalars['Boolean']
}

export type DeleteWalletResponse = {
  __typename?: 'DeleteWalletResponse'
  item?: Maybe<Wallet>
  success: Scalars['Boolean']
}

export type DeleteWithdrawalResponse = {
  __typename?: 'DeleteWithdrawalResponse'
  item?: Maybe<Withdrawal>
  success: Scalars['Boolean']
}

export type Mutation = {
  __typename?: 'Mutation'
  assetDelete: DeleteAssetResponse
  assetUpdate: DeleteAssetResponse
  login: Session
  refreshTokens: Session
  register: Session
  transactionCreate: Transaction
  transactionDelete: DeleteTransactionResponse
  transactionUpdate: Transaction
  userDelete: DeleteUserResponse
  userUpdate: DeleteUserResponse
  walletDelete: DeleteWalletResponse
  walletUpdate: DeleteWalletResponse
  withdrawalCreate: Withdrawal
  withdrawalDelete: DeleteWithdrawalResponse
  withdrawalUpdate: DeleteWithdrawalResponse
}

export type MutationAssetDeleteArgs = {
  _id: Scalars['String']
}

export type MutationAssetUpdateArgs = {
  _id: Scalars['String']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String']
}

export type MutationRegisterArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationTransactionCreateArgs = {
  new: TransactionInputTypeCreate
}

export type MutationTransactionDeleteArgs = {
  _id: Scalars['String']
}

export type MutationTransactionUpdateArgs = {
  patch: TransactionInputTypeEdit
}

export type MutationUserDeleteArgs = {
  _id: Scalars['String']
}

export type MutationUserUpdateArgs = {
  _id: Scalars['String']
}

export type MutationWalletDeleteArgs = {
  _id: Scalars['String']
}

export type MutationWalletUpdateArgs = {
  _id: Scalars['String']
}

export type MutationWithdrawalCreateArgs = {
  new: AddWithdrawalInput
}

export type MutationWithdrawalDeleteArgs = {
  _id: Scalars['String']
}

export type MutationWithdrawalUpdateArgs = {
  _id: Scalars['String']
}

export type OrderArgs = {
  orderBy: Scalars['String']
  orderDirection?: InputMaybe<OrderDirection>
}

export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc',
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  nextItems: Scalars['Float']
  totalCount: Scalars['Float']
}

export type PaginatedAssetResponse = {
  __typename?: 'PaginatedAssetResponse'
  items: Array<Asset>
  pageInfo: PageInfo
}

export type PaginatedTransactionResponse = {
  __typename?: 'PaginatedTransactionResponse'
  items: Array<Transaction>
  pageInfo: PageInfo
}

export type PaginatedUserResponse = {
  __typename?: 'PaginatedUserResponse'
  items: Array<User>
  pageInfo: PageInfo
}

export type PaginatedWalletResponse = {
  __typename?: 'PaginatedWalletResponse'
  items: Array<Wallet>
  pageInfo: PageInfo
}

export type PaginatedWithdrawalResponse = {
  __typename?: 'PaginatedWithdrawalResponse'
  items: Array<Withdrawal>
  pageInfo: PageInfo
}

export type Query = {
  __typename?: 'Query'
  asset: Asset
  assets: PaginatedAssetResponse
  transaction: Transaction
  transactions: PaginatedTransactionResponse
  user: User
  users: PaginatedUserResponse
  wallet: Wallet
  wallets: PaginatedWalletResponse
  withdrawal: Withdrawal
  withdrawals: PaginatedWithdrawalResponse
}

export type QueryAssetArgs = {
  _id: Scalars['String']
}

export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Float']>
  order?: InputMaybe<OrderArgs>
  skip?: InputMaybe<Scalars['Float']>
}

export type QueryTransactionArgs = {
  _id: Scalars['String']
}

export type QueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Float']>
  order?: InputMaybe<OrderArgs>
  skip?: InputMaybe<Scalars['Float']>
}

export type QueryUserArgs = {
  _id: Scalars['String']
}

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Float']>
  order?: InputMaybe<OrderArgs>
  skip?: InputMaybe<Scalars['Float']>
}

export type QueryWalletArgs = {
  _id: Scalars['String']
}

export type QueryWalletsArgs = {
  limit?: InputMaybe<Scalars['Float']>
  order?: InputMaybe<OrderArgs>
  skip?: InputMaybe<Scalars['Float']>
}

export type QueryWithdrawalArgs = {
  _id: Scalars['String']
}

export type QueryWithdrawalsArgs = {
  limit?: InputMaybe<Scalars['Float']>
  order?: InputMaybe<OrderArgs>
  skip?: InputMaybe<Scalars['Float']>
}

export type Session = {
  __typename?: 'Session'
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
  user: CurrentUser
}

export type Transaction = {
  __typename?: 'Transaction'
  _id: Scalars['String']
  amount: Scalars['Float']
  asset: Asset
  date: Scalars['Float']
  fee: Scalars['Float']
  price: Scalars['Float']
  total: Scalars['Float']
  type: TransactionTypes
  user: User
}

export type TransactionInputTypeCreate = {
  amount?: InputMaybe<Scalars['Float']>
  asset?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['Float']>
  fee?: InputMaybe<Scalars['Float']>
  price?: InputMaybe<Scalars['Float']>
  type?: InputMaybe<TransactionTypes>
  user?: InputMaybe<Scalars['String']>
}

export type TransactionInputTypeEdit = {
  amount?: InputMaybe<Scalars['Float']>
  asset?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['Float']>
  fee?: InputMaybe<Scalars['Float']>
  price?: InputMaybe<Scalars['Float']>
  type?: InputMaybe<TransactionTypes>
}

export enum TransactionTypes {
  Bought = 'BOUGHT',
  Received = 'RECEIVED',
  Sent = 'SENT',
  Sold = 'SOLD',
}

export type User = {
  __typename?: 'User'
  _id: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type Wallet = {
  __typename?: 'Wallet'
  _id: Scalars['String']
  asset: Asset
  current: Scalars['Float']
  user: User
}

export type Withdrawal = {
  __typename?: 'Withdrawal'
  _id: Scalars['String']
  amount: Scalars['Float']
  date: Scalars['Float']
  user: User
}
