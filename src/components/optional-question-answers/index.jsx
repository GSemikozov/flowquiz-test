import React, {useEffect} from "react";
import {Collapse, Grid} from "@material-ui/core";
import {Cancel, CheckCircle} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  answerPanel: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    boxSizing: "border-box",
    "& p, & ul": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    "& ul li:not(last-child)": {
      marginBottom: theme.spacing(1),
    }
  },
  answerPanelItem: {
    boxSizing: "border-box",
  },
}));

export const OptionalQuestionAnswers = ({isTrue, isOpen, children}) => {
  const classes = useStyles();
  useEffect(() => {
    console.log("isTrue", isTrue);
  }, [isTrue]);

  return (
    <Collapse
      in={isOpen}
      timeout="auto"
    >
      <Grid container spacing={1} className={classes.answerPanel}>
        <Grid item className={classes.answerPanelItem}>
          {isTrue ? (
            <CheckCircle style={{ color: "green" }} />
          ) : (
            <Cancel color="error" />
          )}
        </Grid>
        <Grid
          item
          className={classes.answerPanelItem}
          style={{ flexGrow: 1 }}
        >
          {children}
        </Grid>
      </Grid>
    </Collapse>
  )
}