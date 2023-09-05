import { SelectItem } from '@ui'

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

interface EntitySelectFieldDescriptor extends BaseFieldDescriptor {
  type: FormFieldTypes.EntitySelect
  entityName: string
  itemToPair: (item: never) => { value: string; label: string }
  properties: string[]
}

interface SelectFieldDescriptor extends BaseFieldDescriptor {
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

export type FieldRules = Array<(value: unknown) => string | undefined>

export interface FieldDescriptor {
  required?: boolean
  label?: string
  type: FormFieldTypes
  rules?: FieldRules
}

export interface FieldDescriptors {
  [key: string]: FormFieldDescriptor
}
