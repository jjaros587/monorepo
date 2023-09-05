import { FieldDescriptors, AppLink, ManagedForm } from '../../../ui-kit'
import { FormFieldTypes } from '../../../ui-kit/ManagedForm/ManagedForm.types'
import { Card } from '@ui'

export const ForgotPasswordPage = () => {
  const handleResetPassword = async <T extends { email: string }>(data: T) => {
    return null
  }

  const fields: FieldDescriptors = {
    email: {
      required: true,
      type: FormFieldTypes.Email,
      // name: 'email',
      label: 'Email',
    },
  }

  return (
    <Card size="L">
      <ManagedForm
        descriptors={fields}
        primaryAction={{
          displayName: 'Send reset link',
          onSubmit: handleResetPassword,
        }}
      />
      <AppLink to={'/login'}>Go back to login</AppLink>
    </Card>
  )
}
