import React from 'react';
import { Grid2 as Grid, IconButton, Stack } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import { AppBar } from '../AppBar';
import TopBarTitle from './TopBarTitle';
import TopBarNav from './TopBarNav';
import { useUIStore } from '../../../Store/store';
import ThemeSwitcher from '../ThemeSwitcher';

const TopBar = () => {
  const [, { setSidedrawer }] = useUIStore();

  return (
    <AppBar height={'55px'}>
      <Grid container spacing={1} alignItems={'center'} justifyContent={'space-between'}>
        <Grid size={3}>
          <TopBarTitle />
        </Grid>
        <Grid size={8} container justifyContent={'flex-end'} sx={(theme) => ({
          [theme.breakpoints.down('tablet')]: {
            display: 'none',
          },
        })}>
          <Grid size={8}>
            <TopBarNav />
          </Grid>
          <Grid size={1.5}>
            <ThemeSwitcher />
          </Grid>
        </Grid>
        <Grid size={9} sx={(theme) => ({
          [theme.breakpoints.up('tablet')]: {
            display: 'none',
          },
        })}>
          <Stack alignItems={'flex-end'}>
            <IconButton onClick={() => setSidedrawer()}>
              <MenuRounded />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;