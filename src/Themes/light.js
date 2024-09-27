import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER, FIXED_COMPONENTS, LIGHT } from '../Enums/themeEnums';

export const light = createTheme(({
  palette: {
    mode: LIGHT,
    primary: {
      main: '#f582ae',
    },
    secondary: {
      main: '#be1931',
    },
    grey: {
      main: '#848884',
    },
    icon: {
      main: '#001858'
    },
    text: {
      main: '#001858',
    },
    background: {
      default: '#fef6e4',
      paper: '#fef6e4',
    },
    // ...FIXED_PALETTE
  },
  spacing: 8,
  breakpoints: {
    values: {
      ...BREAKPOINTS
    },
  },
  props: {
    ...UIHELPER,
    contrastText: '#5A5A5A',
  },
  typography: {
    ...TYPOGRAPHIES
  },
  components: {
    ...FIXED_COMPONENTS,
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          padding: '20px 18px 10px'
        }
      }
    },
  },
}));