import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
}));

export const CardHeading = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" component="h2" className={classes.title} {...rest}>
      {children}
    </Typography>
  );
};
