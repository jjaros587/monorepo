import { useMutation } from '@apollo/client'
import { FieldDescriptors, ManagedForm, AppLink } from '../../../ui-kit'
import { FormFieldTypes } from '../../../ui-kit/ManagedForm/ManagedForm.types'
import { useFlashMessage, useAuth } from '../../../hooks'
import { Session } from '../../../graphql'
import LOGIN from '../../../graphql/mutations/login.graphql'
import { Card, Button, Box } from '@ui'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { pushMessage } = useFlashMessage()
  const navigate = useNavigate()
  const auth = useAuth()

  const [login, { error }] = useMutation<{ login: Session }>(LOGIN, {
    onCompleted: ({ login: session }) => {
      auth.login(session)
      pushMessage('success', 'Login', 'Logged in!')
      navigate('/dashboard')
    },
    onError: (error) => {
      pushMessage('danger', 'Login', error.message)
    },
  })

  const handleLogin = async <T extends { email: string; password: string }>(data: T) => {
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
  }

  return (
    <Card size={'L'} glassmorphic>
      <ManagedForm
        descriptors={fields}
        primaryAction={{ displayName: 'Login', onSubmit: handleLogin }}
      />
      {error && <div>{error.message}</div>}

      <Box align="flex-end">
        {error && (
          <AppLink to={'/forgotPassword'}>
            <Button variant="link">Forgot password</Button>
          </AppLink>
        )}
        <AppLink to={'/signup'}>
          <Button variant="link">Don't you have an account yet? Signup!</Button>
        </AppLink>
      </Box>
    </Card>
  )
}
