
import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER, FIXED_COMPONENTS, DARK } from '../Enums/themeEnums';

export const dark = createTheme(({
  palette: {
    mode: DARK,
    primary: {
      main: '#FEBB43',
    },
    secondary: {
      main: '#eebbc3',
    },
    icon: {
      main: '#a9a9a9'
    },
    text: {
      main: '#FEFEFE',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      ...BREAKPOINTS
    },
  },
  props: {
    ...UIHELPER,
    contrastText: '#f3f3f3',
  },
  typography: {
    ...TYPOGRAPHIES
  },
  components: {
    ...FIXED_COMPONENTS,
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(40, 36, 61, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          padding: '20px 18px 10px',
        }
      }
    },
  },
}));