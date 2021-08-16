import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  InputBase,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { homeLeftData, contact, storyData } from "../../datas/Home/HomeData";
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
      <Grid item lg={6} className={classes.flowControl}>
        <div>
          <Paper>
            <Grid container spacing={3}>
              {storyData?.map((data, index) => (
                <Grid lg={3}>
                  <Paper>{data.image}</Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Paper style={{ marginTop: "30px", padding: "15px" }}>
            <span>
              <Avatar>K</Avatar>
            </span>
            <InputBase
              className={classes.textField}
              placeholder="What's on your mind, Kusum?"
              size="large"
            />
            <hr />
            <Grid container spacing={0}>
              <Grid item lg={4}>
                <span>
                  <VideoCallIcon color="secondary" />
                </span>
                Live Video
              </Grid>
              <Grid item lg={4}>
                <span>
                  <InsertPhotoIcon style={{ color: "green" }} />
                </span>
                Photo/Video
              </Grid>
              <Grid item lg={4}>
                <span>
                  <EmojiEmotionsIcon style={{ color: "orange" }} />
                </span>
                Feeling/Activity
              </Grid>
            </Grid>
          </Paper>
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
