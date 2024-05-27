"use client";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import "../../styles/fonts.css";

export default function Home() {
   return (
      <Container
         sx={{
            marginX: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
         }}
      >
         {/* Pic & Welcome Section | Side Panel */}
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
            width="25vw"
         >
            {/* Profile Pic */}
            <Image
               id="profile-photo"
               src="/images/profile_photo.jpg"
               alt="My Profile Picture"
               width={200}
               height={200}
               style={{
                  borderRadius: "50%",
                  border: "1px solid black",
                  boxShadow: "0 0 10px 0 black",
               }}
            />
            {/* Bio Description */}
            <Box
               display="flex"
               flexDirection="column"
               width="20vw"
               marginY={3}
            >
               {/* Bio title */}
               <Typography 
                  variant="h6"
                  color="grey"
                  fontStyle={"italic"}
               >
                  Welcome to my site... 👋 
               </Typography>
               <hr color="black"/>
               {/* Bio description */}
               <Typography 
                  variant="body1"
                  color="grey"
                  fontStyle={"italic"} 
               >
                  I&apos;m a Full Stack Developer based in Miami, FL with a passion for creating web applications. After gaining a certificate in Data Science and Machine Learining this past year, I am now looking to merge my knowledge and skills to explore opportunities in Artificial Intelligence.  I&apos;m currently studying Computer Science at Florida International University and am looking for to gain experience on larger projects. Thanks for stopping by!
               </Typography>
            </Box>
         </Box>
         {/* Video Resume from YouTube */}
         <Box>
            <iframe
               id="my-video-resume"
               width="700"
               height="400"
               type="text/html"
               src="https://www.youtube.com/embed/E1t32p-gE-U"
               title="YouTube video player"
               frameborder="0"
               controls="1"
               autoplay={1}
               allowFullScreen="1"
               cc_load_policy="1"
               style={{
                  borderRadius: "10px",
                  margin: "auto",
               }}
            ></iframe>
         </Box>
      </Container>
   );
}
