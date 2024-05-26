"use client";
import { 
   Box,
   Button,
   Typography
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

export default function Header() {
   const router = useRouter();
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
         <Box
            display="flex"
         >
            <Button onClick={() => router.push("/")}>
               <ArrowBackIcon />
            </Button>
         </Box>
         <Box marginRight={6}>
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
               onClick={() => router.push("/about")}
            >
               About
            </Typography>
         </Box>
         <Box marginRight={6}>
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
               onClick={() => router.push("/projects")}
            >
               Projects
            </Typography>
         </Box>
         <Box marginRight={6}>
            <Typography
               variant="h6"
               fontWeight={100}
               sx={{
                  cursor: "pointer",
                  "&:hover": {
                     fontWeight: 600,
                  },
               }}
               onClick={() => router.push("/contact")}
            >
               Contact
            </Typography>
         </Box>
      </Box>
   );
}
