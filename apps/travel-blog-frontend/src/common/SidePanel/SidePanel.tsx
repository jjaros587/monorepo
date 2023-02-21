'use client';

import { IconSocialMedia } from '@icons';
import { Box, Inline, Text, Stack } from '@ui';
import styled from '@theme';

const Container = styled(Box)`
  border: 1px solid #333;
  width: 250px;
`;

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
`;

export const SidePanel = () => {
  return (
    <Stack gap="M">
      <Container align="center" padding="M">
        <Text>Social</Text>
        <Inline gap="M">
          <IconSocialMedia name="facebook" />
          <IconSocialMedia name="instagram" />
          <IconSocialMedia name="youtube" />
        </Inline>
      </Container>
      <Container align="center" padding="M">
        <Text>Instagram</Text>
        <Inline gap="S">
          <Test />
          <Test />
          <Test />
          <Test />
        </Inline>
      </Container>
    </Stack>
  );
};
