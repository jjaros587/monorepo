import styled, { TextColors, TextVariants } from '@theme';
import { ReactFCWithChildren } from '@ui';
import { getTextTag } from './getTextTag';

interface Props {
  color?: TextColors;
  variant?: TextVariants;
  style?: React.CSSProperties;
}

const TextBase = styled.span<Props>`
  ${(p) => p.theme.font[p.variant || 'body'](p.color)};
`;

export const Text: ReactFCWithChildren<Props> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <TextBase variant={variant} {...props} as={getTextTag(variant)}>
      {children}
    </TextBase>
  );
};
