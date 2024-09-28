import React from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import SideDrawerNavigation from './SideDrawerNavigation';
import { useUIStore } from '../../../Store/store';
import ThemeSwitcher from '../ThemeSwitcher';
import { CloseRounded } from '@mui/icons-material';

const SideDrawer = () => {
  const [{ isSideDrawerOpen }, { setSidedrawer }] = useUIStore();

  return (
    <Drawer
      anchor={'right'}
      open={isSideDrawerOpen}
      onClose={() => setSidedrawer()}
    >
      <Box>
        <ThemeSwitcher />
        <IconButton onClick={() => setSidedrawer()}>
          <CloseRounded />
        </IconButton>
      </Box>
      <SideDrawerNavigation />
    </Drawer>
  );
};

export default SideDrawer;