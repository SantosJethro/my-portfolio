export const DARK = 'dark';
export const LIGHT = 'light';
export const THEME_KEY = 'my-portfolio-theme';

export const BREAKPOINTS = Object.freeze({
  mobile: 0,
  tablet: 600,
  laptop: 900,
  desktop: 1200,
  largeDesktop: 1600,
});

export const UIHELPER = Object.freeze({
  topBarHeight: '190px',
});


export const SHADOWS = Object.freeze({
  default: '0 3px 10px rgba(0, 0, 0, 0.05)',
  hard: '0 3px 10px rgba(0, 0, 0, 0.15)'
});

export const TYPOGRAPHIES = Object.freeze({
  fontFamily: [
    'Poppins'
  ].join(','),
  h1: {
    fontSize: '96px',
    fontWeight: 400,
    lineHeight: '161px',
    letterSpacing: '-1.5px'
  },
  h2: {
    fontWeight: 900,
    fontSize: '60px',
    lineHeight: '100px',
    letterSpacing: '-0.5px',
  },
  h3: {
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '80px'
  },
  h4: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '0.25px',
  },
  h5: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '40px',
  },
  h6: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '33px',
    letterSpacing: '0.15px',
  },
  subtitle1: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '27px',
    letterSpacing: '0.15px',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '23px',
    letterSpacing: '0.1px'
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '27px',
    letterSpacing: '0.15px'
  },
  body2: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '23px',
    letterSpacing: '0.15px'
  },
  caption: {
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '23px',
    letterSpacing: '0.15px'
  }
});

export const FIXED_COMPONENTS = Object.freeze({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: '11px',
        borderRadius: '5px',
        margin: '0 5px 0 0',
      },
    }
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      size: 'small'
    },
    styleOverrides: {
      root: {
        borderRadius: '10px',
        boxShadow: 'none',
        minWidth: '90px',
        textTransform: 'capitalize',
        ':hover': {
          boxShadow: SHADOWS.default,
        },
        '&.MuiButton-contained': {
          color: '#FFF',
        }
      },
    }
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      variant: 'outlined',
      size: 'small',
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: '20px',
        borderRadius: '10px',
        boxShadow: SHADOWS.default,
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontSize: '11px',
        borderRadius: '10px',
        fontWeight: 700,
        '&.MuiChip-outlined': {
          border: '2px solid'
        }
      }
    }
  },
  MuiDialog: {
    defaultProps: {
      maxWidth: 'tablet',
      fullWidth: true
    },
    styleOverrides: {
      root: {
        '.MuiDialog-paper': {
          borderRadius: '10px',
          boxShadow: SHADOWS.default
        },
        '.MuiDialogActions-root': {
          padding: '0 23px 20px 0'
        },
      }
    }
  },
  MuiIcon: {
    defaultProps: {
      fontSize: 'inherit',
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        maxHeight: '300px'
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        padding: '4px 8px !important'
      }
    }
  },
  MuiPopover: {
    styleOverrides: {
      root: {
        '.MuiPaper-root': {
          boxShadow: SHADOWS.default,
          padding: '10px',
          borderRadius: '10px',
          marginTop: '8px'
        }
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderStyle: 'dashed',
        margin: '10px 0'
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: SHADOWS.default
      }
    }
  },
});