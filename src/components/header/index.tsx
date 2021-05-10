import React, { useCallback } from "react";

import { AppBar, Toolbar } from "@material-ui/core";
import { Grid, Button } from "@material-ui/core";

const Header = ({ props }: any) => {
  const handleLogout = useCallback(() => {}, []);
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>opa</Grid>
          <Grid item>opa</Grid>
          <Grid item>
            <Button onClick={() => console.log("Deu")}>Logout</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
