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
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <div className={classes.flex}>
            <div>
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="facebook logo"
                height="45px"
                width="70px"
              />
            </div>
            <div>
              <InputBase
                className={classes.searchTextField}
                placeholder="Search Facebook"
                size="large"
                startAdornment={<SearchIcon color="action" />}
              />
            </div>
          </div>

          <div className={classes.centerHeader}>
            <a href="/">
              <Tooltip title="Home">
                <HomeIcon color="action" className={classes.icons} />
              </Tooltip>
            </a>
            <a href="/watch">
              <Tooltip title="Watch">
                <OndemandVideoIcon color="action" className={classes.icons} />
              </Tooltip>
            </a>
            <a href="/marketPlace">
              <Tooltip title="MarketPlace">
                <StorefrontIcon color="action" className={classes.icons} />
              </Tooltip>
            </a>
            <a href="/group">
              <Tooltip title="Groups">
                <PeopleAltIcon color="action" className={classes.icons} />
              </Tooltip>
            </a>
            <a href="gaming">
              <Tooltip title="Gaming">
                <SportsEsportsIcon color="action" className={classes.icons} />
              </Tooltip>
            </a>
          </div>

          <div className={classes.rightContent}>
            <div className={classes.flex}>
              <Avatar>K</Avatar>
              <span className={classes.name}>
                <b>Kusum</b>
              </span>
            </div>
            <div className={classes.headerRight}>
              <a href="/menu">
                <Tooltip title="Menu">
                  <MenuIcon className={classes.circularIcons} />
                </Tooltip>
              </a>
              <a href="/messenger">
                <Tooltip title="Messenger">
                  <ChatIcon className={classes.circularIcons} />
                </Tooltip>
              </a>
              <a href="/Notification">
                <Tooltip title="Notifications">
                  <NotificationsIcon className={classes.circularIcons} />
                </Tooltip>
              </a>
              <a href="/Account">
                <Tooltip title="Account">
                  <ArrowDropDownIcon className={classes.circularIcons} />
                </Tooltip>
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
