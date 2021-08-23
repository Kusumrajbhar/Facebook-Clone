import React from "react";
import {
  Grid,
  Paper,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { RiSettings5Fill } from "react-icons/ri";
import SearchIcon from "@material-ui/icons/Search";

import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import { marketStyle } from "./StyleMarketPlace";
import {
  sidebarLowerData,
  sidebarUpperData,
} from "../../datas/MarketPlace/MarketPlaceData";

function MarketWrapper() {
  const globalClass = globalStyle();
  const classes = marketStyle();

  return (
    <div>
      <Grid container>
        <Grid item lg={3}>
          <Paper className={classes.marketSideBar}>
            <div className={globalClass.sideBarTop}>
              <span className={globalClass.sideBarTitle}>Marketplace</span>
              <span>
                <RiSettings5Fill
                  size="25"
                  className={globalClass.sidebarIconSize}
                />
              </span>
            </div>
            <InputBase
              className={globalClass.inputFieldStyle}
              startAdornment={<SearchIcon color="action" />}
              placeholder="Search Marketplace"
            />
            <hr />

            <div className={globalClass.sidebarScrolling}>
              <div>
                {sidebarUpperData.map((data, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <span className={globalClass.sidebarIconSize}>
                        {data.icon}
                      </span>
                    </ListItemIcon>
                    <ListItemText>
                      <b>{data.title}</b>
                    </ListItemText>
                  </ListItem>
                ))}
              </div>
              <div className={classes.newListButton}>+ Create new listing</div>
              <hr />
              <div className={classes.filter}>
                <h3>Filters</h3>
                <p className={globalClass.blueColor}>
                  Mumbai, Maharashtra . Within 60 Kilometers
                </p>
              </div>
              <hr />
              <div>
                <h3 className={globalClass.alignContentLeft}>Categories</h3>
                {sidebarLowerData.map((data, index) => (
                  <ListItem key={index} button>
                    <ListItemIcon>
                      <span className={globalClass.sidebarIconSize}>
                        {data.icon}
                      </span>
                    </ListItemIcon>
                    <ListItemText>
                      <b>{data.text}</b>
                    </ListItemText>
                  </ListItem>
                ))}
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={9}></Grid>
      </Grid>
    </div>
  );
}

export default MarketWrapper;
