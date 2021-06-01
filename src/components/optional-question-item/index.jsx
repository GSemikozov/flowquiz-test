import { Collapse, Grid, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Cancel, Check, CheckCircle } from '@material-ui/icons';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React from 'react';
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
    width: "auto",
    display: "flex",
    alignItems: "center",
  },
  listItemError: {
    borderColor: "red",
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
    minWidth: 32,
  },
  answerPanel: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // marginLeft: "-5px",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  answerPanelItem: {
    boxSizing: "border-box",
  },
}));

export const OptionalQuestionItem = ({ isTrue = false, isOpen, value, isSubmitted, id, error, text, children }) => {
  const classes = useStyles();
  const labelId = `input-list-label-${id}`;

  return (
    <>
      <ListItem
        button={true}
        className={`${classes.listItem} ${error && classes.listItemError}`}
        disabled={isSubmitted}
      >
        <ListItemText id={labelId} style={{ listStyleType: "none" }}>
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
          {isOpen && value === text && (
            <Tooltip title="Correct" aria-label="Correct">
              <Check color="primary" />
            </Tooltip>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse
        in={isOpen}
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
            <Typography variant="body1">{children}</Typography>
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};
