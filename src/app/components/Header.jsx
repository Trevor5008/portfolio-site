"use client";
import { useState } from "react";
import { Typography, Box } from "@mui/material";

export default function Header() {
   // TODO: Add a decoration for current page link
   return (
      <Box
         display="flex"
         paddingY={1}
         alignItems="center"
         justifyContent="right"
         margin={1}
         borderBottom={".5px solid grey"}
      >
         <Box
            marginRight={6}
         >
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
            >
               About
            </Typography>
         </Box>
         <Box marginRight={6}>
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
            >
               Contact
            </Typography>
         </Box>
         <Box marginRight={6}>
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
            >
               Projects
            </Typography>
         </Box>
      </Box>
   );
}
