import React, { Fragment } from 'react';
import { Button, Stack, Typography } from '@mui/material';

const LeftPanelHome = () => {

  return (
    <Fragment>
      <Typography variant={'h1'}>
        I&apos;m{' '}<Typography component={'span'} variant={'h1'} color='primary.main'>
          Jethro Nathaniel
        </Typography>
      </Typography>
      <Typography variant={'h1'} color='primary.main'>
        Santos
      </Typography>
      <Typography variant='h3'>
        Fullstack Web Developer
      </Typography>
      <Stack spacing={1} direction={'row'}>
        <Button size='large'>
          Hire Me
        </Button>
        <Button variant='outlined' size='large'>
          My Projects
        </Button>
      </Stack>
    </Fragment>
  );
};

export default LeftPanelHome;