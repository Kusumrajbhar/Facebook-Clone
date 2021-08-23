import React from "react";
import {
  Avatar,
  Grid,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { RiSettings5Fill } from "react-icons/ri";
import SearchIcon from "@material-ui/icons/Search";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineLike, AiFillLike, AiTwotoneHeart } from "react-icons/ai";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RiShareForwardLine } from "react-icons/ri";
import { BiLaugh } from "react-icons/bi";

import watchStyles from "./Style";
import { sideBarLower, sideBarUpperHalf } from "../../datas/Watch/WatchData";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import { cardData } from "../../datas/Profile/ProfileData";

function WatchWrapper() {
  const classes = watchStyles();
  const globalClass = globalStyle();
  return (
    <div>
      <Grid container>
        <Grid item lg={3} sm={12} md={3}>
          <Paper className={classes.watchSideBar}>
            <div className={globalClass.sideBarTop}>
              <span className={globalClass.sideBarTitle}>Watch</span>
              <span>
                <RiSettings5Fill
                  size="25"
                  className={globalClass.sidebarIconSize}
                />
              </span>
            </div>
            <InputBase
              className={globalClass.inputFieldStyle}
              startAdornment={<SearchIcon color="action" />}
              placeholder="Search Videos"
            />

            <hr />
            <div className={globalClass.sidebarScrolling}>
              <div>
                {sideBarUpperHalf.map((data, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <span className={globalClass.sidebarIconSize}>
                        {data.icon}
                      </span>
                    </ListItemIcon>
                    <ListItemText>
                      <b>{data.text}</b>
                    </ListItemText>
                  </ListItem>
                ))}
              </div>
              <hr />
              <h3 className={classes.marginRightAuto}>Your WatchList</h3>

              {sideBarLower.map((data, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>
                    <Avatar>{data.image}</Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <b>{data.text}</b>
                  </ListItemText>
                </ListItem>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item className={classes.centralContent} lg={9} sm={12} md={9}>
          {cardData.map((data, index) => (
            <Paper key={index} className={classes.cardMain}>
              <div className={globalClass.lineHeightOne}>
                <div className={classes.cardHeader}>
                  <span className={globalClass.flexCenter}>
                    <span className={globalClass.marginRightTen}>
                      <Avatar>
                        <img
                          src={data.image}
                          className={globalClass.heightWidth}
                          alt="channel"
                        />
                      </Avatar>
                    </span>
                    <span className={classes.title}>
                      <h3>{data.Title}</h3>
                      <p>{data.subTitle}</p>
                    </span>
                  </span>
                  <span>
                    <MoreHorizIcon />
                  </span>
                </div>

                <Typography className={classes.subTitle}>
                  {data.info}
                </Typography>
                <Typography className={classes.subTitleDetail}>
                  {data.subInfo}
                </Typography>
              </div>

              <div className={globalClass.marginTopTen}>
                <video
                  autoPlay={true}
                  loop={true}
                  playsInline={true}
                  controls
                  muted
                  className={classes.videoWidth}
                >
                  <source src={data.video} type="video/mp4" />
                </video>
              </div>

              <div className={classes.footer}>
                <span className={globalClass.flex}>
                  <span className={classes.iconButtons}>
                    <AiOutlineLike
                      size="20"
                      className={globalClass.marginRightThree}
                    />
                    <span>Like</span>
                  </span>
                  <span className={classes.iconButtons}>
                    <FaRegCommentAlt
                      size="15"
                      className={globalClass.marginRightThree}
                    />
                    <span>Comment</span>
                  </span>
                  <span className={classes.iconButtons}>
                    <RiShareForwardLine
                      size="20"
                      className={globalClass.marginRightThree}
                    />
                    <span>Share</span>
                  </span>
                </span>
                <span className={globalClass.flexCenter}>
                  <span className={globalClass.marginRightTen}>
                    <span>
                      <AiFillLike
                        size="15px"
                        color="white"
                        className={classes.like}
                      />
                    </span>
                    <span>
                      <AiTwotoneHeart
                        size="15px"
                        color="white"
                        className={classes.heart}
                      />
                    </span>
                    <span>
                      <BiLaugh size="15px" className={classes.laugh} />
                    </span>
                  </span>
                  <Typography className={globalClass.fontSizeFourteen}>
                    {data.likes}
                  </Typography>
                </span>
              </div>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default WatchWrapper;
