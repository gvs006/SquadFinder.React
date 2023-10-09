import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3080',
      dark: '#000000',
      light: '#ECEDF9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#191D4D',
      dark: '#000000',
      light: '#ECEDF9',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#000',
      default: '#000',
    },
  }
});