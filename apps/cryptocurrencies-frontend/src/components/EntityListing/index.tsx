import { useService } from '../../hooks'
import { EntityNames } from '../../config/EntityConfig'
import { capitalize } from 'lodash'
import { useMemo } from 'react'
import { SelectionCell } from './SelectionCell'
import { EntityForm } from '../EntityForm'
import { useEntityListing } from '../../hooks/useEntityListing'
import { DeleteAction } from '../../app/actions/DeleteAction'
import { ColumnDescriptor, Listing, ActionDropdown, FieldDescriptors } from '../../ui-kit'
import { Box, IconButton, EmptyPlaceholder } from '@ui'
import { observer } from 'mobx-react'
import { SidebarManager } from '../../services'

interface Props<T extends { _id: string }> {
  entityName: EntityNames
  columns: ColumnDescriptor<T>[]
  enableSelection?: boolean
  fields?: FieldDescriptors
}
export const EntityListing = observer(<T extends { _id: string }>(props: Props<T>) => {
  const { entityName, enableSelection = true, fields, columns: _columns } = props
  const sidebar = useService(SidebarManager)
  const properties = useMemo(() => {
    return _columns.map((column) => column.key)
  }, [_columns])
  const listing = useEntityListing<T>(entityName, properties, 10)
  const entityNamePlural = `${entityName}s`

  const columns = useMemo(() => {
    const columns = [...props.columns]
    if (enableSelection) {
      columns.unshift({
        key: '__selection',
        renderer: (rowData: T) => <SelectionCell rowData={rowData} />,
      })
    }
    columns.push({
      key: '__actions',
      renderer: (rowData: T) => (
        <ActionDropdown
          actions={[
            DeleteAction.create(entityName, rowData),
            {
              displayName: 'Edit',
              proceed: () => {
                sidebar.push({
                  isDestructive: true,
                  title: `Edit ${capitalize(entityName)}`,
                  Renderer: () => (
                    <EntityForm
                      key={`edit_${rowData._id}`}
                      entityName={entityName}
                      initialValues={rowData}
                      type={'edit'}
                      fields={fields}
                      onSuccess={() => {
                        listing.reload()
                        sidebar.pop()
                      }}
                    />
                  ),
                })
              },
            },
          ]}
        />
      ),
    })
    return columns
  }, [props.columns])

  return (
    <>
      {fields && (
        <Box paddingBottom="S" style={{ textAlign: 'right' }}>
          <IconButton
            icon={'add'}
            onClick={() => {
              sidebar.push({
                isDestructive: true,
                title: `Add new ${capitalize(entityName)}`,
                Renderer: () => (
                  <EntityForm
                    key={`create`}
                    entityName={entityName}
                    type={'create'}
                    onSuccess={() => {
                      listing.reload()
                      sidebar.pop()
                    }}
                    fields={fields}
                  />
                ),
              })
            }}
          />
        </Box>
      )}

      <Listing<T>
        columns={columns}
        listing={listing}
        emptyStatePlaceholder={
          <EmptyPlaceholder
            icon="fileEmpty"
            title={`No ${entityNamePlural}`}
            description="No data were created yet"
          />
        }
      />
    </>
  )
})
