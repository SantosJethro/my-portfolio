import React, { Fragment } from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { FaLinkedin } from 'react-icons/fa';
import { MY_LINKEDIN_URL } from '../../Enums/staticValues';
import { useNavigate } from 'react-router-dom';
import { ResponsiveTypography } from '../../Components/UI/Typography';

const LeftPanelHome = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <ResponsiveTypography variant={'h1'}>
        I&apos;m{' '}<ResponsiveTypography component={'span'} variant={'h1'} color='primary.main'>
          Jethro Nathaniel
        </ResponsiveTypography>
      </ResponsiveTypography>
      <Typography variant={'h1'} color='primary.main'>
        Santos
      </Typography>
      <Typography variant='h3'>
        Fullstack Web Developer
      </Typography>
      <Stack spacing={1} direction={'row'} alignItems={'center'}>
        <IconButton onClick={() => window.open(MY_LINKEDIN_URL, '_blank', 'noreferrer')}>
          <FaLinkedin style={{ color: 'rgb(14, 101, 189)' }} size={'35px'} />
        </IconButton>
        <Button variant='outlined' onClick={() => navigate('/project')}>
          My Projects
        </Button>
      </Stack>
    </Fragment>
  );
};

export default LeftPanelHome;