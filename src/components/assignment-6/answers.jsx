import React, {useEffect} from "react";
import {OptionalQuestionAnswer} from "../optional-question-answer";
import Typography from "@material-ui/core/Typography";

export const Answers = ({isError}) => {
  useEffect(() => {
    console.log("isError", isError);
  }, [isError])
  return (
    <>
      <OptionalQuestionAnswer id="1" isVisible={!isError}>
        <Typography variant="body1" style={{marginTop: 0}}>True.</Typography>
        <Typography variant="body1">
          NPS is a good choice, but it only gets you so far. It measures the satisfaction of people who have completed the course, but not the people who bought but didn’t finish it.
        </Typography>
        <Typography variant="body1">Other metrics are as one-sided as NPS:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">CSAT measures customer experience.</Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Completion rate measures your course’s success at prompting the audience to complete it.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              The number of signups measures how well you are marketing the course.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Revenue measures the income generated from people buying the course.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>
          The correct answer is “all of the above”. You need all metrics to decide what went right and what went wrong.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={isError}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          CSAT measures the experience of the existing audience. It doesn’t tell you anything about why people decided not to buy your course or how many people completed it.
        </Typography>
        <Typography variant="body1">Each metric helps paint a fuller picture:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              NPS measures customer loyalty.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Completion rate measures your course’s success at prompting the audience to complete it.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              The number of signups measures how well you are marketing the course.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Revenue measures the income generated from people buying the course.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>
          The correct answer is “all of the above”. To understand why this course is performing as badly as it is, you need to look at it from all angles.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}