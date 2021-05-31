import React, {useEffect} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Assignment1 = ({ sectionRef, targetRef, handleClick, children }) => {
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
          <Typography variant="body1">
            It’s your first day at Educately Inc, the leading platform for courses and educational content. You came to the office a bit earlier to enjoy your customary cup of coffee.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            But no sooner does the coffee touch your lips than you suddenly get a message from Nathan, the CEO of Educately Inc.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            Uh-oh, are you in trouble already?
          </Typography>
        </Box>
        <Box>
          <Message avatar="" text="Hey Frank, welcome aboard!" type="system" />
        </Box>
        <Box>
          <Message avatar="" text="I know it's your first day, but could you do me a solid?" type="system" />
        </Box>
        <Box>
          <Message avatar="" text="Take a look at our new financial course for women. It's been performing badly." type="system" />
        </Box>
        {/*<Box>*/}
        {/*  <Message avatar="" text="card" type="write" />*/}
        {/*</Box>*/}
        <Box>
          <Message avatar="" text="Badly how? Can you be more specific pls?" type="default" />
        </Box>
        <Box>
          <Message avatar="" text="Sorry, no can do. On a meeting right now. You'll figure it out." type="system" />
        </Box>
        {/*<Box>*/}
        {/*  <Message*/}
        {/*    avatar=""*/}
        {/*    text="confirm please"*/}
        {/*    type="system"*/}
        {/*    handleConfirm={() => handleClick(targetRef)}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box mt={2}>
          <Typography variant="body1">
            With a deep sigh, you sink back into your chair. “The early bird gets the worm? Yeah, right.”
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            You pull up the information on the course that Nathan mentioned, Wallet Detox. Which of its performance metrics are you going to look at?
          </Typography>
        </Box>
      </Card>
    </Box>
  )
};
