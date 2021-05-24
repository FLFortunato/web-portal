import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/token.service";
import Logo from "../../assets/logo.png";

const Header = ({ props }: any) => {
  const history = useHistory();
  const handleLogout = useCallback(async () => {
    const token = await localStorage.getItem("@token");

    if (token) {
      await localStorage.removeItem("@token");
      await TokenService().logout(token);
      history.push("/login");
    }
  }, [history]);

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <img src={Logo} alt="logo" style={{ width: 80, height: 80 }} />
            </Grid>
            <Grid item lg={8}>
              <Grid container justify="space-around">
                <Button color="secondary" variant="text">
                  Home
                </Button>
                <Button color="secondary" variant="text">
                  About
                </Button>
                <Button color="secondary" variant="text">
                  Contact
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
