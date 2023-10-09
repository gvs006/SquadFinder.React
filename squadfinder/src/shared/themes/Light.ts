import { createTheme } from '@mui/material';


export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3080',
      dark: '#0C0E26',
      light: '#ffffff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#A1A2B2',
      light: '#ffffff',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    }
  }
});