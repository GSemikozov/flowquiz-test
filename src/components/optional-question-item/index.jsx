import { ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Check, Close} from '@material-ui/icons';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, {forwardRef, useCallback, useEffect} from 'react';
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
    opacity: "1 !important",
  },
  listItemIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(2),
    marginTop: theme.spacing(0.1),
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
  listItemCheckedIcon: {
    backgroundColor: theme.palette.primary.main,
    "&:before": {
      color: "#fff",
    },
  },
  formControlLabel: {
    width: "100%",
    margin: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(5),
    boxSizing: "border-box",
    zIndex: 1,
    position: "relative",
  },
  successColor: {
    color: greenColor,
  },
}));

export const OptionalQuestionItem = forwardRef((props, ref) => {
  const classes = useStyles();

  const labelId = `input-list-label-${props.id}`;

  const handleClickOnPressButton = useCallback((event) => {
    if (props.symbol === event.key) {
      ref.current.click();
    }
  }, [ref, props.symbol]);

  useEffect(() => {
    props.isSubmitted && window.removeEventListener("keypress", handleClickOnPressButton, false);
  }, [handleClickOnPressButton, props.isSubmitted]);

  useEffect(() => {
    window.addEventListener("keypress", handleClickOnPressButton, false);

    // cleanup this component
    return () => {
      window.removeEventListener("keypress", handleClickOnPressButton, false);
    };
  }, [handleClickOnPressButton, ref]);

  return (
    <>
      <ListItem
        button={true}
        className={`
          ${classes.listItem}
          ${props.error ? classes.listItemError: ""}
          ${!props.isSubmitted && props.value === props.text ? classes.listItemActive : ""}
          ${props.isSubmitted && props.value === props.text ? classes.listItemSelected : ""}
        `}
        disabled={props.isSubmitted}
      >
        <ListItemText id={labelId} style={{ listStyleType: "none", margin: 0, position:'relative' }}>
          <FormControlLabel ref={ref} className={classes.formControlLabel} label={props.text} control={
            <Radio
              edge="start"
              tabIndex={-1}
              disableRipple
              value={props.text}
              color={"primary"}
              id={props.id}
              inputProps={{ 'aria-labelledby': labelId }}
              className={classes.radio}
              style={{position: "absolute", width: "1px", height: "1px", opacity: 0}}
            />
          } />
          <div className={`
            ${classes.listItemIcon}
            ${props.value === props.text && classes.listItemCheckedIcon}
          `} />
        </ListItemText>
        {props.hasIcons && (
          <ListItemSecondaryAction style={{top: "16px", transform: "translateY(0)"}}>
            {!props.isOpen && props.value === props.text && (
              <Tooltip title="Chosen" aria-label="Chosen">
                <Check color="primary" />
              </Tooltip>
            )}
            {props.isOpen && props.isTrue && (
              <Tooltip title="Correct" aria-label="Correct">
                <Check className={classes.successColor} />
              </Tooltip>
            )}
            {props.isOpen && !props.isTrue && (
              <Tooltip title="Incorrect" aria-label="Incorrect">
                <Close color="error" />
              </Tooltip>
            )}
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </>
  );
});
