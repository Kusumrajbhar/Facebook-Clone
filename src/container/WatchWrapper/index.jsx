import { Grid, InputBase, Paper } from "@material-ui/core";
import React from "react";
import { RiSettings5Fill, RiLiveFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { BiMovie } from "react-icons/bi";
import { HiSave } from "react-icons/hi";

import useStyles from "./Style";

function WatchWrapper() {
  const classes = useStyles();
  return (
    <div className={classes.mainWatch}>
      <Grid container>
        <Grid item lg={2}>
          <Paper className="paddingAround">
            <div>
              <div className={classes.sideBarTop}>
                <span className={classes.sideBarTitle}>Watch</span>
                <span>
                  <RiSettings5Fill className={classes.topIconSize} />
                </span>
              </div>
              <InputBase
                className="inputFieldStyle"
                startAdornment={<SearchIcon color="action" />}
                placeholder="Search Videos"
              />
              <hr />
            </div>
            <div>
              <p className="flexWithCenter">
                <MdOndemandVideo className={classes.topIconSize} />
                <span>
                  <b>Home</b>
                </span>
              </p>
              <p className="flexWithCenter">
                <RiLiveFill className={classes.topIconSize} />
                <span>
                  <b>Live</b>
                </span>
              </p>
              <p className="flexWithCenter">
                <BiMovie className={classes.topIconSize} />
                <span>
                  <b>Shows</b>
                </span>
              </p>
              <p className="flexWithCenter">
                <HiSave className={classes.topIconSize} />
                <span>
                  <b>Saved Videos</b>
                </span>
              </p>
            </div>
            <hr />
            <h3 className={classes.marginRightAuto}>Your WatchList</h3>
          </Paper>
        </Grid>
        <Grid item lg={10}></Grid>
      </Grid>
    </div>
  );
}

export default WatchWrapper;
