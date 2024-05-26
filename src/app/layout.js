"use client"
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/themes";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <title>Trevor Werner</title>
         </head>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <body>
               {children}
            </body>
         </ThemeProvider>
      </html>
   );
}
