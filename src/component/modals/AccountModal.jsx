import { Dialog, Card } from "@material-ui/core";
import React from "react";

function AccountModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Card>
        <h1>hiii</h1>
      </Card>
    </Dialog>
  );
}

export default AccountModal;
