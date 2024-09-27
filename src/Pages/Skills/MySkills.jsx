import React from 'react';
import { Box, Grid2 as Grid, LinearProgress, Stack, Typography } from '@mui/material';

const MySkills = ({ skill, skillLevel, icon }) => {

  return (
    <Grid container item size={12} spacing={1} alignItems={'center'}>
      <Grid item size={6}>
        <Stack spacing={2} direction={'row'}>
          {icon}
          <Typography variant='h6'>{`${skill}`}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Box position="relative">
          <Box
            position="absolute"
            left={`${skillLevel}%`} // Position based on skillLevel
            top="-37px" // Adjust this to move the label up or down
            style={{ transform: 'translateX(-50%)', color: '#fff' }} // Change color as needed
          >
            <Typography variant='h6'>{`${skillLevel}%`}</Typography>
          </Box>
          <LinearProgress variant="determinate" value={skillLevel} sx={{ height: '10px', }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MySkills;