import React, {forwardRef, useCallback, useEffect, useState} from "react";
import {CardTitle} from "../card-title";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CustomButton from "../button";

const useStyles = makeStyles((theme) => ({
  formTitle: {
    marginBottom: 0,
    marginTop: theme.spacing(2),
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const FormAnswer = forwardRef((props, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(true);
  const classes = useStyles();
  const {onSubmit} = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    setIsSubmitted(true);
  }

  const handleChange = (event) => {
    event.target.value === ""
      ? setIsFieldEmpty(true)
      : setIsFieldEmpty(false);
  }

  const handleSubmitFromKeyboard = useCallback((event) => {
    if ((event.ctrlKey && event.key === 'Enter') || (event.metaKey && event.key === 'Enter')) {
      console.log("cmd + enter");
      onSubmit();
      setIsSubmitted(true);
    }
  }, [onSubmit]);

  useEffect(() => {
    window.addEventListener("keypress", handleSubmitFromKeyboard, false);

    // cleanup this component
    return () => {
      window.removeEventListener("keypress", handleSubmitFromKeyboard, false);
    };
  }, [handleSubmitFromKeyboard]);

  return (
    <>
      <CardTitle className={classes.formTitle}>Enter your answer here</CardTitle>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} ref={ref}>
        <TextField
          label="Your answer"
          multiline={true}
          className={classes.input}
          disabled={isSubmitted}
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          disabled={isSubmitted || isFieldEmpty}
          className={classes.button}
        >Continue <span style={{fontSize: "20px", marginLeft: "16px"}}>⌘ +</span></CustomButton>
      </form>
    </>
  );
});