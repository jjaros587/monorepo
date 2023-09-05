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

export const EntitySelect = ({ entityName, itemToPair, properties, ...rest }: Props) => {
  const { state } = useEntityListing(entityName, properties)

  return <SingleSelect items={state.items.map((item) => itemToPair(item))} {...rest} />
}
