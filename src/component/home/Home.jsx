import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Input,
  Button,
  InputBase,
  Typography,
  TextField,
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

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.main}>
      <Grid item lg={3}>
        <Paper className={classes.leftPaper} elevation={0}>
          <div>
            <div className={classes.userInfo}>
              <span className="">
                <Avatar>K</Avatar>
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
            <span style={{ display: "flex" }}>
              {storyData?.map((data, index) => (
                <Paper spacing={5} key={index}>
                  {data.image}
                </Paper>
              ))}
            </span>
          </div>
          <Paper style={{ marginTop: "30px", padding: "15px" }}>
            <div style={{ display: "flex" }}>
              <Avatar style={{ marginRight: "2%" }}>
                <img src={girl1} height="50px" width="50px" alt="" />
              </Avatar>
              <InputBase
                style={{
                  background: "#eeeeee",
                  borderRadius: "25px",
                  width: "100%",
                  padding: "3px 10px",
                }}
                placeholder="What's on your mind, Kusum?"
                size="large"
              />
            </div>
            <hr />
            <Grid
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              spacing={0}
            >
              <Grid
                item
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  <VideoCallIcon color="secondary" />
                </span>
                Live Video
              </Grid>
              <Grid
                item
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  <InsertPhotoIcon style={{ color: "green" }} />
                </span>
                Photo/Video
              </Grid>
              <Grid
                item
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  <EmojiEmotionsIcon style={{ color: "orange" }} />
                </span>
                Feeling/Activity
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ margin: "20px 0", padding: "15px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <Button
                  startIcon={
                    <VideoCallIcon style={{ color: "purple", size: "30" }} />
                  }
                  color="primary"
                >
                  Create Room
                </Button>
              </span>
              <span style={{ display: "flex" }}>
                {createRoom?.map((data, index) => (
                  <span key={index} style={{ marginLeft: "10px" }}>
                    <Avatar>{data}</Avatar>
                  </span>
                ))}
              </span>
            </div>
          </Paper>
          {postData?.map((data, index) => (
            <Paper key={index} style={{ marginBottom: "3%" }}>
              <div style={{ display: "flex", padding: "3%" }}>
                <Avatar style={{ marginRight: "2%" }}>
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
              <div style={{ padding: "2% 5%" }}>
                <hr />
                <Grid
                  container
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ThumbUpAltOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                    Like
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ChatBubbleOutlineOutlinedIcon
                      style={{ marginRight: "10px" }}
                    />
                    Comment
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <RiShareForwardLine style={{ marginRight: "10px" }} /> Share
                  </Grid>
                </Grid>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column ",
                    alignItems: "flex-start",
                  }}
                >
                  <h4>Comments</h4>
                  <div style={{ display: "flex", margin: "2% 0" }}>
                    <Avatar style={{ marginRight: "10px" }}>
                      <img src={girl1} height="50px" width="50px" alt="" />
                    </Avatar>
                    <span style={{ fontSize: "14px" }}>
                      <b>{data.commenter}</b>
                      <br />
                      {data.Comment}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar style={{ marginRight: "10px" }}>
                    <img
                      src={data.profileImage}
                      height="50px"
                      width="50px"
                      alt=""
                    />
                  </Avatar>
                  <InputBase
                    style={{
                      background: "#eeeeee",
                      borderRadius: "25px",
                      width: "100%",
                      padding: "3px 10px",
                    }}
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              key={index}
            >
              <span>{data.icon}</span>
              <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                {data.name}
              </p>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
