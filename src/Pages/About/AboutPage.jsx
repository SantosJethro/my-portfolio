import React, { Fragment } from 'react';
import { Grid2 as Grid } from '@mui/material';
import LeftPanelAbout from './LeftPanelAbout';
import RightPanelAbout from './RightPanelAbout';

const AboutPage = () => {

  return (
    <Fragment>
      <Grid container height={'100%'} spacing={2} width={'100%'} justifyContent={'space-between'}>
        <Grid size={5}>
          <LeftPanelAbout />
        </Grid>
        <Grid size={6}>
          <RightPanelAbout />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutPage;