import { Collapse, Grid, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Cancel, Check, CheckCircle } from '@material-ui/icons';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  label: {
    margin: 0,
  },
  disabled: {
    color: "black",
    borderBottom: 0,
    "&:before": {
      borderBottom: 0,
    },
  },
  btnIcons: {
    marginLeft: 10,
  },
  listItem: {
    counterIncrement: "alphabeticList",
    border: "1px solid #E3E7EB",
    borderRadius: "8px",
    marginBottom: theme.spacing(1),
    width: "auto",
    display: "flex",
    alignItems: "center",
  },
  listItemIcon: {
    minWidth: 32,
    position: "relative",
    "&:before": {
      content: "counter(alphabeticList, upper-alpha)",
      speak: "counter(alphabeticList, upper-alpha)",
      position: "absolute",
      top: 0,
      left: 0,
      fontSize: "0.8rem",
      width: "24px",
      height: "24px",
      lineHeight: "24px",
      verticalAlign: "middle",
      textAlign: "center",
      color: "blue",
      fontWeight: 600,
    },
  },
  answerPanel: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  answerPanelItem: {
    boxSizing: "border-box",
  },
}));

export const OptionalQuestionItem = ({ isTrue = false, text, answer }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        button={true}
        onClick={() => console.log("clicked")}
        className={classes.listItem}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <CheckBoxOutlineBlankIcon color={isTrue ? "primary" : "action"} />
        </ListItemIcon>
        <ListItemText style={{ listStyleType: "none" }}>{text}</ListItemText>
        <ListItemSecondaryAction>
          {isTrue && (
            <Tooltip title="Remove" aria-label="Remove">
              <Check color="primary" />
            </Tooltip>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse
        in={true}
        timeout="auto"
        addEndListener={() => console.log("collapse")}
      >
        {/* isAnswerOpen used before */}
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
            <Typography variant="body1">{answer}</Typography>
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};
