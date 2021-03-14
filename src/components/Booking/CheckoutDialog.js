import { useState } from "react";
import { useHistory } from "react-router-dom";
// Styling
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const CheckoutDialog = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Checkout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Checkout as guest or sign in"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => history.push("/checkout")} color="primary">
            Guest
          </Button>
          <Button
            onClick={() => history.push("/signin")}
            color="primary"
            autoFocus
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CheckoutDialog;
