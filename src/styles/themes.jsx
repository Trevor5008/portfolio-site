import { createTheme } from '@mui/material/styles';
import './fonts.css';

export const theme = createTheme({
   typography: {
      h1: {
      fontFamily: "Streamster, sans-serif",
      },
      h2: {
         fontFamily: "Major Mono Display, monospace",
      },
      h6: {
         fontFamily: "IBM Plex Mono, monospace",
      },
   },
   palette: {
      mode: "dark",
   }
});
