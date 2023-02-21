import { useApolloClient } from '@apollo/client'
import { useService, useFlashMessage } from '@hooks'
import { DocumentNodeService } from '@services'
import { Card, FieldDescriptors, ManagedForm } from '@ui'
import { EntityNames } from 'src/config/EntityConfig'

interface BaseProps<T> {
  entityName: EntityNames
  fields: FieldDescriptors
  type: 'create' | 'edit'
  onSuccess?: () => void
}

interface CreateProps<T> extends BaseProps<T> {
  type: 'create'
  initialValues?: { [key: string]: unknown }
}

interface EditProps<T> extends BaseProps<T> {
  type: 'edit'
  initialValues: { [key: string]: unknown }
}

export const EntityForm = <T extends { _id: string }>({
  entityName,
  fields,
  type,
  initialValues,
  onSuccess
}: EditProps<T> | CreateProps<T>) => {
  const dnService = useService(DocumentNodeService)
  const client = useApolloClient()
  const { pushMessage } = useFlashMessage()
  const primaryActionLabel = type === 'create' ? 'Create' : 'Edit'

  const handleAdd = async (data: T) => {
    const createMutation = await dnService.create(entityName)
    if (createMutation) {
      client
        .mutate({ mutation: createMutation, variables: { new: data } })
        .then(() => onSuccess?.())
        .catch((error) => {
          pushMessage('danger', 'Create failed!', error)
        })
    }
  }

  const handleEdit = async (data: T) => {
    const updateMutation = await dnService.update(entityName)
    if (updateMutation) {
      client
        .mutate({ mutation: updateMutation, variables: { _id: initialValues?._id, patch: data } })
        .then(() => onSuccess?.())
        .catch((error) => {
          pushMessage('danger', 'Create failed!', error)
        })
    }
  }

  return (
    <Card>
      <ManagedForm
        descriptors={fields}
        initialValues={initialValues}
        primaryAction={{ displayName: primaryActionLabel, onSubmit: type === 'create' ? handleAdd : handleEdit }}
      />
    </Card>
  )
}
