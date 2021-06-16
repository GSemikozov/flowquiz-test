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
          This sounds more like the targeting you use when setting up a Facebook ad. As a target audience definition, it’s incomplete
        </Typography>
        <Typography variant="body1" component="span">
          There is no information that could answer the main question: “Why should they obtain this course?”
          The details provided barely allow you to deduce the audience’s pain points and pastime, and you want better than that.
        </Typography>
        <Typography variant="body1">
          To identify the right audience, you must know their intents.
          Different purchasing intents require different messaging and sometimes even different landing pages.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          Wrong.
        </Typography>
        <Typography variant="body1">
          The information provided in this file barely touches on the socio-economic background of the audience.
          There are no pain points, interests, or motivation here.
        </Typography>
        <Typography variant="body1" component="span">
          The main question is, “Why should they obtain this course?” — and this little document does not answer it.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          Mary’s help is greatly appreciated, but it seems there are no shortcuts to getting things done.
        </Typography>
        <Typography variant="body1">
          A complete portrait of the target audience must include their hobbies, pastime, pain points, feelings and motivations.
          If it doesn’t answer why people would want to obtain this course, this information is of no use.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}