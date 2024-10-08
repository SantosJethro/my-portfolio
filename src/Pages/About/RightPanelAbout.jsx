import React, { Fragment } from 'react';
import { Box, Button, Grid2 as Grid, Stack, Typography } from '@mui/material';

const MyDetails = ({ field, value }) => {

  return (
    <Fragment>
      <Grid container item size={12} spacing={1} alignItems={'center'}>
        <Grid item size={4}>
          <Typography variant="h5">{`${field}:`}</Typography>
        </Grid>
        <Grid item size={8}>
          <Typography variant="h6">{`${value}`}</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const RightPanelAbout = () => {

  const handleDownload = () => {
    const fileUrl = '/files/jeth-santos-resume_cv.pdf'; // Change this to your file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'jeth-santos-resume_cv.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Fragment>
      <Typography variant={'h1'}>
        About Me
      </Typography>
      <Grid container spacing={2} direction={'column'}>
        <MyDetails field={'Name'} value={'Jethro Nathaniel Santos'} />
        <MyDetails field={'Date Of birth'} value={'November 06, 1997'} />
        <MyDetails field={'Address'} value={'Baguio City, Benguet'} />
        <MyDetails field={'Zip Code'} value={'2600'} />
        <MyDetails field={'Email'} value={'jethdsantos@gmail.com'} />
        <MyDetails field={'Phone'} value={'0951541540'} />
      </Grid>

      <Box sx={{marginY: '20px'}}>
        <Typography variant='h5'>
          <Typography component={'span'} variant={'h5'} color='primary.main'>
            30
          </Typography> {' '}
          Project Completed
        </Typography>
      </Box>
      <Stack spacing={1} direction={'row'}>
        <Button size='large' onClick={() => handleDownload()}>
          DOWNLOAD CV
        </Button>
      </Stack>
    </Fragment>
  );
};

export default RightPanelAbout;