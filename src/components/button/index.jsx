import React, {forwardRef} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& $icon": {
        display: "none",
      },
    },
  },
  icon: {},
}));

const CustomButton =  forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Button
      ref={ref}
      endIcon={<SubdirectoryArrowLeftIcon className={classes.icon} />}
      className={classes.button}
      {...props}
    >
      {props.children}
    </Button>
  )
});

export default CustomButton;
