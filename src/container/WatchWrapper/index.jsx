import React from "react";
import { Grid } from "@material-ui/core";

import watchStyles from "./Style";
import SideBarWatch from "./SideBarWatch";
import WatchMainContent from "./WatchMainContent";

function WatchWrapper() {
  const classes = watchStyles();

  return (
    <div>
      <Grid container>
        <Grid item lg={3} sm={12} md={3}>
          <SideBarWatch />
        </Grid>

        <Grid item className={classes.centralContent} lg={9} sm={12} md={9}>
          <WatchMainContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default WatchWrapper;
