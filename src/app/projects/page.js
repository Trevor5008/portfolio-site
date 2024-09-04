import { Box, Button, Card, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
   return (
      <Container>
         <Paper
            elevation={3}
            sx={{
               marginY: "2rem",
               marginX: "auto",
               maxWidth: "60vw",
               padding: "2rem",
               borderRadius: "1rem",
            }}
         >
            {/* Portfolio Heading */}
            <Typography
               variant="h4"
               fontStyle="italic"
               textAlign=""
               marginTop={1}
               marginRight="5vw"
            >
               My Portfolio
            </Typography>
            {/* 'DSML project' Card */}
            <Card
               elevation={3}
               sx={{
                  backgroundColor: "black",
                  marginY: "2rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
               }}
            >
               {/* Gif w/ Title, Link */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  marginY={2}
                  padding={2}
                  sx={{
                     borderRadius: "1rem",
                  }}
               >
                  {/* Recommendation System gif demo */}
                  <Image
                     src="/images/recommendation-system-demo.gif"
                     alt="Recommendation System Project"
                     width={300}
                     height={165}
                     style={{
                        borderRadius: ".5rem",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                        marginBottom: "1rem",
                     }}
                  />
                  {/* Project Title */}
                  <Typography variant="h6" color="primary">
                     Recommendation System
                  </Typography>
                  <Typography variant="body1" color="grey" fontStyle="italic">
                     Click &nbsp;
                     <Link
                        target="_blank"
                        href="https://github.com/Trevor5008/DSML"
                     >
                        here
                     </Link>
                     &nbsp; to view the project
                  </Typography>
               </Box>
               {/* Description, Tech */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-around"
                  marginY={2}
                  padding={2}
               >
                  {/* Project Description */}
                  <Typography
                     variant="body1"
                     marginY={2}
                     color="grey"
                     fontStyle="italic"
                  >
                     Data Analysis project that leverages the power of Machine Learning that performs hyperparameter tuning on a Matrix Factorization model.  Predicts a given user&apos;s rating using the optimized model.  This project was built using Jupyter Notebooks and Python during my coursework in my Data Science and Machine Learning certificate course.
                  </Typography>
                  {/* Techonologies row */}
                  <Box
                     display="flex"
                     flexDirection="row"
                     justifyContent="space-around"
                     alignItems="center"
                     width="100%"
                  >
                     <Typography variant="body1" marginY={2} color="primary">
                        Technologies:
                     </Typography>
                     {/* Jupyter Notebooks logo */}
                     <Image
                        src="/images/jupyter.png"
                        alt="Jupyter logo"
                        width={90}
                        height={60}
                     />
                     {/* Python logo */}
                     <Image
                        src="/images/python.png"
                        alt="Python logo"
                        width={50}
                        height={60}
                     />
                     {/* Numpy logo */}
                     <Image
                        src="/images/numpy.png"
                        alt="NumPy logo"
                        width={90}
                        height={50}
                     />
                  </Box>
               </Box>
            </Card>
            {/* 'Money Manager' Card */}
            <Card
               elevation={3}
               sx={{
                  backgroundColor: "black",
                  marginY: "2rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
               }}
            >
               {/* Description, Tech */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-around"
                  marginY={2}
                  padding={2}
               >
                  {/* Project Description */}
                  <Typography
                     variant="body1"
                     marginY={2}
                     color="grey"
                     fontStyle="italic"
                  >
                     Money Management application that allows users to track
                     their personal finances. Users can add, edit, and delete
                     transactions, view their transaction history, and see a
                     visual representation of their spending habits. This
                     project is the second iteration on original where I created
                     a custom calendar component for the main UI.
                  </Typography>
                  {/* Techonologies row */}
                  <Box
                     display="flex"
                     flexDirection="row"
                     justifyContent="space-around"
                     alignItems="center"
                     width="100%"
                  >
                     <Typography
                        variant="body1"
                        marginY={2}
                        marginRight={1}
                        color="primary"
                     >
                        Technologies:
                     </Typography>
                     {/* Nextjs logo */}
                     <Image
                        src="/images/nextjs-icon.png"
                        alt="Nextjs logo"
                        width={50}
                        height={50}
                        style={{ marginLeft: "1rem" }}
                     />
                     {/* React logo */}
                     <Image
                        src="/images/react.png"
                        alt="React logo"
                        width={40}
                        height={40}
                        style={{ marginLeft: "1rem" }}
                     />
                     {/* Material UI logo */}
                     <Image
                        src="/images/material-ui.png"
                        alt="Material UI logo"
                        width={40}
                        height={40}
                        style={{ marginLeft: "1rem" }}
                     />
                     {/* Prisma logo */}
                     <Image
                        src="/images/prisma.svg"
                        alt="Prisma logo"
                        width={60}
                        height={60}
                        style={{ marginLeft: "1rem" }}
                     />
                     {/* MySql logo */}
                     <Image
                        src="/images/mysql.png"
                        alt="MySql logo"
                        width={60}
                        height={60}
                        style={{ marginLeft: "1rem" }}
                     />
                  </Box>
               </Box>
               {/* Gif w/ Title, Link */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  marginY={2}
                  padding={2}
                  sx={{
                     borderRadius: "1rem",
                  }}
               >
                  {/* Money Manager v2 gif demo */}
                  <Image
                     src="/images/money-mgr-v2.gif"
                     alt="Money Manager"
                     width={300}
                     height={165}
                     style={{
                        borderRadius: ".5rem",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                        marginBottom: "1rem",
                     }}
                  />
                  {/* Project Title */}
                  <Typography variant="h6" color="primary">
                     Money Manager v2
                  </Typography>
                  <Typography variant="body1" color="grey" fontStyle="italic">
                     Click &nbsp;
                     <Link
                        target="_blank"
                        href="https://github.com/Trevor5008/money-manager-v2"
                     >
                        here
                     </Link>
                     &nbsp; to view the project
                  </Typography>
               </Box>
            </Card>
            {/* 'Twiddler' Card */}
            <Card
               elevation={3}
               sx={{
                  backgroundColor: "black",
                  marginY: "2rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
               }}
            >
               {/* Gif w/ Title, Link */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  marginY={2}
                  padding={2}
                  sx={{
                     borderRadius: "1rem",
                  }}
               >
                  {/* Twiddler gif demo */}
                  <Image
                     src="/images/twitter-clone.gif"
                     alt="Twitter/X Clone"
                     width={300}
                     height={165}
                     style={{
                        borderRadius: ".5rem",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                        marginBottom: "1rem",
                     }}
                  />
                  {/* Project Title */}
                  <Typography variant="h6" color="primary">
                     Twitter/X CLone
                  </Typography>
                  <Typography variant="body1" color="grey" fontStyle="italic">
                     Click &nbsp;
                     <Link
                        target="_blank"
                        href="https://github.com/Trevor5008/TwitterClone"
                     >
                        here
                     </Link>
                     &nbsp; to view the project
                  </Typography>
               </Box>
               {/* Description, Tech */}
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-around"
                  marginY={2}
                  padding={2}
               >
                  {/* Project Description */}
                  <Typography
                     variant="body1"
                     marginY={2}
                     color="grey"
                     fontStyle="italic"
                  >
                     One of my first projects, a simple front-end application
                     that mimics the functionality of Twitter. Users can post
                     tweets, like tweets, and see their posts updated in a
                     chronological feed of randomized data.
                  </Typography>
                  {/* Techonologies row */}
                  <Box
                     display="flex"
                     flexDirection="row"
                     justifyContent="space-around"
                     alignItems="center"
                     width="100%"
                  >
                     <Typography variant="body1" marginY={2} color="primary">
                        Technologies:
                     </Typography>
                     {/* jQuery logo */}
                     <Image
                        src="/images/jquery.png"
                        alt="JQuery logo"
                        width={50}
                        height={50}
                     />
                     <Image
                        src="/images/js.png"
                        alt="JavaScript logo"
                        width={50}
                        height={50}
                     />
                     {/* HTML logo */}
                     <Image
                        src="/images/html.png"
                        alt="HTML logo"
                        width={50}
                        height={50}
                     />
                     {/* CSS logo */}
                     <Image
                        src="/images/css.png"
                        alt="CSS logo"
                        width={50}
                        height={50}
                     />
                  </Box>
               </Box>
            </Card>
         </Paper>
      </Container>
   );
}
