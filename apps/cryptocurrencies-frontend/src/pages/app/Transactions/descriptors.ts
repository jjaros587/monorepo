import { ColumnDescriptor, FieldDescriptors } from '../../../ui-kit'
import { values } from 'lodash'
import { Asset, Transaction, TransactionTypes } from '../../../graphql'
import { FormFieldTypes } from '../../../ui-kit/form/ManagedForm/FormFieldTypes'

export const columns: ColumnDescriptor<Transaction>[] = [
  {
    key: '_id',
    header: 'ID',
  },
  {
    key: 'date',
    sortable: true,
  },
  {
    key: 'type',
    sortable: true,
  },
  // {
  //   key: 'asset.abbr',
  //   header: 'Asset',
  //   sortable: true,
  // },
  {
    key: 'amount',
  },
  {
    key: 'fee',
    unit: 'Kč',
  },
  {
    key: 'price',
    unit: 'Kč',
  },
  {
    key: 'fee',
    unit: 'Kč',
  },
  {
    key: 'total',
    unit: 'Kč',
  },
]

export const fields: FieldDescriptors = {
  type: {
    required: true,
    type: FormFieldTypes.Select,
    label: 'Transaction type',
    placeholder: 'Select transaction type...',
    items: values(TransactionTypes).map((type) => ({ value: type, label: type })),
  },
  asset: {
    required: true,
    type: FormFieldTypes.EntitySelect,
    placeholder: 'Select asset...',
    entityName: 'asset',
    itemToPair: (item: Asset) => ({ value: item._id, label: item.name }),
  },
  price: {
    required: true,
    type: FormFieldTypes.Number,
  },
  amount: {
    required: true,
    type: FormFieldTypes.Number,
  },
  fee: {
    required: true,
    type: FormFieldTypes.Number,
  },
  date: {
    required: true,
    type: FormFieldTypes.Date,
  },
}
