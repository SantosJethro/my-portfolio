import React, { Fragment } from 'react';
import { Grid2 as Grid } from '@mui/material';
import LeftPanelAbout from './LeftPanelAbout';
import RightPanelAbout from './RightPanelAbout';

const AboutPage = () => {

  return (
    <Fragment>
      <Grid
        container
        height={'100%'}
        spacing={2}
        width={'100%'} 
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={(theme) => ({
          [theme.breakpoints.down('tablet')]: {
            flexDirection: 'column',
          },
        })}
      >
        <Grid size={{ tablet: 12, laptop: 5 }}>
          <LeftPanelAbout />
        </Grid>
        <Grid size={{ tablet: 12, laptop: 6 }}>
          <RightPanelAbout />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutPage;