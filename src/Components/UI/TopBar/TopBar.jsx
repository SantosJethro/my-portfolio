import React from 'react';
import { AppBar } from '../AppBar';
import { Grid2 as Grid } from '@mui/material';
import TopBarTitle from './TopBarTitle';
import TopBarNav from './TopBarNav';
import TopBarThemeSwitch from './TobBarThemeSwitch';

const TopBar = () => {

  return (
    <AppBar height={'55px'}>
      <Grid container spacing={1} alignItems={'center'} justifyContent={'space-between'}>
        <Grid size={3}>
          <TopBarTitle />
        </Grid>
        <Grid size={8} container justifyContent={'flex-end'}>
          <Grid size={8}>
            <TopBarNav />
          </Grid>
          <Grid size={1.5}>
            <TopBarThemeSwitch />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;