import styled from '@theme';
import { SidePanelCard } from '../SidePanelCard';
import Grid from '@mui/material/Grid';

const Test = styled.div`
  aspect-ratio: 1 / 1;
  background-color: green;
`;

export const CardInstagramFeed: React.FC = () => {
  return (
    <SidePanelCard title="Instagram">
      <Grid container spacing={1}>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
        <Grid item sm={2} md={6} lg={4}>
          <Test />
        </Grid>
      </Grid>
    </SidePanelCard>
  );
};
