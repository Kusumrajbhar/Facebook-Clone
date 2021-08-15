import React from "react";
import { Paper, Dialog } from "@material-ui/core";

function NotificationModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Paper>
        <h2>Notifications</h2>
        <div>
          <h3>New</h3>
        </div>
      </Paper>
    </Dialog>
  );
}

export default NotificationModal;
