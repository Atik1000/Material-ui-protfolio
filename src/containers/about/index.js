import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import LinearProgress from "@material-ui/core/LinearProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const About = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ height: "200px" }}></div>
      <Grid container>
        <Grid item md={6}>
        <img style={{height:'400px',width:'600px'}} src="https://mvcmagazine.com/wp-content/uploads/2021/02/mvccopdavid.jpg" alt=""/>

        </Grid>
        <Grid item md={6}>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="About Me" {...a11yProps(0)} />
                <Tab label="Skills" {...a11yProps(1)} />
                <Tab label="Experience" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Typography variant="h4">My Story</Typography>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <Typography variant='h6'>I Do Web Design & Developement since I <br/> was 18 Years Old</Typography>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant="h4">Skill</Typography>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <LinearProgress value={80} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h5">Art & Creative Director</Typography>
              <small style={{ color: "blue" }}>19/20-present</small>
              <p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>
                   Lorem ipsum dolor sit amet consectetur adipisicing.
                  </li>
                </ul>
              </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h5">JS Developer</Typography>
              <small style={{ color: "blue" }}>19/20-present</small>
              <p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>
                   Lorem ipsum dolor sit amet consectetur adipisicing.
                  </li>
                </ul>
              </p>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
