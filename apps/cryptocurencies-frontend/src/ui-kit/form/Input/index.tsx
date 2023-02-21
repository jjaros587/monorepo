import { useDependentState } from '@hooks'
import React, { Ref, useState } from 'react'
import * as S from './styled'

// TODO: Not exported property
export const enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email'
}

interface BaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  type?: InputType
  error?: string
  ref?: Ref<any> | undefined
}

interface TextInputProps extends BaseProps {
  type: InputType.Text
  defaultValue?: string
  initialValue?: string
  value: string
}

interface NumberInputProps extends BaseProps {
  type: InputType.Number
  defaultValue?: number
  initialValue?: number
  value: number
}

interface PasswordInputProps extends BaseProps {
  type: InputType.Password
  value: string
}

interface EmailInputProps extends BaseProps {
  type: InputType.Email
  value: string
}

type PropsUnion = TextInputProps | NumberInputProps | PasswordInputProps | EmailInputProps

export const Input = ({ required, error, name, ref, readOnly, onChange, value: _value, ...rest }: PropsUnion) => {
  const [value, setValue] = useDependentState(_value, [_value])
  return (
    <S.Input
      key={`${name}_input`}
      value={value}
      hasError={Boolean(error)}
      onChange={(e) => {
        setValue(e.target.value)
        onChange?.(e)
      }}
      {...rest}
    />
  )
}

export const TextInput = ({ type = InputType.Text, ...rest }: TextInputProps) => <Input type={type} {...rest} />
export const NumberInput = ({ type = InputType.Number, ...rest }: NumberInputProps) => <Input type={type} {...rest} />
export const PasswordInput = ({ type = InputType.Password, ...rest }: PasswordInputProps) => (
  <Input type={type} {...rest} />
)
export const EmailInput = ({ type = InputType.Email, ...rest }: EmailInputProps) => <Input type={type} {...rest} />
