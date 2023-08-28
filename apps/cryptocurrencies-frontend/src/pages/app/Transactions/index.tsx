import { Card } from '@ui'
import { EntityListing } from '../../../components/EntityListing'
import { Transaction } from '../../../graphql'
import { columns, fields } from './descriptors'

export const TransactionsPage = () => {
  return (
    <Card title="Transactions">
      <EntityListing<Transaction> entityName="transaction" columns={columns} fields={fields} />
    </Card>
  )
}
