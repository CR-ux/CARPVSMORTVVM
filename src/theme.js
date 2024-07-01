// src/theme.js
import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      light: '#541414',
      dark: '#230000',
      contrastText: '#ecd1d1',
    },
    secondary: {
      main: '#330114',
    },
    warning: {
      main: '#ce93d8',
    },
    info: {
      main: '#a69d8b',
    },
    success: {
      main: '#fff176',
    },
  },
  typography: {
    fontFamily: 'EB Garamond, axescript',
    fontSize: 7,
    fontWeightLight: 200,
    fontWeightRegular: 200,
    fontWeightMedium: 200,
    fontWeightBold: 200,
    htmlFontSize: 7,
    h1: {
      fontFamily: 'Times New Roman, axescript',
      lineHeight: 0.77,
    },
    h2: {
      fontWeight: 100,
      lineHeight: 0.67,
    },
    h3: {
      lineHeight: 0.8,
    },
    h4: {
      fontFamily: 'Times New Roman',
      lineHeight: 0.7,
    },
    h5: {
      fontFamily: 'Times New Roman',
      lineHeight: 0.8,
    },
    subtitle1: {
      lineHeight: 1.05,
    },
    body1: {
      lineHeight: 0.62,
    },
    button: {
      fontFamily: 'EB Garamond',
    },
    caption: {
      lineHeight: 0.92,
    },
    overline: {
      lineHeight: 1.83,
    },
  },
});