import styled from '@theme';
import { Box, ReactFCWithChildren, Text } from '@ui';

const Card = styled(Box)`
  border: 1px solid #333;
`;

interface Props {
  title: string;
}

export const SidePanelCard: ReactFCWithChildren<Props> = ({
  children,
  title,
}) => {
  return (
    <Card align="center" padding="M">
      <Box paddingBottom="M">
        <Text>{title}</Text>
      </Box>
      {children}
    </Card>
  );
};
