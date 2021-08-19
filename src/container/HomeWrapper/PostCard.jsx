import React from "react";
import { Avatar, Grid, Paper, InputBase } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { RiShareForwardLine } from "react-icons/ri";
import { FiSmile } from "react-icons/fi";
import girl1 from "../../Assets/Images/girl1.jpg";

import { postData } from "../../datas/Home/HomeData";
import useStyles from "./Styles";

function PostCard() {
  const classes = useStyles();
  return (
    <div>
      {postData?.map((data, index) => (
        <Paper key={index} className={classes.marginBottomThree}>
          <div className={classes.flexWithPaddingThree}>
            <Avatar className="iconLetter">
              <img src={data.profileImage} height="50px" width="50px" alt="" />
            </Avatar>
            {data.name}
          </div>
          <div>
            <img src={data.post} height="350px" width="300px" alt="" />
          </div>
          <div className={classes.paddingTwoFive}>
            <hr />
            <Grid container className="flexWithCenterJustify">
              <Grid item lg={3} className="flexWithCenter">
                <ThumbUpAltOutlinedIcon className="marginRightTen" /> Like
              </Grid>
              <Grid item lg={3} className="flexWithCenter">
                <ChatBubbleOutlineOutlinedIcon className="marginRightTen" />
                Comment
              </Grid>
              <Grid item lg={3} className="flexWithCenter">
                <RiShareForwardLine className="marginRightTen" /> Share
              </Grid>
            </Grid>
            <hr />
            <div className="flexStartColumn">
              <h4>Comments</h4>
              <div className={classes.flexWithMarginTwo}>
                <Avatar className="iconLetter">
                  <img src={girl1} height="50px" width="50px" alt="" />
                </Avatar>
                <span className={classes.fontFourteen}>
                  <b>{data.commenter}</b>
                  <br />
                  {data.Comment}
                </span>
              </div>
            </div>
            <div className="flexWithCenter">
              <Avatar className="iconLetter">
                <img
                  src={data.profileImage}
                  height="50px"
                  width="50px"
                  alt=""
                />
              </Avatar>
              <InputBase
                className="inputFieldStyle"
                placeholder="Write a comment..."
                endAdornment={<FiSmile />}
              />
            </div>
          </div>
        </Paper>
      ))}
    </div>
  );
}

export default PostCard;
