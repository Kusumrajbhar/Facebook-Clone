import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./Styles";
import ProfileSideBar from "./ProfileSideBar";
import ContactSideBar from "./ContactSideBar";
import PostsAndStories from "./PostsAndStories";

function HomeWrapper() {
  const classes = useStyles();

  return (
    <Grid container className="main">
      <Grid item lg={3}>
        <ProfileSideBar />
      </Grid>
      <Grid item lg={6} className={classes.midFlow}>
        <PostsAndStories />
      </Grid>
      <Grid item lg={3} className={classes.flowControl}>
        <ContactSideBar />
      </Grid>
    </Grid>
  );
}

export default HomeWrapper;
