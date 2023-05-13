import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Container, colors, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import vector from "../assets/VectorNav.png";

export default function Navbar() {
  return (
      <AppBar position="relative">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#e5e5e5",
            padding: "2rem",
          }}
        >
          <Box
            display={"flex"}
            mx={1}
            color={"#331B3B"}
            fontFamily={"Playfair Display"}
          >
            <Link href="/" color="inherit" margin={"inherit"} underline="none">
              <Typography>Home</Typography>
            </Link>
            <Link
              href="/about"
              color="inherit"
              margin={"inherit"}
              underline="none"
            >
              <Typography>About us</Typography>
            </Link>
            <Link
              href="/services"
              color="inherit"
              margin={"inherit"}
              underline="none"
            >
              <Typography>Services</Typography>
            </Link>
            <Link
              href="/contact"
              color="inherit"
              margin={"inherit"}
              underline="none"
            >
              <Typography>Contact us</Typography>
            </Link>
          </Box>
          <Box>
            <Link underline="none">
              <Typography
                variant="h4"
                color={"#331B3B"}
                fontFamily={"Playfair Display"}
                fontStyle={"italic"}
              >
                Dream Agency
              </Typography>
            </Link>
          </Box>
          <Box color={"#331B3B"}>
            <IconButton>
              <FacebookIcon color="inherit" fontSize="large" />
            </IconButton>
            <IconButton sx={{ zIndex: "1" }}>
              <LinkedinIcon color="inherit" fontSize="large" />
            </IconButton>
            <IconButton sx={{ zIndex: "1" }}>
              <InstagramIcon color="inherit" fontSize="large" />
            </IconButton>
          </Box>
            <Box>
              <img
                src={vector}
                alt="logo"
                style={{ position: "absolute", top: "0", right: "10px" }}
              />
            </Box>
        </Toolbar>
      </AppBar>
  );
}
