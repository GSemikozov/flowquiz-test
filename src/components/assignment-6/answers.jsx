import React, {useEffect} from "react";
import {OptionalQuestionAnswer} from "../optional-question-answer";
import Typography from "@material-ui/core/Typography";

export const Answers = ({isTrue}) => {
  useEffect(() => {
    console.log("isTrue answers", isTrue);
  }, [isTrue])
  return (
    <>
      <OptionalQuestionAnswer id="1" isVisible={isTrue}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          To create a detailed persona of your buyer, you need to understand what makes them tick. And to do that, you need to learn their:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              Age and marital status
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Education and work experience
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Relevant likes and habits
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Goals, needs and concerns
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Use of social media channels
            </Typography>
          </li>
        </ul>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={!isTrue}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          While you’re encouraged to include as much information as you want in your buyer persona, this information needs to be relevant.
        </Typography>
        <Typography variant="body1">It is best to include:</Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              Age and marital status
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Education and work experience
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Education and work experience
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Goals, needs and concerns
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Use of social media channels
            </Typography>
          </li>
        </ul>
      </OptionalQuestionAnswer>
    </>
  )
}