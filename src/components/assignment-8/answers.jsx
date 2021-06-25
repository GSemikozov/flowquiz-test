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
          This is something you can tell on your own, as you have a plethora of data points.
          You’ll hear the answer you already know, just worded differently.
        </Typography>
        <Typography variant="body1" component="span">
          Proposing to give her a special discount is not correct, either.
          It may give you some positive word of mouth and a few new signups, but ultimately it has no impact on the quality of your landing page.
        </Typography>
        <Typography variant="body1">
          You also can’t expect people to imagine the contents of the course for you.
          Hypothetical deal with subjective opinions, but right now you need factual information to improve your landing page.
        </Typography>
        <Typography variant="body1">
          The correct question would be “Why did you sign up for the course?”
          If you understand people’s motivation for signing up, you can target them better with your website.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="2" isVisible={selectedOptionId === "2"}>
        <Typography variant="body1" style={{marginTop: 0}}>
          Wrong
        </Typography>
        <Typography variant="body1">
          Giving potential customers an additional incentive is a standard marketing trick that could help you cover a wider audience.
          It does not help you understand the motivation of the target audience.
        </Typography>
        <Typography variant="body1" component="span">
          Similarly, asking them about which stage they reconsidered buying the course at gives you no new information.
          It’s already covered by your analytics.
        </Typography>
        <Typography variant="body1" component="span">
          The same goes for asking them what the course should include.
          They are learners, not educators; you can’t expect them to imagine a course that they have not yet taken.
        </Typography>
        <Typography variant="body1" component="span">
          Right now, you need to understand why people even want to sign up for this course.
          What are the actual problems they want to solve with it? What drives them?
        </Typography>
        <Typography variant="body1" component="span">
          Once you understand that, you can write a much better landing page.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="3" isVisible={selectedOptionId === "3"}>
        <Typography variant="body1" style={{marginTop: 0}}>Wrong.</Typography>
        <Typography variant="body1">
          Asking a hypothetical gives you nothing to work with. It is not a learner’s job to know what a specific course should include.
        </Typography>
        <Typography variant="body1">
          Offering a special discount does not help you, either.
          You can attract a few customers this way, but you want to improve the course in the long term.
        </Typography>
        <Typography variant="body1">
          Asking at what stage they reconsidered buying the course is also irrelevant.
          You can learn that thanks to all the data points you have at your disposal.
        </Typography>
        <Typography variant="body1">
          You need to concentrate on the factual information — why this person was interested in this course, to begin with.
          This will help you nail down the pain points that Wallet Detox can solve for learners.
        </Typography>
      </OptionalQuestionAnswer>
      <OptionalQuestionAnswer id="4" isVisible={selectedOptionId === "4"}>
        <Typography variant="body1" style={{marginTop: 0}}>Correct.</Typography>
        <Typography variant="body1">
          Asking a person about their motivation helps you understand their pain points and how your course can solve them.
        </Typography>
        <Typography variant="body1" component="span">
          If they initially engaged with your messaging but then reconsidered at the last moment,
          it’s clear that you could’ve addressed their problems better.
        </Typography>
        <Typography variant="body1">
          On the other hand, asking at which stage they reconsidered buying the course offers you no new information.
          You can already see that thanks to analytics.
        </Typography>
        <Typography variant="body1" style={{marginBottom: 0}}>
          Offering a special discount is not the right step, either.
          It can net you a few customers in the short term, but right now you’re trying to understand how to make the course itself resonate more.
        </Typography>
      </OptionalQuestionAnswer>
    </>
  )
}