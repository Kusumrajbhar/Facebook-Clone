import React from "react";
import {
  Avatar,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { RiSettings5Fill } from "react-icons/ri";
import SearchIcon from "@material-ui/icons/Search";

import watchStyles from "./Style";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import { sideBarLower, sideBarUpperHalf } from "../../datas/Watch/WatchData";

function SideBarWatch() {
  const classes = watchStyles();
  const globalClass = globalStyle();
  return (
    <Paper className={classes.watchSideBar}>
      <div className={globalClass.sideBarTop}>
        <span className={globalClass.sideBarTitle}>Watch</span>
        <span>
          <RiSettings5Fill size="25" className={globalClass.sidebarIconSize} />
        </span>
      </div>
      <InputBase
        className={globalClass.inputFieldStyle}
        startAdornment={<SearchIcon color="action" />}
        placeholder="Search Videos"
      />

      <hr />
      <div className={globalClass.sidebarScrolling}>
        <div>
          {sideBarUpperHalf.map((data, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <span className={globalClass.sidebarIconSize}>{data.icon}</span>
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
  );
}

export default SideBarWatch;
