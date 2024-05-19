// import Image from "next/image";
"use client";
import { css, keyframes } from "@emotion/react";
import {
      Box,
      Button,
      Typography
} from "@mui/material";

const blink = keyframes`
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: #333;
  }
  80% {
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
`;

export default function Home() {
   return (
      <main style={{ 
         background: "#112 url(//images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg) center no-repeat",
         backgroundSize: "cover",
         margin: 0,
         height: "100vh",
       }}>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               height: "100%",
               color: "#fff",
               textShadow: "0 0 10px #000",
            }}
         > 
            <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  background: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
               }}
            >
            <Typography 
               variant="h1"
               // Credit to Nodws on codepen.io for the text-shadow effect
               sx={{
                  textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000",
                  "& span": {
                     animation: `${blink} linear infinite 2s`
                  },
                  "& span:nth-of-type(2)": {
                     animation: `${blink} linear infinite 3s` 
                  },
               }}
            >
               T<span>re</span>vor W<span>er</span>n<span>er</span>
            </Typography>
            <Button 
               variant=""
               sx={{
                  textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000",
                  color: "#fee"
               }}
            >
               Enter
            </Button>
            </Box>
         </Box> 
      </main>
   );
}
