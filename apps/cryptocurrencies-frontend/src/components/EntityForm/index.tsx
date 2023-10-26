import { useService, useFlashMessage } from '../../hooks'
import { EntityManagerService } from '../../services'
import { EntityNames } from '../../config/EntityConfig'
import { Card } from '@ui'
import { ManagedForm } from '../../ui-kit/ManagedForm/ManagedForm'
import { FieldDescriptors } from '../../ui-kit/ManagedForm/ManagedForm.types'

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
  initialValues: { [key: string]: any }
}

export const EntityForm = <T extends { _id: string }>({
  entityName,
  fields,
  type,
  initialValues,
  onSuccess,
}: EditProps<T> | CreateProps<T>) => {
  const entityManager = useService(EntityManagerService)
  const { pushMessage } = useFlashMessage()
  const primaryActionLabel = type === 'create' ? 'Create' : 'Edit'

  const handleAdd = async (data: T) => {
    entityManager.createEntity(entityName, data).then(() => {
      onSuccess?.()
    })
    // .catch((error) => {
    //   pushMessage('danger', 'Create failed!', error)
    // })
  }

  const handleEdit = async (data: T) => {
    entityManager
      .updateEntity(entityName, initialValues?._id, data)
      .then(() => onSuccess?.())
      .catch((error) => {
        pushMessage('danger', 'Create failed!', error)
      })
  }

  return (
    <Card>
      <ManagedForm
        descriptors={fields}
        initialValues={initialValues}
        primaryAction={{
          displayName: primaryActionLabel,
          onSubmit: type === 'create' ? handleAdd : handleEdit,
        }}
      />
    </Card>
  )
}
