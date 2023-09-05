import { Card } from '@ui'
import { EntityListing } from '../../../components/EntityListing'
import { Wallet } from '../../../graphql'
import { ColumnDescriptor } from '../../../ui-kit'

export const columns: ColumnDescriptor<Wallet>[] = [
  {
    key: 'amount',
  },
  {
    key: 'price',
  },
]

export const PortfolioPage = () => {
  return (
    <Card title="Portfolio">
      <EntityListing<Wallet> entityName="wallet" columns={columns} />
    </Card>
  )
}
