import React, { useState, useEffect } from "react";
import { Grid, InputBase, Avatar, Paper, Button } from "@material-ui/core";

import girl1 from "../../Assets/Images/girl1.jpg";
import userStyle from "./ProfileStyle";
import WhatInMindPage from "../HomeWrapper/WhatInMindPage";
import { introData } from "../../datas/profile/ProfileData";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import PostCard from "../HomeWrapper/PostCard";

function ProfileWrapper() {
  const classes = userStyle();
  const globalClass = globalStyle();
  const [userProfileImage, setUserProfileImage] = useState();
  const [localImage, setLocalImage] = useState(undefined);

  const uploadProfileImageHandler = (e) => {
    const myImage = e.target.files[0];
    const blobImage = URL.createObjectURL(myImage);
    setUserProfileImage(blobImage);
    localStorage.setItem("userImage", blobImage);
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    setLocalImage(storedImage);
  }, [userProfileImage]);

  return (
    <div className={globalClass.alignContentLeft}>
      <Paper className={classes.imageBackground}>
        <img
          className="App"
          src={localImage && localImage}
          height="300"
          width="300"
          alt=""
        />
        <div className="flexWithCenterJustify">
          <span className={classes.userInfoPlace}>
            <span style={{ borderRadius: "50%" }} className="iconLetter">
              <img
                src={localImage && localImage}
                height="100"
                width="100"
                alt=""
              />
            </span>
            <span>
              <b>Kusum Rajbhar</b>
            </span>
          </span>
          <Button variant="contained" color="primary" component="label">
            <input
              className={globalClass.paddingFive}
              type="file"
              onChange={uploadProfileImageHandler}
              hidden
            />
            Upload Image
          </Button>
        </div>
      </Paper>
      <div className={classes.belowData}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Paper className={classes.introPaper}>
              <h2>Intro</h2>
              <Button color="action" variant="contained" fullWidth>
                Add Bio
              </Button>

              {introData.map((data, index) => (
                <div className={classes.introData} key={index}>
                  <span className={globalClass.alignContentLeft}>
                    <span className={globalClass.marginRightTen}>
                      {data.icon}
                    </span>
                    <span>{data.info}</span>
                  </span>
                </div>
              ))}

              <Button
                color="action"
                variant="contained"
                className={globalClass.marginTopTen}
                fullWidth
              >
                Edit Details
              </Button>
              <Button
                color="action"
                variant="contained"
                className={globalClass.marginTopTen}
                fullWidth
              >
                Add Hobbies
              </Button>
              <Button
                color="action"
                variant="contained"
                className={globalClass.marginTopTen}
                fullWidth
              >
                Add Featured
              </Button>
            </Paper>

            <Paper></Paper>
          </Grid>
          <Grid item lg={6}>
            <div className={classes.RightTopCard}>
              <WhatInMindPage />
              <div className={classes.postCardOver}>
                <PostCard />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProfileWrapper;
