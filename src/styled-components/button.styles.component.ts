import { red } from '@mui/material/colors';
import { createTheme, ThemeProvider,darken } from '@mui/material/styles';

export const colorRojo = red[500];

export const theme = createTheme({
    palette: {
      primary: {
        main: colorRojo, // Tu color rojo personalizado
        dark: darken(colorRojo, 0.2), // Oscurece el color rojo para el estado de hover

      },
      // Puedes definir otros colores aquí
    },
  });