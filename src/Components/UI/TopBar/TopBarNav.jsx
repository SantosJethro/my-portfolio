import React, { useState } from 'react';
import { Box, Stack, Tab, Tabs, } from '@mui/material';
import { PAGE_LIST } from '../../../AppRoutes';
import { useNavigate } from 'react-router-dom';

const TopBarNav = () => {
  const [value, setValue] = useState('/');
  const navigate = useNavigate();

  const handleChange = (event, path) => {
    setValue(path);
    navigate(path);
  };

  return (
    <Box>
      <Stack alignItems={'flex-end'}>
        <Tabs value={value} onChange={handleChange}>
          {
            PAGE_LIST.map((page, idx) => <Tab key={`${page.path}-${idx}`} label={page.title} value={page.path} selected={true} />)
          }
        </Tabs>
      </Stack>
    </Box>
  );
};

export default TopBarNav;