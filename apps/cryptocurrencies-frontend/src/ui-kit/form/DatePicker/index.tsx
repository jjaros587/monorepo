import React from 'react'
import { TextInput } from '..'
import { DateTimePicker } from '@material-ui/pickers'
import { TextFieldProps } from '@material-ui/core'
import moment from 'moment'

interface Props {
  name: string
  required?: boolean
  onChange: (value: number | null) => void
  error?: string
  value?: number
}

export const DatePicker = (props: Props) => {
  const { name, required, onChange, error, value: initialValue } = props
  const [value, setValue] = React.useState<Date | null>(
    initialValue ? new Date(initialValue * 1000) : null,
  )

  const RenderInput = (inputProps: TextFieldProps): unknown => (
    <TextInput
      required={required}
      key={`${name}_label`}
      ref={inputProps.inputRef}
      value={inputProps.value as string}
      onClick={inputProps.onClick}
      onChange={inputProps.onChange}
      readOnly={true}
      name={name}
      error={error}
    />
  )
  return (
    <DateTimePicker
      value={value}
      format="MMM d, yyyy 'at' h:mm aaaaa'm'"
      variant="dialog"
      onChange={(date) => {
        setValue(date)
        onChange(moment(date).unix())
      }}
      clearable={true}
      autoOk={true}
      TextFieldComponent={RenderInput}
    />
  )
}
