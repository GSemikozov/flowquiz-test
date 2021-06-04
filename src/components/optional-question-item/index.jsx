import { ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Check, Close} from '@material-ui/icons';
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
  radio: {
    "&:checked ~ .listItemIcon": {
      borderColor: "red",
    },
  },
  listItemIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.main}`,
    position: "absolute",
    top: "50%",
    left: theme.spacing(2),
    transform: "translate(0, -50%)",
    boxSizing: "border-box",
    "&:before": {
      content: "counter(alphabeticList, upper-alpha)",
      speak: "counter(alphabeticList, upper-alpha)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "0.8rem",
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
  formControlLabel: {
    width: "100%",
    margin: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(3),
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
        <ListItemText id={labelId} style={{ listStyleType: "none", margin: 0, position:'relative' }}>
          <FormControlLabel className={classes.formControlLabel} label={text} control={
            <>
              <Radio
                edge="start"
                tabIndex={-1}
                disableRipple
                value={text}
                color={"primary"}
                id={id}
                inputProps={{ 'aria-labelledby': labelId }}
                className={classes.radio}
                style={{position: "absolute", width: "1px", height: "1px", opacity: 0}}
              />
              <div className={classes.listItemIcon} />
            </>
          } />
          {/*<div className={classes.listItemIcon} />*/}
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
    </>
  );
};
