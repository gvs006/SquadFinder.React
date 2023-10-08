import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';


export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3080',
      dark: '#A1A2B2',
      light: yellow[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: "#ffffff",
    }
  }
});