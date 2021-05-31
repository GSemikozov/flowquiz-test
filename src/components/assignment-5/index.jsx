import React, {useEffect, useRef} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Assignment5 = ({ sectionRef, targetRef, handleClick, children }) => {
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
      <Card count={1} countAmount={10} isCounted={true}>
        <Box>
          <Message avatar="" text="card" type="system" />
        </Box>
        <Box>
          <Message avatar="" text="card" type="write" />
        </Box>
        <Box>
          <Message avatar="" text="card" type="default" />
        </Box>
        <Box>
          <Message
            avatar=""
            text="confirm please"
            type="system"
            handleConfirm={() => handleClick(targetRef)}
          />
        </Box>
      </Card>
    </Box>
  )
};
