import { Box, Typography } from "@mui/material";
import { theme } from "@/styles/themes";
import Link from "next/link";

export default function NavLink({ idx, title, path, currentPath }) {
   return (
      <Box 
         key={idx} 
         marginRight={6}
      >
         <Link
            href={path}
            style={{
               textDecoration: "none",
               color: theme.palette.color.text,
            }}
         >
            <Typography
               variant="h6"
               fontWeight={currentPath == path ? 600 : 100}
               color={currentPath == path ? "primary" : "text"}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
            >
               {title}
            </Typography>
         </Link>
      </Box>
   );
}
