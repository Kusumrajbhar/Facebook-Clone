import React from "react";
import { Paper } from "@material-ui/core";

import useStyles from "./StyleHome";
import { contact } from "../../datas/Home/HomeData";

function ContactSideBar() {
  const classes = useStyles();
  return (
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
  );
}

export default ContactSideBar;
