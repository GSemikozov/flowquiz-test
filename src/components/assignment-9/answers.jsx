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
          The target audience for this course is women who want to gain financial independence.
          Putting a quote from a man — one who bought it for his wife, no less — sends the wrong message.
        </Typography>
        <Typography variant="body1" component="span">
          A quote from Faith, 29 is a far better choice.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          Wrong
        </Typography>
        <Typography variant="body1">
          This quote sounds like it came straight from your marketing department. It’s full of buzzwords.
        </Typography>
        <Typography variant="body1" component="span">
          The best testimonials always use natural language.
          Your audience instinctively feels when things are being exaggerated for the purpose of selling them a product.
        </Typography>
        <Typography variant="body1" component="span">
          A quote from Faith, 29 is more authentic and overall fits better.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          This is a good choice for a pull quote. It’s short, to the point and accurately frames the demographic the course is aimed at.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          This review sounds authentic, but it's also rambling.
          Most people are scanning the content they see online, so long testimonials are unlikely to be read by anyone.
        </Typography>
        <Typography variant="body1" component="span">
          You would have to edit it down hard to keep it short, and at that point, you might as well write a testimonial yourself.
        </Typography>
        <Typography variant="body1">
          A quote from Faith, 29 is more concise and would look better on a landing page.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="5" isVisible={selectedOptionId === "5"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          This testimonial, although gushing, lacks details. It is so non-specific, it could be applied to almost any other course.
        </Typography>
        <Typography variant="body1" component="span">
          Worse yet, it doesn’t communicate to the potential customers the value they will be getting out of this course.
        </Typography>
        <Typography variant="body1">
          A quote from Faith, 29 is more memorable.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="6" isVisible={selectedOptionId === "6"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          This testimonial is good if you want to understand how to make the course better.
          It doesn’t work as a featured quote, because it focuses on the negative —
          that the course was too short and did not answer all of this customer’s questions.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          A quote from Faith, 29 paints a more positive picture.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}