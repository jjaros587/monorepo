import { Card, FieldDescriptors, AppLink, ManagedForm } from '@ui'
import SCREEN_DESCRIPTORS from 'src/config/ScreenConfig'
import { FormFieldTypes } from 'src/ui-kit/form/ManagedForm/FormFieldTypes'

export const ForgotPasswordPage = () => {
  const handleResetPassword = async <T extends { email: string }>(data: T) => {
    return null
  }

  const fields: FieldDescriptors = {
    email: {
      required: true,
      type: FormFieldTypes.Email,
      name: 'email',
      label: 'Email'
    }
  }

  return (
    <Card size="L">
      <ManagedForm
        descriptors={fields}
        primaryAction={{ displayName: 'Send reset link', onSubmit: handleResetPassword }}
      />
      <AppLink to={SCREEN_DESCRIPTORS.login.route}>Go back to login</AppLink>
    </Card>
  )
}
