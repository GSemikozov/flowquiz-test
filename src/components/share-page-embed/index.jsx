import React, { useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import {styled, Typography} from "@material-ui/core";
import { CopyToClipboard } from "../copy-to-clipboard";
import Slide from '@material-ui/core/Slide';
import {SHARED_PAGE_LINK} from "../../constants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const SharePageEmbed = () => {
  const [open, setOpen] = useState(false);

  const getCopyToClipboardContent = () => `<object data="${SHARED_PAGE_LINK}" width="100%" height="100%"></object>`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share page embed
      </Button>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Grab your embed code
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            Place the code in your page's HTML where you want your flowquiz test to appear.
          </Typography>
          <CopyToClipboard text={getCopyToClipboardContent()} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
};
