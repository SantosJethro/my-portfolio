import React, { Fragment } from 'react';
import { Grid2 as Grid } from '@mui/material';
import LeftPanelHome from './LeftPanelHome';
import RightPanelHome from './RightPanelHome';

const HomePage = () => {

  return (
    <Fragment>
      <Grid container height={'100%'}>
        <Grid size={5}>
          <LeftPanelHome />
        </Grid>
        <Grid size={7}>
          <RightPanelHome />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;