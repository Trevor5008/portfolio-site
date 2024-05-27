"use client";
import { Box, Typography } from "@mui/material";
import { theme } from "@/styles/themes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
   const currentPath = usePathname();
   const navLinks = [
      { title: "About", path: "/about" },
      { title: "Projects", path: "/projects" },
      { title: "Contact", path: "/contact" },
   ];

   // TODO: Add a decoration for current page link
   return (
      <Box
         display="flex"
         paddingY={1}
         alignItems="center"
         justifyContent="space-between"
         margin={1}
         borderBottom={".5px solid grey"}
      >
         <Box display="flex">
            <Link href="/" style={{ color: theme.palette.color.primary }}>
               <ArrowBackIcon />
            </Link>
         </Box>
         {navLinks.map((link, idx) => (
            // About, Projects, Contact links
            <NavLink
               key={idx}
               title={link.title}
               path={link.path}
               currentPath={currentPath}
            />
         ))}
      </Box>
   );
}
