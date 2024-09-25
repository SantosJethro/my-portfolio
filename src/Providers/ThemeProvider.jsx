import React, { useEffect } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { light } from '../Themes/light';
import { dark } from '../Themes/dark';
import { useUIStore } from '../Store/store';
import { DARK, LIGHT, THEME_KEY } from '../Enums/themeEnums';

const ThemeProvider = ({ children }) => {
  const [{ theme }, actions] = useUIStore();
  const [defaultTheme] = useLocalStorage(THEME_KEY, window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);

  useEffect(() => {
    actions.setTheme(defaultTheme);
  }, [actions, defaultTheme]);

  return (
    <MaterialThemeProvider theme={theme == LIGHT ? light : dark}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          '::-webkit-scrollbar': {
            width: '4px',
            height: '10px',
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.background.default,
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette?.scrollbar?.thumb || theme.palette.primary.main,
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.secondary.main, 
          },
        })}
      />
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;