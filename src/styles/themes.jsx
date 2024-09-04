import { createTheme } from '@mui/material/styles';
import './fonts.css';

export const theme = createTheme({
   typography: {
      h1: {
      fontFamily: "Streamster, sans-serif",
      },
      h5: {
         fontFamily: "IBM Plex Mono, monospace",
      },
      h6: {
         fontFamily: "IBM Plex Mono, monospace",
      },
   },
   palette: {
      mode: "dark",
      color: {
         primary: "#a9c2f8",
         secondary: "#f0f0f0",
         background: "#121212",
         text: "#f0f0f0",
      },
   }
});
