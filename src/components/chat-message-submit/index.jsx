import React, {forwardRef, useCallback, useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {Send} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  form: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
  },
  input: {
    // width: "100%",
  },
  button: {
    marginLeft: theme.spacing(1),
    padding: 0
  },
}));

export const ChatMessageSubmit = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(true);
  const [submitStep, setSubmitStep] = useState(1);
  const classes = useStyles();
  const {onSubmit, isMultipleSubmitLogic} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("isMultipleSubmitLogic", isMultipleSubmitLogic)
    console.log("submitStep", submitStep)
    if (isMultipleSubmitLogic) {
      submitStep === 2 ? onSubmit(value, true) : onSubmit(value, false);
    } else {
      onSubmit(value);
    }
    setIsSubmitted(true);
    setSubmitStep(prev => prev + 1);
    setTimeout(() => {
      setValue("");
    }, 0);
  }

  const handleChange = (event) => {
    event.target.value === ""
      ? setIsFieldEmpty(true)
      : setIsFieldEmpty(false);
    setValue(event.target.value);
  }

  const handleSubmitFromKeyboard = useCallback((event) => {
    if ((event.ctrlKey && event.key === 'Enter') || (event.metaKey && event.key === 'Enter')) {
      console.log("cmd + enter");
      if (isMultipleSubmitLogic) {
        submitStep === 2 ? onSubmit(value, true) : onSubmit(value, false);
      } else {
        onSubmit(value);
      }
      setIsSubmitted(true);
      setSubmitStep(prev => prev + 1);
    }
  }, [onSubmit, isMultipleSubmitLogic, submitStep, value]);

  useEffect(() => {
    window.addEventListener("keypress", handleSubmitFromKeyboard, false);

    // cleanup this component
    return () => {
      window.removeEventListener("keypress", handleSubmitFromKeyboard, false);
    };
  }, [handleSubmitFromKeyboard]);

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item style={{flexGrow: "1"}}>
            <TextField
              size="medium"
              multiline={true}
              className={classes.input}
              disabled={(!isMultipleSubmitLogic && isSubmitted) || (isMultipleSubmitLogic && submitStep > 2)}
              onChange={handleChange}
              value={value}
              fullWidth={true}
              InputProps={{ disableUnderline: true }}
              autoFocus={true}
            />
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              type="submit"
              size="medium"
              disabled={(!isMultipleSubmitLogic && isSubmitted) || (isMultipleSubmitLogic && submitStep > 2) || isFieldEmpty}
              className={classes.button}
            >
              <Send />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
});