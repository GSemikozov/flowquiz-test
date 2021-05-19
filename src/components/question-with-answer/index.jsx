import { Grid, TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Error } from '@material-ui/icons';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import React from 'react';

import { CardTitle } from '../card-title';

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
  notification: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flexWrap: "nowrap",
  },
}));

const Notification = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.notification}>
      <Grid item>
        <Error color="disabled" size="sm" />
      </Grid>
      <Grid item>
        <Typography variant="body1">
          No, sales managers do it. Of the options listed, the internet marketer
          is responsible for the online reputation of the product.
        </Typography>
      </Grid>
    </Grid>
  );
};

const FormAnswer = ({handleClick}) => {
  const classes = useStyles();

  return (
    <>
      <CardTitle className={classes.formTitle}>Your answer</CardTitle>
      <form noValidate autoComplete="off">
        <TextField label="Your answer" className={classes.input} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          endIcon={<SubdirectoryArrowLeftIcon />}
          onClick={handleClick}
        >
          Check the answer
        </Button>
      </form>
    </>
  );
};

export const QuestionWithAnswer = ({handleClick}) => {
  return (
    <>
      <CardTitle>Question 1. What is the internet marketing?</CardTitle>
      <Typography variant="body1">
        You are meeting with university friends. At some point, your friend
        Alexey asks: “Here I work as an analyst, analyzing data. Olya works as a
        designer, draws buttons. All clear. What do you do in your internet
        marketing? ”.
      </Typography>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        Well, questions, Lesha.{" "}
        <b>What do you think an internet marketer does of this?</b>
      </Typography>
      <FormAnswer handleClick={handleClick} />
      <Notification />
    </>
  );
};
