import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Asset = {
  __typename?: 'Asset';
  _id: Scalars['String'];
  abbr: Scalars['String'];
  name: Scalars['String'];
};

export type CrudResponseAsset = {
  __typename?: 'CRUDResponseAsset';
  item?: Maybe<Asset>;
  success: Scalars['Boolean'];
};

export type CrudResponseTransaction = {
  __typename?: 'CRUDResponseTransaction';
  item?: Maybe<Transaction>;
  success: Scalars['Boolean'];
};

export type CrudResponseUser = {
  __typename?: 'CRUDResponseUser';
  item?: Maybe<User>;
  success: Scalars['Boolean'];
};

export type CrudResponseWallet = {
  __typename?: 'CRUDResponseWallet';
  item?: Maybe<Wallet>;
  success: Scalars['Boolean'];
};

export type CrudResponseWithdrawal = {
  __typename?: 'CRUDResponseWithdrawal';
  item?: Maybe<Withdrawal>;
  success: Scalars['Boolean'];
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  _id: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  assetDelete: CrudResponseAsset;
  assetUpdate: CrudResponseAsset;
  login: Session;
  refreshTokens: Session;
  register: Session;
  transactionCreate: Transaction;
  transactionDelete: CrudResponseTransaction;
  transactionUpdate: CrudResponseTransaction;
  userDelete: CrudResponseUser;
  userUpdate: CrudResponseUser;
  walletDelete: CrudResponseWallet;
  walletUpdate: CrudResponseWallet;
  withdrawalCreate: Withdrawal;
  withdrawalDelete: CrudResponseWithdrawal;
  withdrawalUpdate: CrudResponseWithdrawal;
};


export type MutationAssetDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationAssetUpdateArgs = {
  _id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshTokensArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTransactionCreateArgs = {
  new: TransactionNew;
};


export type MutationTransactionDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationTransactionUpdateArgs = {
  _id: Scalars['String'];
  patch: TransactionNew;
};


export type MutationUserDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationUserUpdateArgs = {
  _id: Scalars['String'];
};


export type MutationWalletDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationWalletUpdateArgs = {
  _id: Scalars['String'];
};


export type MutationWithdrawalCreateArgs = {
  new: WithdrawalNew;
};


export type MutationWithdrawalDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationWithdrawalUpdateArgs = {
  _id: Scalars['String'];
};

export type OrderArgs = {
  orderBy: Scalars['String'];
  orderDirection?: InputMaybe<OrderDirection>;
};

export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  nextItems: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginatedResponseAsset = {
  __typename?: 'PaginatedResponseAsset';
  items: Array<Asset>;
  pageInfo: PageInfo;
};

export type PaginatedResponseTransaction = {
  __typename?: 'PaginatedResponseTransaction';
  items: Array<Transaction>;
  pageInfo: PageInfo;
};

export type PaginatedResponseUser = {
  __typename?: 'PaginatedResponseUser';
  items: Array<User>;
  pageInfo: PageInfo;
};

export type PaginatedResponseWallet = {
  __typename?: 'PaginatedResponseWallet';
  items: Array<Wallet>;
  pageInfo: PageInfo;
};

export type PaginatedResponseWithdrawal = {
  __typename?: 'PaginatedResponseWithdrawal';
  items: Array<Withdrawal>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  asset: Asset;
  assets: PaginatedResponseAsset;
  transaction: Transaction;
  transactions: PaginatedResponseTransaction;
  user: User;
  users: PaginatedResponseUser;
  wallet: Wallet;
  wallets: PaginatedResponseWallet;
  withdrawal: Withdrawal;
  withdrawals: PaginatedResponseWithdrawal;
};


export type QueryAssetArgs = {
  _id: Scalars['String'];
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderArgs>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryTransactionArgs = {
  _id: Scalars['String'];
};


export type QueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderArgs>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderArgs>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryWalletArgs = {
  _id: Scalars['String'];
};


export type QueryWalletsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderArgs>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryWithdrawalArgs = {
  _id: Scalars['String'];
};


export type QueryWithdrawalsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<OrderArgs>;
  skip?: InputMaybe<Scalars['Float']>;
};

export type Session = {
  __typename?: 'Session';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: CurrentUser;
};

export type Transaction = {
  __typename?: 'Transaction';
  _id: Scalars['String'];
  amount: Scalars['Float'];
  asset: Asset;
  date: Scalars['Float'];
  fee: Scalars['Float'];
  price: Scalars['Float'];
  total: Scalars['Float'];
  type: TransactionTypes;
  user: User;
};

export type TransactionNew = {
  amount: Scalars['Float'];
  asset: Scalars['String'];
  date: Scalars['Float'];
  fee: Scalars['Float'];
  price: Scalars['Float'];
  type: TransactionTypes;
};

export enum TransactionTypes {
  Bought = 'BOUGHT',
  Received = 'RECEIVED',
  Sent = 'SENT',
  Sold = 'SOLD'
}

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  _id: Scalars['String'];
  amount: Scalars['Float'];
  asset: Asset;
  price: Scalars['Float'];
  user: User;
};

export type Withdrawal = {
  __typename?: 'Withdrawal';
  _id: Scalars['String'];
  amount: Scalars['Float'];
  date: Scalars['Float'];
  user: User;
};

/** New withdrawal data */
export type WithdrawalNew = {
  amount: Scalars['Float'];
  date: Scalars['Float'];
  user: Scalars['String'];
};
