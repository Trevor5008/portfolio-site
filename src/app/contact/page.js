"use client";
import { useState } from "react";
import {
   Box,
   Button,
   Container,
   FormControl,
   FormHelperText,
   Input,
   InputLabel,
   TextField,
   Typography,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");

   function handleFirstNameChange(evt) {
      setFirstName(evt.target.value);
   }

   function handleLastNameChange(evt) {
      setLastName(evt.target.value);
   }

   function handleSubjectLine(evt) {
      setSubject(evt.target.value);
   }

   function handleMessageChange(evt) {
      setMessage(evt.target.value);
   }

   function handleSubmit(evt) {
      evt.preventDefault();
      console.log("First Name: ", firstName);
      console.log("Last Name: ", lastName);
      console.log("Subject: ", subject);
      console.log("Message: ", message);
   }  

   return (
      <Container>
      {/* Contact Form */}
      <Typography 
         variant="h4"
         fontStyle="italic"
         margin="10vh 0 0 20vw"
      >
         Let&apos;s connect
      </Typography>
      <form 
         action="#" 
         onSubmit={handleSubmit}
      >
         <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="50vw"
            height="50vh"
            margin="auto"
            marginTop={4}
         >
            <Box 
               display="flex"
               margin="1rem 0"
               fullWidth
            >
               {/* First Name */}
               <FormControl 
                  id="first-name-control"
                  sx={{
                     padding: "0 1rem 0 0",
                  }}
               >
                  <TextField
                     id="first-name"
                     aria-describedby="first-name"
                     label="First Name"
                     variant="filled"
                     onChange={handleFirstNameChange}
                     value={firstName}
                     required={true}
                  />
               </FormControl>
               {/* Last Name */}
               <FormControl id="last-name-control">
                  <TextField
                     id="last-name"
                     aria-describedby="last-name"
                     label="Last Name"
                     variant="filled"
                     onChange={handleLastNameChange}
                     value={lastName}
                     required={true}
                  />
               </FormControl>
            </Box>
            {/* Subject Line */}
            <FormControl 
               id="subject-line-control"
               sx={{
                  margin: "1rem 0"
               }}
               fullWidth
            >
               <TextField
                  id="subject-line"
                  aria-describedby="subject-line"
                  label="Subject"
                  onChange={handleSubjectLine}
                  variant="filled"
                  value={subject}
                  required={true}
               />
               <FormHelperText id="subject-line-helper-text">
                  Enter the subject of your message
               </FormHelperText>
            </FormControl>
            {/* Message Body */}
            <FormControl 
               id="message-body-control"
               sx={{
                  margin: "1rem 0"
               }}
               fullWidth
            >
               <TextField
                  id="message-body"
                  label="Message"
                  aria-describedby="message-body"
                  variant="filled"
                  onChange={handleMessageChange}
                  multiline
                  rows={4}
                  value={message}
                  required={true}
               />
               <FormHelperText id="message-body-helper-text">
                  Enter your message
               </FormHelperText>
            </FormControl>
            <Button 
               type="submit"
               variant="outlined"
               sx={{
                  margin: "1rem 0",
                  padding: "0.75rem"
               }}
               fullWidth
            >
               <SendIcon 
                  fontSize="small"
                  sx={{
                     marginRight: "0.5rem"
                  }}
               />
               Send Email
            </Button>
         </Box>
      </form>
      </Container>
   );
}
