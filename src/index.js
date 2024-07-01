import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './font.css'; // Import the custom font CSS
import './index.css';
import reportWebVitals from './reportWebVitals';



import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define the theme options directly
const themeOptions = createTheme({
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
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 200,
    htmlFontSize: 30,
    h1: {
      fontFamily: 'Georgia',

      lineHeight: 0.77,
    },
    h2: {
      fontFamily: 'Georgia',
      fontWeight: 100,
      lineHeight: 0.67,
    },
    h3: {
      lineHeight: 0.8,
    },
    h4: {
      fontFamily: 'Georgia',
      lineHeight: 0.67,
    },
    subtitle1: {
      fontFamily: 'Georgia',

      lineHeight: 1.05,
    },
    body1: {
      fontFamily: 'Georgia',
      lineHeight: 0.62,
    },
    button: {
      fontFamily: 'Georgia',
      lineHeight: 0.1,
    },
    caption: {
      fontFamily: 'Georgia',

      lineHeight: 1.2,
    },
    overline: {
      lineHeight: 1.83,
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={themeOptions}>
  <React.StrictMode>

    <App />
   
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
