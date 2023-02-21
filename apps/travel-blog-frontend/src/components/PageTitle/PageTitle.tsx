import { ReactFCWithChildren, Text } from '@ui';

export const PageTitle: ReactFCWithChildren<{}> = ({ children }) => {
  return <Text variant="display">{children}</Text>;
};
