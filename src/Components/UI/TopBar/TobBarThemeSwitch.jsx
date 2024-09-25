import React from 'react';
import { Button } from '@mui/material';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';
import { DARK, LIGHT, THEME_KEY } from '../../../Enums/themeEnums';
import { useUIStore } from '../../../Store/store';

const TopBarThemeSwitch = () => {
  const [, setDefaultTheme] = useLocalStorage(THEME_KEY);
  const [{ theme }, { setTheme }] = useUIStore();

  const handleThemeChange = () => {
    const changedTheme = theme == LIGHT ? DARK : LIGHT;
    setDefaultTheme(changedTheme);
    setTheme(changedTheme);
  };

  return (
    <Button sx={{ backgroundImage: `url(images/${theme}.png)`, width: '150px', height: '40px', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} onClick={() => handleThemeChange()}>
      {/* Test */}
    </Button>
  );
};

export default TopBarThemeSwitch;