import { useMutation } from '@apollo/client'
import { FieldDescriptors, ManagedForm } from '../../../ui-kit'
import { useAuth, useFlashMessage } from '../../../hooks'
// import { useHistory } from 'react-router-dom'
import SCREEN_DESCRIPTORS from '../../../config/ScreenConfig'
import { Session } from '../../../graphql'
import { FormFieldTypes } from '../../../ui-kit/form/ManagedForm/FormFieldTypes'
import REGISTER from '../../../graphql/mutations/register.graphql'
import { Card } from '@ui'

export const SignupPage = () => {
  const auth = useAuth()
  const { pushMessage } = useFlashMessage()
  // const history = useHistory()

  const [login, { error }] = useMutation<{ register: Session }>(REGISTER, {
    onCompleted: ({ register }) => {
      if (register) {
        auth.login(register)
        // history.replace(SCREEN_DESCRIPTORS.dashboard.route)
      }
    },
    onError: (error) => {
      pushMessage('danger', 'Login', error.message)
    },
  })

  const handleSignup = async <T extends { email: string; password: string }>(data: T) => {
    await login({
      variables: { email: data.email, password: data.password },
    })
  }

  const fields: FieldDescriptors = {
    email: {
      required: true,
      type: FormFieldTypes.Email,
      // name: 'email',
      label: 'Email',
    },
    password: {
      required: true,
      type: FormFieldTypes.Password,
      // name: 'password',
      label: 'Password',
    },
    confirmPassword: {
      required: true,
      type: FormFieldTypes.Password,
      // name: 'confirmPassword',
      label: 'Confirm password',
    },
  }

  return (
    <Card size="L" glassmorphic>
      <ManagedForm
        descriptors={fields}
        primaryAction={{ displayName: 'Signup', onSubmit: handleSignup }}
      />
    </Card>
  )
}
