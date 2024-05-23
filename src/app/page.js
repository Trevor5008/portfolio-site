// import Image from "next/image";
"use client";
import { useState } from "react";
import {
      Box,
      Button,
      Typography
} from "@mui/material";
import '../styles/fonts.css';
// blink animation
import Welcome from "./components/Welcome";
import Header from "./components/Header";

export default function Home() {
   const [welcomeView, setWelcomeView] = useState(true);

   function handleWelcomeView() {
      setWelcomeView(false);
   }

   return welcomeView ? (
      <Welcome handleWelcomeView={handleWelcomeView}/>
   ) : (
      <Header />
   );
}
