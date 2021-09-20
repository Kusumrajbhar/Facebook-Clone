import React from "react";
import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { useHistory } from "react-router";

import useStyles from "./StyleHome";
import { homeLeftData } from "../../datas/Home/HomeData";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";

function ProfileSideBar() {
  const classes = useStyles();
  const globalClass = globalStyle();
  const history = useHistory();
  const profileOfUser = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  return (
    <Paper className={classes.leftPaper} elevation={0}>
      <div>
        <div className={classes.userInfo} onClick={profileOfUser}>
          <span>
            <Avatar className={globalClass.marginRightTwelve}>K</Avatar>
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
  );
}

export default ProfileSideBar;
