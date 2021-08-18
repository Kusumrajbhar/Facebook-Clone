import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
  InputBase,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import { RiShareForwardLine } from "react-icons/ri";
import { FiSmile } from "react-icons/fi";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import {
  homeLeftData,
  contact,
  storyData,
  createRoom,
  postData,
} from "../../datas/Home/HomeData";
import girl1 from "../../Assets/Images/girl1.jpg";
import { useHistory } from "react-router";

function HomeWrapper() {
  const classes = useStyles();
  const history = useHistory();
  const profileOfUser = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  return (
    <Grid container className="main">
      <Grid item lg={3}>
        <Paper className={classes.leftPaper} elevation={0}>
          <div>
            <div className={classes.userInfo} onClick={profileOfUser}>
              <span>
                <Avatar className="iconLetter">K</Avatar>
              </span>
              <p>Kusum</p>
            </div>

            {homeLeftData?.map((data, index) => (
              <ListItem key={index} button>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={<b>{data.label}</b>} />
              </ListItem>
            ))}
          </div>
        </Paper>
      </Grid>
      <Grid item lg={6} className={classes.midFlow}>
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
                  <VideoCallIcon
                    color="secondary"
                    style={{ marginRight: "7px" }}
                  />
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
          {postData?.map((data, index) => (
            <Paper key={index} className={classes.marginBottomThree}>
              <div className={classes.flexWithPaddingThree}>
                <Avatar className="iconLetter">
                  <img
                    src={data.profileImage}
                    height="50px"
                    width="50px"
                    alt=""
                  />
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
      </Grid>
      <Grid item lg={3} className={classes.flowControl}>
        <Paper className={classes.page} elevation={0}>
          <h3>Your Pages</h3>
          <hr />
          <h3>Contacts</h3>
          {contact?.map((data, index) => (
            <div className="flexWithCenter" key={index}>
              <span>{data.icon}</span>
              <p className="marginWithBold">{data.name}</p>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default HomeWrapper;
