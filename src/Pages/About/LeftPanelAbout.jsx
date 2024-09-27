import React, { Fragment } from 'react';
import { Box, Stack } from '@mui/material';

const LeftPanelAbout = () => {

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

export default LeftPanelAbout;