import React from 'react';
import { Button } from '@mui/material';
import { useUIStore } from '../../Store/store';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { DARK, LIGHT, THEME_KEY } from '../../Enums/themeEnums';

const ThemeSwitcher = () => {
  const [, setDefaultTheme] = useLocalStorage(THEME_KEY);
  const [{ theme }, { setTheme }] = useUIStore();

  const handleThemeChange = () => {
    const changedTheme = theme == LIGHT ? DARK : LIGHT;
    setDefaultTheme(changedTheme);
    setTheme(changedTheme);
  };

  return (
    <Button
      sx={{
        backgroundImage: `url(images/${theme}.png)`,
        width: '150px',
        height: '40px',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover'
      }}
      onClick={() => handleThemeChange()}
    />

  );
};

export default ThemeSwitcher;