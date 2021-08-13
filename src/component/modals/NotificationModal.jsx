import React from "react";
import { Card, Dialog } from "@material-ui/core";

function NotificationModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Card>
        <h1>hello</h1>
      </Card>
    </Dialog>
  );
}

export default NotificationModal;
