import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';


export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3080',
      dark: '#0C0E26',
      light: yellow[500],
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