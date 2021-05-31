import React, {useEffect, useRef} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import {QuestionWithAnswer} from "../question-with-answer";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Assignment3 = ({ sectionRef, targetRef, handleClick, children }) => {
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
      <Card count={3} countAmount={10} isCounted={true}>
        <QuestionWithAnswer handleClick={() => handleClick(targetRef)} />
      </Card>
    </Box>
  )
};
