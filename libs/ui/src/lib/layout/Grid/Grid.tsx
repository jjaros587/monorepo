import styled, { PositiveSpaceUnit } from '@theme';

interface Props {
  gap?: PositiveSpaceUnit;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-auto-flow: dense;
  gap: ${(p) => (p.gap ? p.theme.spacing[p.gap] : undefined)};
`;
