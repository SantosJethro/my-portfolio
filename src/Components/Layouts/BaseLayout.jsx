import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopBar from '../UI/TopBar/Topbar';

const BaseLayout = () => {

  return (
    <Box>
      <TopBar />
      <Box sx={{ marginTop: '95px', padding: '20px' }}>
        <Outlet />
      </Box>
    </Box >
  );
};

export default BaseLayout;