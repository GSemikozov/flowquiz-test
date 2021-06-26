import React, {forwardRef, useState} from "react";
import {CardTitle} from "../card-title";
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formTitle: {
    marginBottom: 0,
    marginTop: theme.spacing(2),
  },
  input: {
    width: "100%",
  },
}));

export const FormAnswer = forwardRef((props, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
    setIsSubmitted(true);
  }

  return (
    <>
      <CardTitle className={classes.formTitle}>Enter your answer here</CardTitle>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} ref={ref}>
        <TextField label="Your answer" className={classes.input} disabled={isSubmitted} />
      </form>
    </>
  );
});