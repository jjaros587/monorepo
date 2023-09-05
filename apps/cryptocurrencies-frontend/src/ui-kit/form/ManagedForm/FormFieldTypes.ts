import { SelectItem } from '../Select/types'

export enum FormFieldTypes {
  Text = 'text',
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Date = 'date',
  Select = 'select',
  EntitySelect = 'entitySelect',
}

interface BaseFieldDescriptor {
  type: FormFieldTypes
  required?: boolean
  label?: string
  rules?: Array<(value: unknown) => string | undefined>
}

interface TextFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.Text
}

interface EmailFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.Email
}

interface PasswordFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.Password
}

interface DateFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.Date
}

interface NumberFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.Number
}

interface SelectFieldBaseDescriptor extends BaseFieldDescriptor {
  multiselect?: boolean
  searchable?: boolean
  clearable?: boolean
  placeholder?: string
}

interface EntitySelectFieldDescriptor extends SelectFieldBaseDescriptor {
  type: FormFieldTypes.EntitySelect
  entityName: string
  itemToPair: (item: never) => { value: string; label: string }
  properties: string[]
}

interface SelectFieldDescriptor extends SelectFieldBaseDescriptor {
  type: FormFieldTypes.Select
  items: SelectItem[]
}

type SimpleFormField =
  | EmailFieldDescriptor
  | PasswordFieldDescriptor
  | TextFieldDescriptor
  | NumberFieldDescriptor
export type FormFieldDescriptor =
  | SimpleFormField
  | DateFieldDescriptor
  | SelectFieldDescriptor
  | EntitySelectFieldDescriptor

export function isSimpleField(field: FormFieldDescriptor): field is SimpleFormField {
  return [
    FormFieldTypes.Text,
    FormFieldTypes.Email,
    FormFieldTypes.Password,
    FormFieldTypes.Number,
  ].includes(field.type)
}
