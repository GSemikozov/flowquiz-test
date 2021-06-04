import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "none",
  },
  visible: {
    display: "block",
  },
}));

export const OptionalQuestionAnswer = ({isVisible, children}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.wrapper} ${isVisible && classes.visible}`}>{children}</div>
  )
}