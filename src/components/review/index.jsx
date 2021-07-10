import React, {useEffect, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import {CardHeading} from "../card-heading";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {ChatMessageSubmit} from "../chat-message-submit";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
}));

export const Review = ({ sectionRef, email, username, systemMessageAvatar }) => {
  const classes = useStyles();

  const [rating, setRating] = useState(0);
  const [ratingDisabled, setRatingDisabled] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleRatingSubmit = (event) => {
    event.preventDefault();
    setRating(+event.target.value);
    setRatingDisabled(true);
  }

  const handleAnswerSubmit = (value) => {
    setAnswer(value);
  }

  useEffect(() => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }, [sectionRef]);

  useEffect(() => {
    console.log("review answer", answer);
  }, [answer]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Box>
        <Card>
          <CardHeading style={{ textAlign: "center" }}>
            {`How was the quiz, ${username}?`}
          </CardHeading>
          <Box mt={3}>
            <Message
              avatar={systemMessageAvatar}
              name="Fred Pedersen"
              text="Hey, Herman, how was the quiz?"
              type="system"
            />
          </Box>
          <Box my={2} style={{textAlign: "center"}}>
            <Rating
              name="rating"
              size="large"
              value={rating}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={handleRatingSubmit}
              disabled={ratingDisabled}
            />
          </Box>
          <Box>
            <Message
              avatar={systemMessageAvatar}
              name="Fred Pedersen"
              text="What did you like the most?"
              type="system"
            />
          </Box>
          <Box mt={2}>
            <ChatMessageSubmit onSubmit={handleAnswerSubmit} />
          </Box>
        </Card>
      </Box>
    </Box>
  )
};
