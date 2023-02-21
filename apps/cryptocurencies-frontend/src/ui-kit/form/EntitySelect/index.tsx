import { useEntityListing } from 'src/hooks/useEntityListing'
import { AbstractSelect } from '../Select'

interface Props {
  entityName: string
  itemToPair: (item: unknown) => { value: any; label: any }
  onChange: (selectedItem: unknown | null) => void
  multiselect?: boolean
  searchable?: boolean
  clearable?: boolean
  placeholder?: String
  required?: boolean

  error?: string
}

export const EntitySelect = ({ entityName, itemToPair, ...rest }: Props) => {
  const { state } = useEntityListing(entityName)

  return <AbstractSelect items={state.items.map((item) => itemToPair(item))} {...rest} />
}
