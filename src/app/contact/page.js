"use client";
import {
   Container,
} from "@mui/material";
import Image from "next/image";
import EmailForm from "../components/EmailForm";

export default function Contact() {
   return (
      <Container>
         
         {/* Email Contact Form */}
         <EmailForm />
      </Container>
   );
}
