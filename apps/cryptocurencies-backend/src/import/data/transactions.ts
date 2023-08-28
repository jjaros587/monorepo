import { TransactionTypes } from '../../schema/types';

export const transactions = [
  //// BTC
  {
    _id: '63519738-b8b7-4d7b-83ae-d923660e5122',
    user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
    asset: 'cd07d761-da1c-4878-bd65-aee7f5d8b263',
    amount: 0.025,
    date: 1503072360,
    price: 45,
    fee: 5,
    type: TransactionTypes.BOUGHT,
  },
  // out
  {
    _id: 'd29c4418-d4ca-4d5b-89ab-81106628f50c',
    user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
    asset: 'cd07d761-da1c-4878-bd65-aee7f5d8b263',
    amount: 0.025,
    date: 1606751640,
    price: 10,
    fee: 5,
    type: TransactionTypes.SOLD,
  },
  {
    _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
    user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
    asset: 'cd07d761-da1c-4878-bd65-aee7f5d8b263',
    amount: 0.025,
    date: 1621443660,
    price: 20,
    fee: 4,
    type: TransactionTypes.BOUGHT,
  },
  // //// LTC
  // {
  //   _id: '63519738-b8b7-4d7b-83ae-d923660e5122',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '5ca6e398-325a-4ef0-b7a4-4714fd6f2d15',
  //   amount: 1,
  //   date: 1512658380,
  //   price: 45
  // },
  // {
  //   _id: 'd29c4418-d4ca-4d5b-89ab-81106628f50c',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '5ca6e398-325a-4ef0-b7a4-4714fd6f2d15',
  //   amount: 0.25,
  //   date: 1513947060,
  //   price: 45
  // },
  // //out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '5ca6e398-325a-4ef0-b7a4-4714fd6f2d15',
  //   amount: 0.1141,
  //   date: 1539439980,
  //   price: 45
  // },

  // //// ETH
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.75,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.25,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.4,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.35,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.25,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.25,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.25,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 1,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // },
  // // out
  // {
  //   _id: 'bed94978-a264-43b1-879d-30309a4a3a52',
  //   user: '42569f89-1dc3-4525-b9bd-fce2e4dc53d8',
  //   asset: '2acec1cd-0df6-4a6f-b107-33efe4021ef6',
  //   amount: 0.5,
  //   date: 1621400460,
  //   price: 45
  // }
];
