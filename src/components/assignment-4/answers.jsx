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
          First of all, your competitors will not give you this information willingly. Secondly, you may be targeting different audiences.
        </Typography>
        <Typography variant="body1" component="span">
          Google Analytics shows you the demographics of the target audience, but not much else.
          You need to know their motivation, intents and problems.
        </Typography>
        <Typography variant="body1" component="span">
          Client interviews are a decent solution, but not when you’re strapped for time and resources.
          It is too time-consuming to schedule, conduct, transcribe and then analyze dozens of in-depth interviews.
        </Typography>
        <Typography variant="body1" component="span">
          Sending out questionnaires to the people who have already completed the course serves the same function, but it is much easier to do.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          Wrong.
        </Typography>
        <Typography variant="body1">
          It’s not the audience’s demographics that should concern you the most.
          It’s their pain points, motivations and problems — all the things that Google Analytics doesn’t cover.
        </Typography>
        <Typography variant="body1" component="span">
          Checking your competitors doesn’t help you, either.
          They will not share their data with you, and even if they do, there may not be an overlap between your audiences.
        </Typography>
        <Typography variant="body1">
          Conducting in-depth client interviews is good, but it comes at a huge expense.
          It will take you too much time and money to schedule, conduct and analyze all of the interviews.
        </Typography>
        <Typography variant="body1">
          The correct answer is to send out online surveys to people who have completed the course.
          Wallet Detox seems to have resonated with them a lot, and you will get many first-hand insights from them.s
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          You already have the people who have paid for and completed the course.
          Judging by the course’s high NPS, it seems that the course resonated with them, as well.
        </Typography>
        <Typography variant="body1">
          Conducting client interviews would also offer similar information, but it is a much more time-consuming and costly process.
        </Typography>
        <Typography variant="body1">
          Google Analytics doesn’t cover the data outside of the demographics, such as people’s motivations and pain points.
        </Typography>
        <Typography variant="body1">
          Lastly, thinking your competitors would share their target audience data with you is too optimistic.
          Even if you do, you may be targeting different audiences, so it’s not that helpful.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Not entirely correct.</Typography>
        <Typography variant="body1">
          Scheduling and completing in-depth client interviews is a time-consuming and costly task.
          Moreover, if the interviewer is not experienced or skilled, the entire process can lead to no positive results.
        </Typography>
        <Typography variant="body1" component="span">
          Google Analytics can show you the demographics of your audience, but not their pain points, motivations and expectations.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          Asking your competitors for their target audience data is naively optimistic.
          Moreover, it’s not a given that you even target the same people with your courses.
        </Typography>
        <Typography variant="body1" component="span">
          It is much easier at this stage to send questionnaires to people who have already completed the course.
          Since you know that Wallet Detox has a high NPS, it’s obvious that the course resonated with its audience.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}