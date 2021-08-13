import React from "react";
import { Card, Dialog } from "@material-ui/core";

function MessengerModal({ open, onClose }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <Card>
        <h1> Messenger</h1>
      </Card>
    </Dialog>
  );
}

export default MessengerModal;
