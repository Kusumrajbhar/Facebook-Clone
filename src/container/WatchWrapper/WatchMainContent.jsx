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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { AiOutlineLike, AiFillLike, AiTwotoneHeart } from "react-icons/ai";
import { BiLaugh } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

import watchStyles from "./Style";
import { globalStyle } from "../../component/globalStyle/GlobalStyle";
import { CardData } from "../../datas/profile/CardData";

function WatchMainContent() {
  const classes = watchStyles();
  const globalClass = globalStyle();
  return (
    <>
      {CardData.map((data, index) => (
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

            <Typography className={classes.subTitle}>{data.info}</Typography>
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
    </>
  );
}

export default WatchMainContent;
