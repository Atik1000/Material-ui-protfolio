import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Home = () => {
  return (
    <Container>
      <div style={{ height: "200px" }}></div>

      <Grid container>
        <Grid item container md={6}>
          <Grid item md={12}>
            <Typography variant="h4">I am David Beckham </Typography>
            <Typography variant="h4">A Footboller</Typography>

            <Typography variant="p">
            <p></p>
            </Typography>
          </Grid>

          <Grid item md={12} style={{ marginTop: "15px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "5px", padding: "10px" }}
            >
              Hire Me
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "5px", padding: "10px" }}
            >
              View Porfolio
            </Button>
          </Grid>
          <Grid item md={12} style={{ marginTop: "5px" }}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Grid>
        </Grid>
        <img
          src="http://starsunfolded.com/wp-content/uploads/2016/06/David-Beckham.jpg"
          alt=""
        />
      </Grid>
    </Container>
  );
};

export default Home;
