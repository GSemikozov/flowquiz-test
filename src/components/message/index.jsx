import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  message: {
    backgroundColor: "#edf0fb",
    padding: theme.spacing(2),
    flexGrow: 1,
    "&$system": {
      backgroundColor: theme.palette.background.default,
    },
  },
  system: {},
  write: {},
  input: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const FormInput = ({
  text,
  id,
  placeholder = "Type here",
  btnText = "continue",
}) => {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off" style={{ flexGrow: 1 }}>
      <TextField
        id={id}
        label={text}
        variant="outlined"
        fullWidth={true}
        placeholder={placeholder}
        size="small"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<SubdirectoryArrowLeftIcon />}
      >
        {btnText}
      </Button>
    </form>
  );
};

export const Message = ({
  type,
  text,
  placeholder = "Type here",
  btnText,
  avatar,
  handleConfirm,
}) => {
  const classes = useStyles();

  return (
    <Box py={1}>
      <Grid
        container
        spacing={1}
        direction={type === "system" ? "row" : "row-reverse"}
        style={{ flexWrap: "nowrap" }}
      >
        <Grid item>
          <Avatar src={avatar} sizes={"120"} />
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          {type !== "write" ? (
            <>
              <Paper
                elevation={0}
                className={`${classes.message} ${
                  type === "system" ? classes.system : ""
                }`}
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
            <FormInput
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
