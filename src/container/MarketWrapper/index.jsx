import React from "react";
import { Grid, Paper } from "@material-ui/core";

//import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import { marketStyle } from "./StyleMarketPlace";
import {
  jwelleryCollection,
  sareeCollection,
} from "../../datas/MarketPlace/MarketPlaceData";
import MarketSideBar from "./MarketSideBar";
import MainMarketContent from "./MainMarketContent";

function MarketWrapper() {
  return (
    <div>
      <Grid container>
        <Grid item lg={3} sm={3} md={3}>
          <MarketSideBar />
        </Grid>
        <Grid item lg={9} sm={9} md={9}>
          <MainMarketContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default MarketWrapper;
