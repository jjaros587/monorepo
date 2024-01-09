import styled from '@theme'
import { Inline, Text, Box } from '@ui'

const Tag = styled(Box)`
  background: #40484d;
  border-radius: 5px;
`

export const SkillsTags = ({ values }: { values: string[] }) => {
  return (
    <Inline gap="XXS" alignY="center">
      {values.map((value, index) => (
        <Inline.Item key={index} flexGrow>
          <Tag key={index} align="center" paddingX="M">
            <Text>{value}</Text>
          </Tag>
        </Inline.Item>
      ))}
    </Inline>
  )
}
