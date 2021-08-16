import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import { homeLeftData, contact } from "../../datas/Home/HomeData";

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.page}>
      <Grid item lg={3}>
        <Paper className={classes.leftPaper} elevation={0}>
          <div>
            <div className={classes.userInfo}>
              <span className="">
                <Avatar>K</Avatar>
              </span>
              <p>Kusum</p>
            </div>

            {homeLeftData?.map((data, index) => (
              <ListItem key={index} button>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={<b>{data.label}</b>} />
              </ListItem>
            ))}
          </div>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper></Paper>
      </Grid>
      <Grid item lg={3}>
        <Paper className={classes.page} elevation={0}>
          <h3>Your Pages</h3>
          <hr />
          <h3>Contacts</h3>
          {contact?.map((data, index) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <span>{data.icon}</span>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                {data.name}
              </p>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
