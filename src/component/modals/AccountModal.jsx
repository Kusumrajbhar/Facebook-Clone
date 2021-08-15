import React from "react";
import { Dialog, Paper, Avatar } from "@material-ui/core";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import LockIcon from "@material-ui/icons/Lock";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import useStyles from "./StylesModal";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function AccountModal({ open, onClose }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <Paper style={{ padding: "15px", maxWidth: "400px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <Avatar>K</Avatar>
          </span>
          <span style={{ marginLeft: "10px" }}>
            <b>Kusum Rajbhar</b>
            <br />
            See Your profile
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <FeedbackIcon className={classes.menuIcons} />
          </span>
          <span style={{ marginLeft: "10px" }}>
            <b>Give Feedback</b> <br />
            Help us improve the new Facebook
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <SettingsIcon className={classes.menuIcons} />
          </span>
          <span style={{ marginLeft: "10px" }}>
            <b>Settings & Privacy</b>
            <ArrowForwardIosIcon style={{ marginLeft: "auto" }} />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <HelpIcon className={classes.menuIcons} />
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Help & Support
            <span style={{ marginRight: "18px" }}>
              <ArrowForwardIosIcon />
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <NightsStayIcon className={classes.menuIcons} />
          </span>
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
            <span>Display & Accessibility</span>
            <span style={{ marginRight: "18px" }}>
              <ArrowForwardIosIcon />
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <LockIcon className={classes.menuIcons} />
          </span>
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
            Log Out
          </span>
        </div>
        <div>
          Privacy . Terms . Advertising . Ad Choices . Cookies . More . Facebook
          2021
        </div>
      </Paper>
    </Dialog>
  );
}

export default AccountModal;
