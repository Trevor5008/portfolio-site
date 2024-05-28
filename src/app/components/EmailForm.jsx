"use client";
import { useState } from "react";
import {
   Box,
   Button,
   FormControl,
   FormHelperText,
   TextField,
   Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormConfirm from "./FormConfirm";

export default function EmailForm() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   // Confirmation dialog modal
   const [sendConfirm, setSendConfirm] = useState(false);

   function handleFirstNameChange(evt) {
      setFirstName(evt.target.value);
   }

   function handleLastNameChange(evt) {
      setLastName(evt.target.value);
   }

   function handleEmailChange(evt) {
      setEmail(evt.target.value);
   }

   function handleSubjectLine(evt) {
      setSubject(evt.target.value);
   }

   function handleMessageChange(evt) {
      setMessage(evt.target.value);
   }

   // Closes the confirmation dialog, resets the form
   function handleConfirm() {
      // Reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSendConfirm(false);
   }

   // Sends the form data to the server
   function handleSubmit(evt) {
      evt.preventDefault();
      fetch("/api/contact-form", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            firstName,
            lastName,
            email,
            subject,
            message,
         }),
      }).then((res) => {
         if (res.status == 200) {
            setSendConfirm(true);
         }
      });
   }

   return (
      <form action="#" onSubmit={handleSubmit}>
         <Box
            display="flex"
            flexDirection="column"
            alignItems="space-between"
            width="40vw"
            height="50vh"
            margin="auto"
            marginTop={4}
         >
            <Typography
               variant="h4"
               fontStyle="italic"
               textAlign=""
               marginY={4}
               marginRight="5vw"
            >
               Let&apos;s connect:
            </Typography>
            {/* Confirmation send modal - > appears after submission */}
            <FormConfirm
               handleConfirm={handleConfirm}
               sendConfirm={sendConfirm}
               setSendConfirm={setSendConfirm}
            />
            {/* First and Last Name fields */}
            <Box 
               display="flex" 
               margin="1rem 0" 
               fullWidth
            >
               {/* First Name */}
               <FormControl
                  id="first-name-control"
                  sx={{
                     margin: "0 1rem 0 0",
                  }}
                  fullWidth
               >
                  {/* First Name field */}
                  <TextField
                     id="first-name"
                     aria-describedby="first-name"
                     label="First Name"
                     type="text"
                     variant="filled"
                     onChange={handleFirstNameChange}
                     value={firstName}
                     required={true}
                     fullWidth
                  />
               </FormControl>
               {/* Last Name */}
               <FormControl id="last-name-control" fullWidth>
                  <TextField
                     id="last-name"
                     aria-describedby="last-name"
                     label="Last Name"
                     type="text"
                     variant="filled"
                     onChange={handleLastNameChange}
                     value={lastName}
                     required={true}
                     fullWidth
                  />
               </FormControl>
            </Box>
            {/* Email */}
            <FormControl 
               id="email-control" 
               sx={{
                  margin: ".75rem 0",
               }}
               fullWidth
            >
               <TextField
                  id="email"
                  aria-describedby="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  onChange={handleEmailChange}
                  value={email}
                  required={true}
                  fullWidth
               />
            </FormControl>
            {/* Subject Line */}
            <FormControl
               id="subject-line-control"
               sx={{
                  margin: "1rem 0",
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
                  margin: "1rem 0",
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
                  margin: ".25rem 0",
                  padding: "0.75rem",
               }}
               fullWidth
            >
               <SendIcon
                  fontSize="small"
                  sx={{
                     marginRight: "0.5rem",
                  }}
               />
               Send Email
            </Button>
         </Box>
      </form>
   );
}
