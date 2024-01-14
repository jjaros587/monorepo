import styled from '@theme'
import { Text, ReactFCWithChildren, Stack } from '@ui'

interface Props {
  title: string
  info?: string
}

const SectionTitle = styled.div`
  :after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: ${(p) => p.theme.colors.primary};
    left: 0;
    margin-top: 10px;
  }
`

export const PageSection: ReactFCWithChildren<Props> = ({ title, info, children }) => {
  return (
    <div className="pageSection">
      <Stack gap="L">
        <SectionTitle>
          <Text variant="headline1" color="light">
            {title}
          </Text>
        </SectionTitle>
        {info && (
          <div>
            <Text>{info}</Text>
          </div>
        )}
        <div>{children}</div>
      </Stack>
    </div>
  )
}