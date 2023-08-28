import { Card, Text, Flexbox } from '@ui'
import { IconCrypto } from '../../../ui-kit'

interface ItemProps {
  asset: {
    abbr: string
    name: string
  }
  price: number
  change: number
}

const MOCK: Array<ItemProps> = [
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
  {
    asset: { abbr: 'BTC', name: 'bitcoin' },
    price: 68000,
    change: 4.5,
  },
  {
    asset: { abbr: 'ETH', name: 'ethereum' },
    price: 4000,
    change: 6.7,
  },
  {
    asset: { abbr: 'LTC', name: 'litecoin' },
    price: 150,
    change: -4.5,
  },
]

const Item = ({ item }: { item: ItemProps }) => {
  return (
    <Card>
      <IconCrypto name={item.asset.name} />
      <Text color={'white'}>{item.asset.abbr}</Text>
      <Text color={'secondary'}>{item.price}</Text>
      <Text color={item.change >= 0 ? 'success' : 'danger'}>{item.change}</Text>
    </Card>
  )
}

export const PricesPage = () => {
  return (
    <Flexbox direction="row">
      {MOCK.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </Flexbox>
  )
}
