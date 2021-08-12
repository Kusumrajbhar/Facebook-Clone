import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MenuIcon from "@material-ui/icons/Menu";
import ChatIcon from "@material-ui/icons/Chat";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="facebook logo"
              height="50px"
              width="70px"
            />
          </Typography>
          <InputBase
            className={classes.searchTextField}
            placeholder="Search Facebook"
            size="large"
            startAdornment={<SearchIcon color="action" />}
          />
          <Typography className={classes.centerHeader}>
            <a href="/home">
              <HomeIcon color="action" className={classes.icons} />
            </a>
            <a href="/watch">
              <OndemandVideoIcon color="action" className={classes.icons} />
            </a>
            <a href="/marketPlace">
              <StorefrontIcon color="action" className={classes.icons} />
            </a>
            <a href="/group">
              <PeopleAltIcon color="action" className={classes.icons} />
            </a>
            <a href="gaming">
              <SportsEsportsIcon color="action" className={classes.icons} />
            </a>
          </Typography>
          <Typography style={{ display: "flex" }}>
            <Typography style={{ display: "flex" }}>
              <Avatar>K</Avatar>
              <span
                style={{
                  color: "black",
                  marginRight: "12px",
                  marginTop: "8px",
                }}
              >
                <b>Kusum</b>
              </span>
            </Typography>
            <Typography className={classes.headerRight}>
              <a href="/menu">
                <MenuIcon className={classes.circularIcons} />
              </a>
              <a href="/messenger">
                <ChatIcon className={classes.circularIcons} />
              </a>
              <a href="/">
                <NotificationsIcon className={classes.circularIcons} />
              </a>
              <a href="/">
                <ArrowDropDownIcon className={classes.circularIcons} />
              </a>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
