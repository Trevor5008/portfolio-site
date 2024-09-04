"use client";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Box,
   Button,
   Typography
} from "@mui/material";
import Image from "next/image";

export default function FormConfirm({ 
   handleConfirm, 
   sendConfirm, 
   setSendConfirm
}) {
  return (
     <Dialog
        open={sendConfirm}
        onClose={() => setSendConfirm(false)}
        aria-labelledby="email-send-dialog-title"
        aria-describedby="email-send-dialog-description"
     >
      <Box 
         display="flex"
         justifyContent="left"
         alignItems="center"
         >
        <DialogTitle 
            id="email-send-dialog-title"
            sx={{ marginRight: "1rem" }}
         >
           <Typography 
               variant="h5"
            >
            {"Email Sent"}
            </Typography>
        </DialogTitle>
        <Image
           src="/images/paper-plane.gif"
           alt="Email sent"
           width={50}
           height={50}
         />
        </Box>
        <DialogContent>
           <DialogContentText id="email-send-dialog-description">
              Looking forward to reading your message!
              <br/>
              <small>* Please allow 1-2 days for me to respond</small>
           </DialogContentText>
        </DialogContent>
        <DialogActions>
           <Button onClick={handleConfirm} autoFocus>
              Ok
           </Button>
        </DialogActions>
     </Dialog>
  );
}
