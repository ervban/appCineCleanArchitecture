import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f07a00',
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      default: '#ffe3e3',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
