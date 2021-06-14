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
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          NPS divides all respondents into three categories:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span"><b>Promoters</b>, or loyal enthusiasts. They score the product 9 or 10.</Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Passives</b>, or unenthusiastic customers. They score the product 7 or 8.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Detractors</b>, or unsatisfied customers. They score the product between 0 and 6.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" component="span">
          The NPS calculation formula is simple: the percentage of promoters minus the percentage of detractors.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          In this case, it’s 90% (15%+75%) minus 3% (2%+1%). The correct answer is 87%.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          NPS divides all respondents into three categories:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span"><b>Promoters</b>, or loyal enthusiasts. They score the product 9 or 10.</Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Passives</b>, or unenthusiastic customers. They score the product 7 or 8.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Detractors</b>, or unsatisfied customers. They score the product between 0 and 6.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" component="span">
          The NPS calculation formula is simple: the percentage of promoters minus the percentage of detractors.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          In this case, it’s 90% (15%+75%) minus 3% (2%+1%). The correct answer is 87%.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          NPS divides all respondents into three categories:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span"><b>Promoters</b>, or loyal enthusiasts. They score the product 9 or 10.</Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Passives</b>, or unenthusiastic customers. They score the product 7 or 8.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Detractors</b>, or unsatisfied customers. They score the product between 0 and 6.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" style={{marginBottom: 0}}>
          By taking out the overall percentage of detractors (3%) from the percentage of all promoters (90%),
          you get the Net Promoter Score — 87%.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          NPS divides all respondents into three categories:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span"><b>Promoters</b>, or loyal enthusiasts. They score the product 9 or 10.</Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Passives</b>, or unenthusiastic customers. They score the product 7 or 8.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <b>Detractors</b>, or unsatisfied customers. They score the product between 0 and 6.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" component="span">
          The NPS calculation formula is simple: the percentage of promoters minus the percentage of detractors.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          In this case, it’s 90% (15%+75%) minus 3% (2%+1%). The correct answer is 87%.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}