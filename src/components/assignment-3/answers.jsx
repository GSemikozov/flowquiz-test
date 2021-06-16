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
          You’ve already been through that, and the only insight you gained was that users don’t convert.
          But why they don’t convert is a different question entirely.
        </Typography>
        <Typography variant="body1" component="span">
          When it comes to subjective matters like people’s motivations and intents, analytics are not that useful.
          You’re better off checking the target audience and the landing page.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          “I agree,” says Nathan, with a tinge of pride in his voice.
          It looks like he wanted to see if you know the right answer, and you passed his test with flying colors.
        </Typography>
        <Typography variant="body1">
          Indeed, all the other options are not as helpful:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" component="span">
              Analytics can’t accurately measure something as subjective as people’s motivations and intentions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              It’s too early and time-consuming to conduct user interviews.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Checking the course materials is irrelevant, as you know that people who completed the course found it overall great.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" component="span">
          Checking the target audience and the landing page leads you to two outcomes:
        </Typography>
        <ol>
          <li>
            <Typography variant="body1" component="span">
              We target the wrong audience.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              Our landing page does not communicate the value of the course.
            </Typography>
          </li>
        </ol>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          It’s not exactly a bad option, but it’s also not the most time-efficient one, either.
          It would take considerable effort on your part to run some customer interviews.
        </Typography>
        <Typography variant="body1">
          The logical first step would be to check the target audience and then the landing page to see if you can spot something obvious.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Not really.</Typography>
        <Typography variant="body1">
          No offence, but you’re probably not the target audience for this course.
          Besides, with the NPS of 87%, you already know that people like Wallet Detox, so its quality is not under question.
        </Typography>
        <Typography variant="body1" component="span">
          Similarly, checking the analytics again will not help you measure subjective emotional responses from your target audience.
          Speaking directly to them is not a bad choice, but it’s too early for that.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          The problem is low conversion, so the best first step would be to check the target audience and the landing page.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}