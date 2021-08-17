import React, { useState } from "react";
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
import MenuModal from "../modals/MenuModal";
import MessengerModal from "../modals/MessengerModal";
import NotificationModal from "../modals/NotificationModal";
import AccountModal from "../modals/AccountModal";

import { Tabs, Tab } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const [messenger, setMessenger] = useState(false);
  const [notification, setNotification] = useState(false);
  const [account, setAccount] = useState(false);
  const [active, setActive] = useState(false);
  const closeMenuHandler = () => {
    setMenu(false);
  };

  const closeMessengerHandler = () => {
    setMessenger(false);
  };

  const closeNotificationHandler = () => {
    setNotification(false);
  };

  const closeAccountHandler = () => {
    setAccount(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.header}>
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
            {/* <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              iconColor="primary"
              centered
            >
              <Tooltip title="Home">
                <Tab
                  icon={<HomeIcon color="action" className={classes.icons} />}
                />
              </Tooltip>

              <Tooltip title="Watch">
                <Tab
                  icon={
                    <OndemandVideoIcon
                      color="action"
                      className={classes.icons}
                    />
                  }
                />
              </Tooltip>

              <Tooltip title="MarketPlace">
                <Tab
                  icon={
                    <StorefrontIcon color="action" className={classes.icons} />
                  }
                />
              </Tooltip>

              <Tooltip title="Groups">
                <Tab
                  icon={
                    <PeopleAltIcon color="action" className={classes.icons} />
                  }
                />
              </Tooltip>

              <Tooltip title="Gaming">
                <Tab
                  icon={
                    <SportsEsportsIcon
                      color="action"
                      className={classes.icons}
                    />
                  }
                />
              </Tooltip>
            </Tabs> */}

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
              <span onClick={() => setMenu(true)}>
                <Tooltip title="Menu">
                  <MenuIcon className={classes.circularIcons} />
                </Tooltip>
              </span>
              <MenuModal open={menu} onClose={closeMenuHandler} />

              <span onClick={() => setMessenger(true)}>
                <Tooltip title="Messenger">
                  <ChatIcon className={classes.circularIcons} />
                </Tooltip>
              </span>
              <MessengerModal
                open={messenger}
                onClose={closeMessengerHandler}
              />

              <span onClick={() => setNotification(true)}>
                <Tooltip title="Notifications">
                  <NotificationsIcon className={classes.circularIcons} />
                </Tooltip>
              </span>
              <NotificationModal
                open={notification}
                onClose={closeNotificationHandler}
              />

              <span onClick={() => setAccount(true)}>
                <Tooltip title="Account">
                  <ArrowDropDownIcon className={classes.circularIcons} />
                </Tooltip>
              </span>
              <AccountModal open={account} onClose={closeAccountHandler} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
