import React, {useEffect} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import {CardHeading} from "../card-heading";
import {CustomRating} from "../custom-rating";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Review = ({ sectionRef }) => {
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
      <Box>
        <Card>
          <CardHeading style={{ textAlign: "center" }}>
            How was the quiz?
          </CardHeading>
          <Box>
            <Message
              avatar=""
              text="Fred, how was the quiz? Was it useful and interesting?"
              type="system"
            />
          </Box>
          <Box>
            <CustomRating title="How useful?" />
          </Box>
          <Box>
            <CustomRating title="How interesting?" defaultValue={3} />
          </Box>
          <Box>
            <Message
              avatar=""
              text="What could we do better?"
              type="system"
            />
          </Box>
          <Box>
            <Message
              avatar=""
              text="What could we do better?"
              type="write"
              btnText="Submit"
              placeholder="What could we do better?"
            />
          </Box>
        </Card>
      </Box>
    </Box>
  )
};
