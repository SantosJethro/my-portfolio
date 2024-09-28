import React, { Fragment } from 'react';
import { Box, Stack } from '@mui/material';

const RightPanelHome = () => {

  return (
    <Fragment>
      <Stack sx={(theme) => ({
        [theme.breakpoints.down('tablet')]: {
          alignItems: 'center',
        },
        [theme.breakpoints.up('laptop')]: {
          alignItems: 'flex-end',
        },
      })}>
        <Box
          component={'img'}
          src={'/images/profile-pic.png'}
          sx={{
            objectFit: 'cover',
            width: '50%',
            height: '80%'
          }}
        />
      </Stack>
    </Fragment>
  );
};

export default RightPanelHome;