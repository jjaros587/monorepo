import { Card, ColumnDescriptor, FieldDescriptors } from '@ui'
import { EntityListing } from 'src/components/EntityListing'
import { Withdrawal } from 'src/graphql'
import { FormFieldTypes } from 'src/ui-kit/form/ManagedForm/FormFieldTypes'
import { AddWithdrawalForm } from './AddWIthDrawalForm'

const columns: ColumnDescriptor<Withdrawal>[] = [
  {
    key: 'date'
  },
  {
    key: 'amount'
  }
]

const fields: FieldDescriptors = {
  amount: {
    required: true,
    type: FormFieldTypes.Number
  },
  date: {
    required: true,
    type: FormFieldTypes.Date
  }
}

export const WithdrawalsPage = () => {
  return (
    <Card title="Withdrawals">
      <EntityListing<Withdrawal> entityName={'withdrawal'} columns={columns} fields={fields} />
    </Card>
  )
}
