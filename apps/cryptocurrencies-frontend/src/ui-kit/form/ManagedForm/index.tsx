import useDataController from './useDataController'
import * as S from './styled'
import { DEFAULT_RULES } from './rules'
import { FormFieldDescriptor, FormFieldTypes } from './FormFieldTypes'
import { Button } from '@ui'
import { InputContainer } from '../../InputContainer'
import { fieldGetter } from './fieldGetter'
import { capitalize } from 'lodash'

type FieldRules = Array<(value: unknown) => string | undefined>

export interface FieldDescriptor {
  required?: boolean
  label?: string
  type: FormFieldTypes
  rules?: FieldRules
}

export interface FieldDescriptors {
  [key: string]: FormFieldDescriptor
}

interface PrimaryActionDescriptor {
  displayName: string
  onSubmit: (data: any) => void
}

interface Props {
  initialValues?: { [key: string]: unknown }
  descriptors: FieldDescriptors
  primaryAction: PrimaryActionDescriptor
}

export const ManagedForm = ({ initialValues, descriptors, primaryAction }: Props) => {
  const descriptorsWithDefaultRules = applyDefaultRules(descriptors)
  const { patch, errors, handleChange, validate } = useDataController(
    descriptorsWithDefaultRules,
    initialValues,
  )
  const { displayName, onSubmit } = primaryAction

  const handleSubmit = (e: React.FormEvent) => {
    debugger
    e.preventDefault()
    if (validate()) {
      onSubmit(patch)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.Container>
        {Object.entries(descriptors).map(([key, field]) => {
          return (
            <InputContainer
              label={field.label || capitalize(key)}
              required={field.required}
              error={errors[key]}
            >
              {fieldGetter(key, field, errors, handleChange, initialValues)}
            </InputContainer>
          )
        })}
      </S.Container>
      <S.ActionContainer>
        <Button type="submit" primary>
          {displayName}
        </Button>
      </S.ActionContainer>
    </form>
  )
}

function applyDefaultRules(descriptors: FieldDescriptors) {
  const fields = Object.keys(descriptors)

  return fields.reduce((acc, key) => {
    if (key in DEFAULT_RULES) {
      const rules: FieldRules = descriptors[key].rules ?? []
      const updatedRules = [...rules, ...DEFAULT_RULES[key]]
      acc[key] = { ...descriptors[key], rules: updatedRules }
    } else {
      acc[key] = descriptors[key]
    }
    return acc
  }, {} as FieldDescriptors)
}
