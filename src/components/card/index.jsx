import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5),
    },
    // marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const Card = ({
  children,
  className,
  isCounted,
  count,
  countAmount,
}) => {
  const classes = useStyles();

  return (
    <Paper className={`${classes.wrapper} ${className}`} elevation={0}>
      {isCounted && (
        <Typography variant="h6" className={classes.title}>
          {count} / {countAmount}
        </Typography>
      )}
      {children}
    </Paper>
  );
};
