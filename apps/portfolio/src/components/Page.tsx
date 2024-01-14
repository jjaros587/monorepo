import styled from '@theme'
import { Box, ReactFCWithChildren, Text } from '@ui'

interface Props {
  title: string
}

const PageContainer = styled(Box)`
  & .pageSection {
    ${(p) => p.theme.margin.top('XL')}
  }

  & .pageSection:not(:last-child) {
    ${(p) => p.theme.padding.bottom('XL')}
    border-bottom: 3px solid var(--colors-surface);
  }
`

const PageTitle = styled(Box)`
  :after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: ${(p) => p.theme.colors.primary};
    left: 0;
    margin-top: 10px;
  }
`

export const Page: ReactFCWithChildren<Props> = ({ title, children }) => {
  return (
    <PageContainer>
      <PageTitle align="center">
        <Text variant="headline1" color="light">
          {title.toUpperCase()}
        </Text>
      </PageTitle>
      {children}
    </PageContainer>
  )
}
