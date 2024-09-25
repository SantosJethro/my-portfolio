import React, { Fragment } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const RightPanelHome = () => {

  return (
    <Fragment>
      <Stack alignItems={'flex-end'}>
        <Box
          component={'img'}
          src={'/images/profile-pic.png'}
          height={'83vh'}
          width={'35vw'}
          sx={{
            objectFit: 'cover'
          }}
        />
      </Stack>
    </Fragment>
  );
};

export default RightPanelHome;