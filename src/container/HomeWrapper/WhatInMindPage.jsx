import React from "react";
import { Avatar, Grid, Paper, InputBase } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import girl1 from "../../Assets/Images/girl1.jpg";

function WhatInMindPage() {
  return (
    <Paper className="marginTopWithPadding">
      <div className="flexDisplay">
        <Avatar className="iconLetter">
          <img src={girl1} height="50px" width="50px" alt="" />
        </Avatar>
        <InputBase
          className="inputFieldStyle"
          placeholder="What's on your mind, Kusum?"
          size="large"
        />
      </div>
      <hr />
      <Grid container className="flexWithCenterJustify" spacing={0}>
        <Grid item lg={4} className="flexWithCenterJustify">
          <span>
            <VideoCallIcon color="secondary" style={{ marginRight: "7px" }} />
          </span>
          Live Video
        </Grid>
        <Grid item lg={4} className="flexWithCenterJustify">
          <span>
            <InsertPhotoIcon className="greenColor" />
          </span>
          Photo/Video
        </Grid>
        <Grid item lg={4} className="flexWithCenterJustify">
          <span>
            <EmojiEmotionsIcon className="orangeColor" />
          </span>
          Feeling/Activity
        </Grid>
      </Grid>
    </Paper>
  );
}

export default WhatInMindPage;
