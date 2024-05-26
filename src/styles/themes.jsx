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
   }
});
