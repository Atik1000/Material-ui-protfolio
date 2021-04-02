import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ marginTop: "10%", marginBottom: "10%" }}>
        <p style={{ color: "blue", textAlign: "center" }}>
          <small>Services</small>
        </p>
        <Typography
          style={{ textAlign: "center", fontWeight: "bold" }}
          variant="h4"
        >
          This is My Expertise, The <br /> Services I'll Provide My Clients
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography
              style={{ textAlign: "center", fontWeight: "bold" }}
              variant="h6"
            >
              UI & UX Design
            </Typography>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              explicabo et nostrum fugiat labore, laboriosam sunt vitae,
              consequatur suscipit nemo voluptatum natus temporibus cupiditate
              deserunt eum maiores qui. Veniam, nulla..
            </p>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              read more
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography
              style={{ textAlign: "center", fontWeight: "bold" }}
              variant="h6"
            >
              Software Engineer
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              minima eos voluptatibus vitae iure expedita facere, quo at
              deleniti unde, possimus ipsam nulla consectetur placeat alias enim
              voluptates, animi ex?
            </p>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              read more
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography
              style={{ textAlign: "center", fontWeight: "bold" }}
              variant="h6"
            >
              Web Design
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias id quasi neque amet in, ex perspiciatis odio unde! Harum
              debitis accusamus voluptatibus nesciunt aliquam magni doloremque
              expedita dolorum consequuntur? Blanditiis!
            </p>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              read more
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
