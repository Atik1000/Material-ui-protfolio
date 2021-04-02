import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  const routePage = (url) => {
    history.push(url);
  };
  return (
    <>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Grid item >
              <MenuItem onClick={() => routePage("/")} >Kn.Ford</MenuItem>
            </Grid>

          </Grid>

          <Grid container justify="flex-end">
     
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> Home</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/about")}> About</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/services")}>
                Services
              </MenuItem>
              
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/protfolio")}>
                Protfolio
              </MenuItem>
              
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/pricing")}>
              Pricing
              </MenuItem>
              
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/blog")}>
                Blog
              </MenuItem>
              
            </Grid>
            
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;


