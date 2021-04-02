import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

export default function Protfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/5f/fd/59/natural-beauty.jpg" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/5f/fd/59/natural-beauty.jpg" alt=""/>
       </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src="https://image.shutterstock.com/image-photo/environment-conservation-concept-close-glass-260nw-633332597.jpg" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src="https://image.shutterstock.com/image-photo/environment-conservation-concept-close-glass-260nw-633332597.jpg" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src="https://www.eartheclipse.com/wp-content/uploads/2016/08/lake-in-Guatemala.jpg" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <img src="https://www.eartheclipse.com/wp-content/uploads/2016/08/lake-in-Guatemala.jpg" alt=""/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
