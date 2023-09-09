import { observer } from 'mobx-react'
import { useEntityListing } from '../../hooks/useEntityListing'
import { SingleSelect } from '@ui'

interface Props {
  entityName: string
  itemToPair: (item: unknown) => { value: string; label: string }
  onChange: (selectedItem: unknown | null) => void
  required?: boolean
  error?: string
  properties: string[]
}

export const EntitySelect = observer(({ entityName, itemToPair, properties, ...rest }: Props) => {
  const { items } = useEntityListing(entityName, properties)

  return <SingleSelect items={items.map((item) => itemToPair(item))} {...rest} />
})
