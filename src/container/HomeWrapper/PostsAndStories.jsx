import React from "react";
import { Avatar, Paper, Button } from "@material-ui/core";

import VideoCallIcon from "@material-ui/icons/VideoCall";

import useStyles from "./StyleHome";
import { storyData, createRoom } from "../../datas/Home/HomeData";
import WhatInMindPage from "./WhatInMindPage";
import PostCard from "./PostCard";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";

function PostsAndStories() {
  const classes = useStyles();
  const globalClass = globalStyle();
  return (
    <div>
      <div>
        <span className={globalClass.flex}>
          {storyData?.map((data, index) => (
            <Paper spacing={5} key={index}>
              {data.image}
            </Paper>
          ))}
        </span>
      </div>

      <WhatInMindPage />

      <Paper className={globalClass.marginWithPadding}>
        <div className={globalClass.flexWithCenterJustify}>
          <span>
            <Button
              startIcon={<VideoCallIcon className={classes.purpleColor} />}
              color="primary"
            >
              Create Room
            </Button>
          </span>
          <span className={globalClass.flex}>
            {createRoom.map((data, index) => (
              <span key={index} className={classes.marginLeftTen}>
                <Avatar>{data}</Avatar>
              </span>
            ))}
          </span>
        </div>
      </Paper>
      <PostCard />
    </div>
  );
}

export default PostsAndStories;
