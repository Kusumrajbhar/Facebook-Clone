import React from "react";
import { Avatar, Grid, Paper, InputBase } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import girl1 from "../../Assets/Images/girl1.jpg";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";

function WhatInMindPage() {
  const globalClass = globalStyle();
  const profilePic = localStorage.getItem("userImage");
  console.log(`profilePic`, profilePic);

  return (
    <Paper className="marginTopWithPadding">
      <div className={globalClass.flex}>
        <Avatar className="iconLetter">
          <img src={profilePic} height="50" width="50" alt="profile pic" />
        </Avatar>
        <InputBase
          className={globalClass.inputFieldStyle}
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
