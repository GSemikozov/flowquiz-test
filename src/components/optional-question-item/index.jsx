import { Collapse, Grid, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Cancel, Check, CheckCircle, Close} from '@material-ui/icons';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import green from '@material-ui/core/colors/green';

const greenColor = green[500];

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
    padding: 0,
    marginBottom: theme.spacing(1),
    width: "auto",
    display: "flex",
    alignItems: "center",
    boxShadow: "0.5px 0.5px 2px #DFDEE5",
  },
  listItemError: {
    borderColor: "red",
  },
  listItemActive: {
    opacity: "1 !important",
    borderColor: theme.palette.action.active,
  },
  listItemSelected: {
    borderColor: theme.palette.action.selected,
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
      // left: "-12px",
      fontSize: "0.8rem",
      width: "42px",
      height: "42px",
      lineHeight: "41px",
      verticalAlign: "middle",
      textAlign: "center",
      color: "blue",
      fontWeight: 600,
    },
  },
  formControlLabel: {
    width: "100%",
    margin: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    boxSizing: "border-box",
  },
  answerPanel: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // marginLeft: "-5px",
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
  successColor: {
    color: greenColor,
  },
}));

export const OptionalQuestionItem = ({ isTrue = false, isOpen, value, isSubmitted, id, error, text, children }) => {
  const classes = useStyles();
  const labelId = `input-list-label-${id}`;

  return (
    <>
      <ListItem
        button={true}
        className={`
          ${classes.listItem}
          ${error && classes.listItemError}
          ${!isSubmitted && value === text && classes.listItemActive}
          ${isSubmitted && value === text && classes.listItemSelected}
        `}
        disabled={isSubmitted}
      >
        <ListItemText id={labelId} style={{ listStyleType: "none", margin: 0 }}>
          <FormControlLabel className={classes.formControlLabel} label={text} control={
            <Radio
              edge="start"
              tabIndex={-1}
              disableRipple
              value={text}
              color={"primary"}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          } />
        </ListItemText>
        <ListItemSecondaryAction>
          {!isOpen && value === text && (
            <Tooltip title="Chosen" aria-label="Chosen">
              <Check color="primary" />
            </Tooltip>
          )}
          {isOpen && isTrue && (
            <Tooltip title="Correct" aria-label="Correct">
              <Check className={classes.successColor} />
            </Tooltip>
          )}
          {isOpen && !isTrue && (
            <Tooltip title="Incorrect" aria-label="Incorrect">
              <Close color="error" />
            </Tooltip>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse
        in={isOpen && value === text}
        timeout="auto"
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
            {children}
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};
