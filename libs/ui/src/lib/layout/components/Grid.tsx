import styled, { PositiveSpaceUnit } from '@theme';

interface Props {
  gap?: PositiveSpaceUnit;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  // grid-template-columns: 1fr 1fr;

  grid-gap: ${(p) => (p.gap ? p.theme.spacing[p.gap] : undefined)};
`;
