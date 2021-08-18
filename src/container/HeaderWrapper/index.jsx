import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { CgMenuGridO } from "react-icons/cg";

import useStyles from "./styles";
import MenuModal from "../../component/modals/MenuModal";
import MessengerModal from "../../component/modals/MessengerModal";
import NotificationModal from "../../component/modals/NotificationModal";
import AccountModal from "../../component/modals/AccountModal";
import { mainHeaderData } from "../../datas/header/HeaderData";
import FacebookLogo from "../../Assets/Images/FacebookLogo.png";

const HeaderWrapper = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);
  const [messenger, setMessenger] = useState(false);
  const [notification, setNotification] = useState(false);
  const [account, setAccount] = useState(false);
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

  return (
    <div>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <div className={classes.flex}>
            <div>
              <img
                src={FacebookLogo}
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
            {mainHeaderData.map((data, index) => (
              <NavLink key={index} to={data.path} activeClassName="active">
                <Tooltip title={data.toolTipTitle}>
                  {/* <span className={classes.icons}>{data.icon}</span> */}
                  {data.icon}
                </Tooltip>
              </NavLink>
            ))}
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
                  <CgMenuGridO size="23" className={classes.circularIcons} />
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

export default HeaderWrapper;
