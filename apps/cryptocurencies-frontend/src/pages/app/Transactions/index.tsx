import { Card } from '@ui'
import { EntityListing } from 'src/components/EntityListing'
import { Transaction } from 'src/graphql'
import { columns, fields } from './descriptors'

export const TransactionsPage = () => {
  return (
    <Card title="Transactions">
      <EntityListing<Transaction> entityName="transaction" columns={columns} fields={fields} />
    </Card>
  )
}
