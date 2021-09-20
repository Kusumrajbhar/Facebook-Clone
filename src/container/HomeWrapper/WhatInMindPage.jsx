import React from "react";
import { Avatar, Grid, Paper, InputBase } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import { globalStyle } from "../../component/globalStyle/GlobalStyle";

function WhatInMindPage() {
  const globalClass = globalStyle();
  const profilePic = localStorage.getItem("userImage");

  return (
    <Paper className={globalClass.marginTopWithPadding}>
      <div className={globalClass.flex}>
        <Avatar className={globalClass.marginRightTwelve}>
          <img src={profilePic} height="50" width="50" alt="profile pic" />
        </Avatar>
        <InputBase
          className={globalClass.inputFieldStyle}
          placeholder="What's on your mind, Kusum?"
          size="large"
        />
      </div>
      <hr />
      <Grid container className={globalClass.flexWithCenterJustify} spacing={0}>
        <Grid item lg={4} className={globalClass.flexWithCenterJustify}>
          <span>
            <VideoCallIcon color="secondary" style={{ marginRight: "7px" }} />
          </span>
          Live Video
        </Grid>
        <Grid item lg={4} className={globalClass.flexWithCenterJustify}>
          <span>
            <InsertPhotoIcon className={globalClass.greenColor} />
          </span>
          Photo/Video
        </Grid>
        <Grid item lg={4} className={globalClass.flexWithCenterJustify}>
          <span>
            <EmojiEmotionsIcon className={globalClass.orangeColor} />
          </span>
          Feeling/Activity
        </Grid>
      </Grid>
    </Paper>
  );
}

export default WhatInMindPage;
