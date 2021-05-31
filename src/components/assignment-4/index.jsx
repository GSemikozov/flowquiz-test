import React, {useEffect} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {Statistics} from "../statistics";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const Assignment4 = ({ sectionRef, targetRef, handleClick, children }) => {
  const classes = useStyles();

  useEffect(() => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }, [sectionRef]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Card count={6} countAmount={10} isCounted={true}>
        <Statistics
          title="You are an average course creator"
          text="You are meeting with university friends. At some point, your friend Alexey asks: “Here I work as an analyst, analyzing data. Olya works as a designer, draws buttons. All clear. What do you do in your internet marketing? ”. "
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          endIcon={<SubdirectoryArrowLeftIcon />}
          onClick={() => handleClick(targetRef)}
        >
          Finish
        </Button>
      </Card>
    </Box>
  )
};
