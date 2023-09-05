import { useDependentState } from '@hooks'
import React, { ReactNode, Ref } from 'react'
import * as S from './Input.styles'

export const enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email',
}

interface BaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  error?: string
  ref?: Ref<any> | undefined
  icon?: ReactNode
}

interface TextInputProps extends BaseProps {
  defaultValue?: string
  initialValue?: string
  value?: string
}

interface NumberInputProps extends BaseProps {
  defaultValue?: number
  initialValue?: number
  value: number
}

interface PasswordInputProps extends BaseProps {
  value?: string
}

interface EmailInputProps extends BaseProps {
  value?: string
}

type PropsUnion = TextInputProps | NumberInputProps | PasswordInputProps | EmailInputProps

export const Input = ({
  required,
  error,
  name,
  ref,
  readOnly,
  onChange,
  value: _value,
  icon,
  ...rest
}: PropsUnion) => {
  const [value, setValue] = useDependentState(_value, [_value])

  return (
    <S.InputWrapper key={`${name}_input`}>
      <S.Input
        hasError={Boolean(error)}
        aria-label="name"
        value={value}
        {...rest}
        onChange={(e) => {
          setValue(e.target.value)
          onChange?.(e)
        }}
      />
      {icon ? <S.Icon>{icon}</S.Icon> : null}
    </S.InputWrapper>
  )
}

export const TextInput = (props: TextInputProps) => <Input type={InputType.Text} {...props} />
export const NumberInput = (props: NumberInputProps) => <Input type={InputType.Number} {...props} />
export const EmailInput = (props: EmailInputProps) => <Input type={InputType.Email} {...props} />
export const PasswordInput = (props: PasswordInputProps) => (
  <Input type={InputType.Password} {...props} />
)
