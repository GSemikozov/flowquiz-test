import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import React, {memo} from 'react';
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";
import {MessageFeedbackForm} from "./message-feedback-form";

const useStyles = makeStyles((theme) => ({
  message: {
    // backgroundColor: "#edf0fb",
    // padding: theme.spacing(2),
    flexGrow: 1,
    // "&$system": {
    //   backgroundColor: theme.palette.background.default,
    // },
  },
  name: {
    color: theme.palette.primary.main,
    lineHeight: 1,
    paddingTop: theme.spacing(0.5),
  },
  system: {
    color: theme.palette.action.active,
  },
  write: {},
  avatar: {
    borderRadius: "50%",
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const Message = ({
  type,
  name,
  email,
  text,
  placeholder = "Type here",
  btnText,
  avatar,
  handleConfirm,
  handleSubmit,
  inputType,
}) => {
  const classes = useStyles();

  const AvatarComponent = memo(() => (
      <>{!email ? <Avatar src={avatar} sizes={"120"} /> : <Gravatar size={40} email={email} className={classes.avatar} />}</>
  ));

  return (
    <Box>
      <Grid
        container
        spacing={1}
        // direction={type === "system" ? "row" : "row-reverse"}
        style={{ flexWrap: "nowrap" }}
      >
        <Grid item>
          <AvatarComponent email={email} />
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          {name && (<Typography variant="body1" className={`${classes.name} ${
            type === "system" ? classes.system : ""
          }`}>{name}</Typography>)}
          {type !== "write" ? (
            <>
              <Paper
                elevation={0}
                className={`${classes.message}`}
              >
                {text}
              </Paper>
              {handleConfirm && (
                <Box component={"div"}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="small"
                    endIcon={<SubdirectoryArrowLeftIcon />}
                    onClick={handleConfirm}
                  >
                    OK
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <MessageFeedbackForm
              inputType={inputType}
              handleSubmit={handleSubmit}
              text={placeholder}
              placeholder={placeholder}
              btnText={btnText}
              id={"form-input"}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};