import React from 'react'
import { FormFieldDescriptor, FormFieldTypes, isSimpleField } from './FormFieldTypes'
import { AbstractSelect, Input, DatePicker } from '@ui'
// TODO: Fix import to custom path
import { InputType } from 'src/ui-kit/form/Input'
import { EntitySelect } from '../EntitySelect'

const FIELD_TYPES_MAPPING = {
  [FormFieldTypes.Text]: InputType.Text,
  [FormFieldTypes.Email]: InputType.Email,
  [FormFieldTypes.Password]: InputType.Password,
  [FormFieldTypes.Number]: InputType.Number
}

export function fieldGetter(
  key: string,
  field: FormFieldDescriptor,
  errors: { [key: string]: string },
  handleChange: (key: string, value: any) => void,
  initialValues?: { [key: string]: any }
): React.ReactNode {
  if (isSimpleField(field)) {
    const { required, type } = field
    return (
      <Input
        value={initialValues?.[key] || ''}
        required={required}
        type={FIELD_TYPES_MAPPING[type]}
        name={key}
        key={key}
        error={errors[key]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(key, type === FormFieldTypes.Number ? Number(e.target.value) : e.target.value)
        }
      />
    )
  }
  if (field.type === FormFieldTypes.Select) {
    const { items, required, placeholder, searchable, clearable } = field
    return (
      <AbstractSelect
        key={key}
        items={items}
        required={required}
        placeholder={placeholder}
        searchable={searchable}
        clearable={clearable}
        multiselect={false}
        error={errors[key]}
        onChange={(selectItem: unknown) => handleChange(key, selectItem)}
      />
    )
  }
  if (field.type === FormFieldTypes.EntitySelect) {
    const { entityName, required, placeholder, searchable, clearable, itemToPair } = field
    return (
      <EntitySelect
        itemToPair={itemToPair}
        entityName={entityName}
        key={key}
        required={required}
        placeholder={placeholder}
        searchable={searchable}
        clearable={clearable}
        multiselect={false}
        error={errors[key]}
        onChange={(selectItem: unknown) => handleChange(key, selectItem)}
      />
    )
  }
  if (field.type === FormFieldTypes.Date) {
    const { required } = field
    return (
      <DatePicker
        key={key}
        name={key}
        value={initialValues?.[key]}
        required={required}
        error={errors[key]}
        onChange={(date: Number | null) => handleChange(key, date)}
      />
    )
  }
}
