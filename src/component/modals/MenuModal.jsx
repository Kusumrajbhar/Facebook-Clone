import React from "react";
import { Grid, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Dialog, DialogContent } from "@material-ui/core";
import useStyles from "./StylesModal";
import menuModalData from "../../datas/MenuModal/MenuModalData";

function MenuModal({ open, onClose }) {
  const classes = useStyles();
  //const [scroll, setScroll] = React.useState("paper");
  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={classes.dialog}
      //disableEnforceFocus
      hideBackdrop
      //disableBackdropClick
      fullWidth
    >
      <h2 style={{ marginLeft: "5%" }}>Menu</h2>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Paper className={classes.paperMenu}>
              <InputBase
                className={classes.searchTextField}
                placeholder="Search Facebook"
                startAdornment={<SearchIcon color="action" />}
              />
              <h2>Social</h2>
              <div>
                <p>
                  <b className={classes.menuTitle}>Campus</b>
                  <p>
                    A Unique, exclusive space for college students on Facebook.
                  </p>
                </p>
                <p>
                  <b className={classes.menuTitle}>Events</b>
                  <br />
                  Organize or find events and other things to do online and
                  nearby.
                </p>
                <p>
                  <b className={classes.menuTitle}>Friends</b>
                  <br />
                  Search for friends or people you may know.
                </p>
                <p>
                  <b className={classes.menuTitle}>Groups</b>
                  <br />
                  Connect with people who share your interests.
                </p>
                <p>
                  <b className={classes.menuTitle}>News Feed</b>
                  <br />
                  See relevant posts from people and pages you follow
                </p>
                <p>
                  <b className={classes.menuTitle}>Pages</b>
                  <br />
                  Discover and connect with business on Facebook.
                </p>
              </div>
              <hr />
              <div>
                <h2>Entertainment</h2>
                <p>
                  <b className={classes.menuTitle}>Gaming Video</b>
                  <br />
                  Watch and connect with your favorite games and streamers.
                </p>
                <p>
                  <b className={classes.menuTitle}>Play Games</b>
                  <br />
                  Play your favorite games.
                </p>
                <p>
                  <b className={classes.menuTitle}>Watch</b>
                  <br />A video destination personalized to your interests and
                  connections.
                </p>
              </div>
              <hr />
              <div>
                <h2>Shopping</h2>
                <p>
                  <b className={classes.menuTitle}>Marketplace</b>
                  <br />
                  Buy and sell in your community.
                </p>
                <p>
                  <b className={classes.menuTitle}>Offers</b>
                  <br />
                  Promotions and discounts from nearby businesses.
                </p>
              </div>
              <hr />
              <div>
                <h2>Personal</h2>
                <p>
                  <b className={classes.menuTitle}>Recent Ad Activity</b>
                  <br />
                  See all the ads you interacted with on Facebook.
                </p>
                <p>
                  <b className={classes.menuTitle}>Memories</b>
                  <br />
                  Browser your old photos, videos and posts on Facebook.
                </p>
                <p>
                  <b className={classes.menuTitle}>Saved</b>
                  <br />
                  Find posts, photos and videos that you saved for later.
                </p>
                <p>
                  <b className={classes.menuTitle}>Weather</b>
                  <br />
                  Check your local forecast and sign up for daily weather
                  notifications.
                </p>
              </div>
              <hr />
              <div>
                <h2>Professional</h2>
                <p>
                  <b className={classes.menuTitle}>Ads Manager</b>
                  <br />
                  Create, manage and track the performance of your ads.
                </p>
                <p>
                  <b className={classes.menuTitle}>Jobs</b>
                  <br />
                  Find a job that's right fro you.
                </p>
              </div>
              <hr />
              <div>
                <h2>Community Resources</h2>
                <p>
                  <b className={classes.menuTitle}>Blood Donations</b>
                  <br />
                  Get updates about donating blood near you.
                </p>
                <p>
                  <b className={classes.menuTitle}>
                    Climate Science Information Center
                  </b>
                  <br />
                  Learn about climate change and its effects.
                </p>
                <p>
                  <b className={classes.menuTitle}>
                    COVID-19 Information Center
                  </b>
                  <br />
                  See the latest prevention tips, community resources and update
                  from health organizations.
                </p>
                <p>
                  <b className={classes.menuTitle}>Community Help</b>
                  <br />
                  Get involved in your community by creating a drive, requesting
                  or offering help or volunteering
                </p>
                <p>
                  <b className={classes.menuTitle}>Fundraisers</b>
                  <br />
                  Donate and raise money for nonprofits and personal causes.
                </p>
              </div>
              <hr />
              <div>
                <h2>More from Facebook</h2>
                <p>
                  <b className={classes.menuTitle}>Messenger</b>
                  <br />
                  Chat instantly with your friends and connections.
                </p>
                <p>
                  <b className={classes.menuTitle}>Messenger Kids</b>
                  <br />
                  Let Kids message with close friends and family.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper className={classes.menuRightPaper}>
              <h2>Create</h2>
              {menuModalData?.map((data, index) => (
                <div key={index} className={classes.menuRightData}>
                  <span className={classes.menuIcons}>{data.icon}</span>
                  <p className={classes.menuText}> {data.name}</p>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default MenuModal;
