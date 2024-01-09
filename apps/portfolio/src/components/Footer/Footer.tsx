import styled from '@theme'
import { Text, Box, Inline, Stack } from '@ui'

const StyledFooter = styled.footer`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme.colors.primary};
`

const Container = styled(Box)`
  width: 100%;
  & > *:not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.colors.display};
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Container padding="XL" className="contentWrapper">
        <Box paddingBottom="L">
          <Inline align="space-evenly">
            <Box>
              Call me <a href="tel:+420605859213">+420 605 859 213</a>
            </Box>
            <Box>
              Text me <a href="mailto:jjaros587@gmail.com">jjaros587@gmail.com</a>
            </Box>
          </Inline>
        </Box>

        <Box align="center" paddingTop="L">
          <Text color="light">Copyright {'\u00A9'} Jakub Jaroš, All rights reserved</Text>
        </Box>
      </Container>
    </StyledFooter>
  )
}
