import React from "react";
import { Avatar, Grid, Paper, Button, InputBase } from "@material-ui/core";

import VideoCallIcon from "@material-ui/icons/VideoCall";

import useStyles from "./Styles";
import { storyData, createRoom } from "../../datas/Home/HomeData";
import girl1 from "../../Assets/Images/girl1.jpg";
import WhatInMindPage from "./WhatInMindPage";
import PostCard from "./PostCard";

function PostsAndStories() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <span className="flexDisplay">
          {storyData?.map((data, index) => (
            <Paper spacing={5} key={index}>
              {data.image}
            </Paper>
          ))}
        </span>
      </div>

      <WhatInMindPage />

      <Paper className="marginWithPadding">
        <div className="flexWithCenterJustify">
          <span>
            <Button
              startIcon={<VideoCallIcon className="purpleColor" />}
              color="primary"
            >
              Create Room
            </Button>
          </span>
          <span className="flexDisplay">
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
