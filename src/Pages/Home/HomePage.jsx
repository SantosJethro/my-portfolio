import React, { Fragment } from 'react';
import { Grid2 as Grid } from '@mui/material';
import LeftPanelHome from './LeftPanelHome';
import RightPanelHome from './RightPanelHome';

const HomePage = () => {

  return (
    <Fragment>
      <Grid container height={'100%'} sx={(theme) => ({
        [theme.breakpoints.down('tablet')]: {
          flexDirection: 'column-reverse',
        },
      })}>
        <Grid size={{ tablet: 12, laptop: 5 }}>
          <LeftPanelHome />
        </Grid>
        <Grid size={{ tablet: 12, laptop: 7 }}>
          <RightPanelHome />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;