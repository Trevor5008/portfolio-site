"use client";
import {
   Box,
   Button,
   Typography
} from "@mui/material";
import { blink } from "@/styles/blink";

export default function Welcome({ passWelcomeView }) {
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
                  justifyContent: "space-evenly",
                  padding: "1rem",
                  height: "35vh",
               }}
            >
            <Typography 
               variant="h1"
               // Credit to Nodws on codepen.io for the text-shadow effect
               fontFamily={"Streamster, sans-serif"}
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
               onClick={() => {
                  passWelcomeView();
               }}
            >
               Enter
            </Button>
            </Box>
         </Box> 
      </main>
   )
}
