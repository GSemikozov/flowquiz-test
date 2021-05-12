import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    color: "#1A1F36",
    marginBottom: theme.spacing(2),
  },
}));

export const CardTitle = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h6"
      component="h3"
      className={`${classes.title} ${className}`}
      {...rest}
    >
      {children}
    </Typography>
  );
};
