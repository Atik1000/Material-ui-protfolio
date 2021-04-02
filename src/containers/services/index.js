import { Container, Typography } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



const index = () => {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      
  return (
    <Container>
      <p style={{ color: "blue", textAlign: "center" }}>
        <small>Services</small>
      </p>
      <Typography
        style={{ textAlign: "center", fontWeight: "bold" }}
        variant="h4"
      >
        This is My Expertise, The <br /> Services I'll Provide My Clients
      </Typography>
    </Container>
  );
};

export default index;
