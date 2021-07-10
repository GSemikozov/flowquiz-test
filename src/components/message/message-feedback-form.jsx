import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import React, {useEffect, useState} from 'react';

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const MessageFeedbackForm = ({
 handleSubmit,
 text,
 id,
 inputType = "text",
 placeholder = "Type here",
 btnText = "continue",
}) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleOnChange = (event) => {
    if (event.target.value !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(value);
    setIsDisabled(true);
    setIsFormDisabled(true);
  }
  useEffect(() => {
    console.log("value inside form", value)
  }, [value])

  return (
    <form
      onSubmit={onSubmit}
      style={{ flexGrow: 1 }}
    >
      <TextField
        id={id}
        label={text}
        type={inputType}
        variant="outlined"
        fullWidth={true}
        placeholder={placeholder}
        size="small"
        value={value}
        onChange={handleOnChange}
        disabled={isFormDisabled}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<SubdirectoryArrowLeftIcon />}
        disabled={isDisabled}
      >
        {btnText}
      </Button>
    </form>
  );
};