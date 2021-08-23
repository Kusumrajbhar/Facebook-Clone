import React from "react";
import {
  jwelleryCollection,
  sareeCollection,
} from "../../datas/MarketPlace/MarketPlaceData";
import { Grid, Paper } from "@material-ui/core";

import { marketStyle } from "./StyleMarketPlace";

function MainMarketContent() {
  const classes = marketStyle();
  return (
    <div>
      <div className={classes.collectionHeading}>Today's Pic</div>
      <Grid container className={classes.mainContainer} spacing={1}>
        {sareeCollection.map((data, index) => (
          <Grid key={index} item lg={3}>
            <Paper className={classes.paperStyle} elevation={0}>
              <img
                src={data.image}
                className={classes.collectionImages}
                alt="fashion"
              />
            </Paper>
            <div className={classes.paperDetail}>
              <p className={classes.fontSize18}>
                <b>{data.price} </b>
              </p>
              <p className={classes.fontSize16}>{data.name}</p>
              <p className={classes.fontSize}>{data.location}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <hr />
      <div className={classes.collectionHeading}>Jewelry and accessories</div>
      <Grid container spacing={1}>
        {jwelleryCollection.map((data, index) => (
          <Grid key={index} item lg={3}>
            <Paper
              style={{ background: "#eceff1", borderRadius: "14px" }}
              elevation={0}
            >
              <img
                src={data.image}
                className={classes.collectionImages}
                alt="jewellery"
              />
            </Paper>
            <div className={classes.paperDetail}>
              <p style={{ fontSize: "18px" }}>
                <b>{data.price} </b>
              </p>
              <p style={{ fontSize: "16px" }}>{data.name}</p>
              <p style={{ fontSize: "12px" }}>{data.location}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MainMarketContent;
