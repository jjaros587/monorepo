import { useMutation } from '@apollo/client'
import SCREEN_DESCRIPTORS from '../../../config/ScreenConfig'
import { useHistory } from 'react-router'
import { FieldDescriptors, Card, ManagedForm, Link, AppLink } from '@ui'
import { FormFieldTypes } from 'src/ui-kit/form/ManagedForm/FormFieldTypes'
import { useFlashMessage, useAuth } from '@hooks'
import { Session } from 'src/graphql'
import LOGIN from 'src/graphql/mutations/login.graphql'

export const LoginPage = () => {
  const { pushMessage } = useFlashMessage()
  const history = useHistory()
  const auth = useAuth()
  const [login, { error }] = useMutation<{ login: Session }>(LOGIN, {
    onCompleted: ({ login: session }) => {
      auth.login(session)
      pushMessage('success', 'Login', 'Logged in!')
      history.replace(SCREEN_DESCRIPTORS.dashboard.route)
    },
    onError: (error) => {
      pushMessage('danger', 'Login', error.message)
    }
  })

  const handleLogin = async <T extends { email: string; password: string }>(data: T) => {
    await login({
      variables: { email: data.email, password: data.password }
    })
  }

  const fields: FieldDescriptors = {
    email: {
      required: true,
      type: FormFieldTypes.Email,
      name: 'email',
      label: 'Email'
    },
    password: {
      required: true,
      type: FormFieldTypes.Password,
      name: 'password',
      label: 'Password'
    }
  }

  return (
    <Card size={'L'}>
      <ManagedForm descriptors={fields} primaryAction={{ displayName: 'Login', onSubmit: handleLogin }} />
      <AppLink to={SCREEN_DESCRIPTORS.forgotPassword.route}>Forgot password</AppLink>
      <AppLink to={SCREEN_DESCRIPTORS.signup.route}>Don't you have an account yet? Signup!</AppLink>
      {error && <div>{error.message}</div>}
    </Card>
  )
}
