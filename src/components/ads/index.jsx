import React from "react";
import {Card} from "../card";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Ads = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Box className={classes.section}>
      <Card>
        <Typography align="center" variant="body1">
          Build your own interactive quiz for free with{" "}
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="always"
          >
            Flowquiz
          </Link>
        </Typography>
      </Card>
    </Box>
  )
};
