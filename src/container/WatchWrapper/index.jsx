import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { RiSettings5Fill, RiLiveFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { BiMovie } from "react-icons/bi";
import { HiSave } from "react-icons/hi";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import watchStyles from "./Style";
import { sideBarLower, sideBarUpperHalf } from "../../datas/watch/WatchData";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";

function WatchWrapper() {
  const classes = watchStyles();
  const globalClass = globalStyle();
  return (
    <div>
      <Grid container>
        <Grid item lg={3}>
          <Paper className={classes.watchSideBar}>
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
            </div>
            <hr />
            <div className={globalClass.scrolling}>
              <div>
                {sideBarUpperHalf.map((data, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <span className={classes.topIconSize}>{data.icon}</span>
                    </ListItemIcon>
                    <ListItemText>
                      <b>{data.text}</b>
                    </ListItemText>
                  </ListItem>
                ))}
              </div>
              <hr />
              <h3 className={classes.marginRightAuto}>Your WatchList</h3>

              {sideBarLower.map((data, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>
                    <Avatar>{data.image}</Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <b>{data.text}</b>
                  </ListItemText>
                </ListItem>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item className={classes.centralContent} lg={9}>
          <Paper className={classes.cardMain}>
            <div className={classes.cardHeader}>
              <span className={globalClass.flexCenter}>
                <span className={globalClass.marginRightTen}>
                  <Avatar>R</Avatar>
                </span>
                <span className={globalClass.lineHeightOne}>
                  <h3>Heading</h3>
                  <p>Paragraph</p>
                </span>
              </span>
              <span>
                <MoreHorizIcon />
              </span>
            </div>
            <h3>Info</h3>
            <div>
              <span>hello</span>
            </div>
            {/* <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
              action={
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WatchWrapper;
