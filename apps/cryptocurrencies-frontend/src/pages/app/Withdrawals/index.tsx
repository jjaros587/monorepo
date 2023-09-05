import { ColumnDescriptor, FieldDescriptors } from '../../../ui-kit'
import { EntityListing } from '../../../components/EntityListing'
import { Withdrawal } from '../../../graphql'
import { FormFieldTypes } from '../../../ui-kit/ManagedForm/ManagedForm.types'
// import { AddWithdrawalForm } from './AddWIthDrawalForm'
import { Card } from '@ui'

const columns: ColumnDescriptor<Withdrawal>[] = [
  {
    key: 'date',
  },
  {
    key: 'amount',
  },
]

const fields: FieldDescriptors = {
  amount: {
    required: true,
    type: FormFieldTypes.Number,
  },
  date: {
    required: true,
    type: FormFieldTypes.Date,
  },
}

export const WithdrawalsPage = () => {
  return (
    <Card title="Withdrawals">
      <EntityListing<Withdrawal> entityName={'withdrawal'} columns={columns} fields={fields} />
    </Card>
  )
}
