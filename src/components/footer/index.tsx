import React from "react";
import {
  AppBar,
  Button,
  BottomNavigation,
  Toolbar,
  Container,
  Typography,
} from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      style={{ bottom: 0, position: "absolute", minHeight: "8vh" }}
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2019 Gistia
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
