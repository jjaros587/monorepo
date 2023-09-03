import { Card } from '@ui'
import { FieldDescriptors, ManagedForm } from '../../../ui-kit'
import { FormFieldTypes } from '../../../ui-kit/form/ManagedForm/FormFieldTypes'
import { useAuth } from '../../../hooks'
import { Asset, Transaction, TransactionTypes } from '../../../graphql'
import { useEntityListing } from '../../../hooks/useEntityListing'
import { values } from 'lodash'

interface Props {
  onSubmit: (data: any) => Promise<void>
  initialValues?: any
}

export const AddTransactionForm = ({ onSubmit, initialValues }: Props) => {
  const auth = useAuth()
  const { state: assetState } = useEntityListing<Asset>('asset')

  const handleAddTransaction = (data: Transaction) => {
    onSubmit({ ...data, user: auth.user?._id })
  }

  if (assetState.loading) {
    return <span>'Loading'</span>
  }

  const fields: FieldDescriptors = {
    type: {
      required: true,
      type: FormFieldTypes.Select,
      label: 'Transaction type afdf',
      placeholder: 'Select transaction type...',
      items: values(TransactionTypes).map((type) => ({ value: type, label: type })),
    },
    asset: {
      required: true,
      type: FormFieldTypes.Select,
      label: 'Asset',
      placeholder: 'Select asset...',
      items: assetState.items.map((asset) => ({ value: asset._id, label: asset.name })),
    },
    price: {
      required: true,
      type: FormFieldTypes.Number,
      label: 'Price',
    },
    amount: {
      required: true,
      type: FormFieldTypes.Number,
      label: 'Amount',
    },
    date: {
      required: true,
      type: FormFieldTypes.Date,
      label: 'Date',
    },
  }

  return (
    <Card>
      <ManagedForm
        descriptors={fields}
        initialValues={initialValues}
        primaryAction={{ displayName: 'Add', onSubmit: handleAddTransaction }}
      />
    </Card>
  )
}
