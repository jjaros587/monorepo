import styled from '@theme'
import { Inline, Text, Box } from '@ui'

const Tag = styled(Box)`
  border-radius: 5px;
`

export const TagsList = ({ values }: { values: string[] }) => {
  return (
    <Inline gap="S" alignY="center">
      {values.map((value, index) => (
        <Inline.Item key={index} flexGrow>
          <Tag key={index} align="center" paddingX="M" backgroundColor="background">
            <Text noWrap>{value}</Text>
          </Tag>
        </Inline.Item>
      ))}
    </Inline>
  )
}
