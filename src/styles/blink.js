// import Image from "next/image";
"use client";
import { keyframes } from "@emotion/react";

export const blink = keyframes`
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
