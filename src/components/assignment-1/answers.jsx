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
        <Typography variant="body1" style={{marginTop: 0}}>Partly true.</Typography>
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
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>Partly true.</Typography>
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
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Partly true.</Typography>
        <Typography variant="body1">
          The number of signups alone won’t tell you the full story. It is a good indicator of your marketing efforts, but not of the quality of your product.
        </Typography>
        <Typography variant="body1">The same applies to other metrics:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              NPS only measures customer loyalty.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              CSAT measures customer experience.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Completion rate measures your course’s success at prompting the audience to complete it.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Revenue measures the income generated from people buying the course.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>
          The correct answer is “all of the above”. There’s no be-all and end-all metric to measure the overall success of a course.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Partly true.</Typography>
        <Typography variant="body1">
          Revenue measures the income that was generated from people buying the course. It does not include potential or lost revenue from the audience you failed to reach.
        </Typography>
        <Typography variant="body1">The success of a given course depends on many variables:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              Customer loyalty, which is measured by NPS.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Customer experience, which is measured by CSAT.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Completion rate, or your course’s success at prompting the audience to complete it.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              The number of signups, which indicates how well you are marketing the course.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>The correct answer is “all of the above”.</Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="5" isVisible={selectedOptionId === "5"}>
        <Typography variant="body1" style={{marginTop: 0}}>Partly true.</Typography>
        <Typography variant="body1">
          The completion rate measures the quality of your content. The higher the completion rate, the more people found the course valuable and engaging enough to finish.
        </Typography>
        <Typography variant="body1">But, there are still many pieces of the puzzle that you’re missing:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              Customer loyalty, which is measured by NPS.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Customer experience, which is measured by CSAT.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Revenue, which is the income generated from people who bought your course.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              The number of signups, which indicates how well you are marketing the course.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>
          The correct answer is “all of the above”. Performance metrics are always used in conjunction with each other, to maximize their value.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="6" isVisible={selectedOptionId === "6"}>
        <Typography variant="body1" style={{marginTop: 0}}>Ding, ding, ding!</Typography>
        <Typography variant="body1">
          No one metric can paint you the whole picture. They are used for measuring the specific aspects of a product:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              NPS measures customer loyalty.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              CSAT measures customer experience.
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
      </OptionalQuestionAnswer>
    </>
  )
}