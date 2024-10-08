import React, { } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopBar from '../UI/TopBar/Topbar';
import SideDrawer from '../UI/SideDrawer/SideDrawer';

const BaseLayout = () => {

  return (
    <Box>
      <TopBar />
      <SideDrawer />
      <Box sx={(theme) => ({
        marginTop: '75px',
        padding: '20px', 
        [theme.breakpoints.down('tablet')]: {
          marginTop: '30px',
        },
      })}>
        <Outlet />
      </Box>
    </Box >
  );
};

export default BaseLayout;