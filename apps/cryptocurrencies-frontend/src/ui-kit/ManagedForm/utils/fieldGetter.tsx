import React from 'react'
import { FormFieldDescriptor, FormFieldTypes, isSimpleField } from '../ManagedForm.types'
import { EntitySelect } from '../../EntitySelect'
import { Input, InputType, SingleSelect, DatePicker } from '@ui'

const FIELD_TYPES_MAPPING = {
  [FormFieldTypes.Text]: InputType.Text,
  [FormFieldTypes.Email]: InputType.Email,
  [FormFieldTypes.Password]: InputType.Password,
  [FormFieldTypes.Number]: InputType.Number,
}

export function fieldGetter(
  key: string,
  descriptor: FormFieldDescriptor,
  errors: { [key: string]: string },
  handleChange: (key: string, value: any) => void,
  initialValues?: { [key: string]: any },
): React.ReactNode {
  const { type } = descriptor

  if (isSimpleField(descriptor)) {
    return (
      <Input
        value={initialValues?.[key] || ''}
        required={descriptor.required}
        type={FIELD_TYPES_MAPPING[descriptor.type]}
        name={key}
        key={key}
        error={errors[key]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(
            key,
            descriptor.type === FormFieldTypes.Number ? Number(e.target.value) : e.target.value,
          )
        }
      />
    )
  }

  switch (type) {
    case FormFieldTypes.Select:
      return (
        <SingleSelect
          key={key}
          items={descriptor.items}
          required={descriptor.required}
          error={errors[key]}
          onChange={(selectItem: unknown) => handleChange(key, selectItem)}
        />
      )
    case FormFieldTypes.EntitySelect:
      return (
        <EntitySelect
          key={key}
          itemToPair={descriptor.itemToPair}
          entityName={descriptor.entityName}
          required={descriptor.required}
          properties={descriptor.properties}
          error={errors[key]}
          onChange={(selectItem: unknown) => handleChange(key, selectItem)}
        />
      )

    case FormFieldTypes.Date:
      return (
        <DatePicker
          key={key}
          name={key}
          value={initialValues?.[key]}
          required={descriptor.required}
          error={errors[key]}
          onChange={(date: number | null) => handleChange(key, date)}
        />
      )
  }
}
