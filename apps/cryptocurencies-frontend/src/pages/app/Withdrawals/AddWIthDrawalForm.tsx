import { Card, FieldDescriptors, ManagedForm } from '@ui'
import { useAuth } from '@hooks'
import { Withdrawal } from 'src/graphql'
import { FormFieldTypes } from 'src/ui-kit/form/ManagedForm/FormFieldTypes'

export const AddWithdrawalForm = (onSubmit: (data: any) => void) => {
  const auth = useAuth()

  const handleAddWithdrawal = (data: Withdrawal) => {
    onSubmit({ ...data, user: auth.user?._id })
  }
  const fields: FieldDescriptors = {
    amount: {
      required: true,
      type: FormFieldTypes.Number,
      name: 'amount',
      label: 'Amount'
    },
    date: {
      required: true,
      type: FormFieldTypes.Date,
      name: 'date',
      label: 'Date'
    }
  }

  return (
    <Card>
      <ManagedForm descriptors={fields} primaryAction={{ displayName: 'Add', onSubmit: handleAddWithdrawal }} />
    </Card>
  )
}
