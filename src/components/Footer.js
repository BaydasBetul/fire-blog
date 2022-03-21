// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "} {new Date().getFullYear()}
//     </Typography>
//   );
// }

// function Footer() {
//   return (
//     <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="subtitle2"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           <Link color="inherit" href="https://github.com/BaydasBetul">
//             <GitHubIcon />
//           </Link>
//           <Link color="inherit" href="">
//             <TwitterIcon />
//           </Link>
//           <Link color="inherit" href="">
//             <FacebookIcon />
//           </Link>
//           <Link color="inherit" href="">
//             <InstagramIcon />
//           </Link>
//         </Typography>
//         <Copyright />
//       </Container>
//     </Box>
//   );
// }

// export default Footer;

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
//import { grey } from "@mui/material/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "} {new Date().getFullYear()}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[500],
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="subtitle2"
            align="center"
            color="text.secondary"
            component="p"
          >
            <Link color="inherit" href="https://github.com/BaydasBetul">
              <GitHubIcon />
            </Link>
            <Link color="inherit" href="">
              <TwitterIcon />
            </Link>
            <Link color="inherit" href="">
              <FacebookIcon />
            </Link>
            <Link color="inherit" href="">
              <InstagramIcon />
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
