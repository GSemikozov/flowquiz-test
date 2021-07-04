import React, {useEffect} from "react";
import {OptionalQuestionAnswer} from "../optional-question-answer";
import Typography from "@material-ui/core/Typography";

export const Answers = ({selectedOptionId}) => {
  useEffect(() => {
    console.log("selectedOptionId", selectedOptionId, typeof selectedOptionId);
  }, [selectedOptionId])
  return (
    <>
      <OptionalQuestionAnswer id="1" isVisible={selectedOptionId === "1"}>
        <Typography variant="body1" style={{marginTop: 0}}>True.</Typography>
        <Typography variant="body1">
          The cost of generating one customer is the cost per click divided by the signup rate multiplied by the conversion rate.
        </Typography>
        <Typography variant="body1" component="span">
          In other words, it’s $0.5 / (0.1 x 0.05) = 100 USD.
        </Typography>
        <Typography variant="body1" component="span">
          Easy to notice how 100 USD > 95.99 USD. Somebody should change the price or improve the acquisition model.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          False
        </Typography>
        <Typography variant="body1">
          The cost of generating one customer is the cost per click divided by the signup rate multiplied by the conversion rate.
        </Typography>
        <Typography variant="body1">
          Using this simple formula, we get $0.5 / (0.1 x 0.05) = 100 USD.
        </Typography>
        <Typography variant="body1">
          A hundred dollars spent on acquiring one customer isn’t much bigger than the current price of the course, but there’s still a difference.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>False.</Typography>
        <Typography variant="body1">
          The cost of generating one customer is the cost per click divided by the signup rate multiplied by the conversion rate.
        </Typography>
        <Typography variant="body1">
          Calculating like this, we get $0.5 / (0.1 x 0.05) = 100 USD.
        </Typography>
        <Typography variant="body1">
          Lead generation expense ($100) is higher than the course’s price ($95.99).
          In other words, right now Educately spends more on customers than they do on Wallet Detox.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}