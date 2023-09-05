import useDataController from './utils/useDataController'
import * as S from './ManagedForm.styles'
import { FieldDescriptors } from './ManagedForm.types'
import { Button, InputContainer } from '@ui'
import { fieldGetter } from './utils/fieldGetter'
import { capitalize } from 'lodash'
import { applyDefaultRules } from './utils/applyDefaultRules'

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
