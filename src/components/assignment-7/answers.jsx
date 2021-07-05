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
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          Well done!
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          Correct.
        </Typography>
        <Typography variant="body1">
          Good job!
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Incorrect.</Typography>
        <Typography variant="body1">
          That’s ok, now you know how to apply this knowledge.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}