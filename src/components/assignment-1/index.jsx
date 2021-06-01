import React, {useEffect, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import Button from "@material-ui/core/Button";
import {OptionalQuestionItem} from "../optional-question-item";
import List from "@material-ui/core/List";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

export const Assignment1 = ({ sectionRef, targetRef, handleClick, children }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isOpen, showAnswer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(true);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
    console.log("handleRadioChange")
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      setError(false);
      setIsSubmitted(true);
      !error && setIsSubmitActive(false);
      !error && showAnswer(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }, [sectionRef]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Card count={1} countAmount={10} isCounted={true}>
        <Box>
          <Typography variant="body1">
            It’s your first day at Educately Inc, the leading platform for courses and educational content. You came to the office a bit earlier to enjoy your customary cup of coffee.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            But no sooner does the coffee touch your lips than you suddenly get a message from Nathan, the CEO of Educately Inc.
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            Uh-oh, are you in trouble already?
          </Typography>
        </Box>
        <Box>
          <Message avatar="" text="Hey Frank, welcome aboard!" type="system" />
        </Box>
        <Box>
          <Message avatar="" text="I know it's your first day, but could you do me a solid?" type="system" />
        </Box>
        <Box>
          <Message avatar="" text="Take a look at our new financial course for women. It's been performing badly." type="system" />
        </Box>
        {/*<Box>*/}
        {/*  <Message avatar="" text="card" type="write" />*/}
        {/*</Box>*/}
        <Box>
          <Message avatar="" text="Badly how? Can you be more specific pls?" type="default" />
        </Box>
        <Box>
          <Message avatar="" text="Sorry, no can do. On a meeting right now. You'll figure it out." type="system" />
        </Box>
        {/*<Box>*/}
        {/*  <Message*/}
        {/*    avatar=""*/}
        {/*    text="confirm please"*/}
        {/*    type="system"*/}
        {/*    handleConfirm={() => handleClick(targetRef)}*/}
        {/*  />*/}
        {/*</Box>*/}
        <Box mt={2}>
          <Typography variant="body1">
            With a deep sigh, you sink back into your chair. “The early bird gets the worm? Yeah, right.”
          </Typography>
        </Box>
        <Box mt={2} mb={2}>
          <Typography variant="body1">
            You pull up the information on the course that Nathan mentioned, Wallet Detox. Which of its performance metrics are you going to look at?
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" error={error}>
            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <List style={{ counterReset: "alphabeticList" }}>
                <OptionalQuestionItem
                  isTrue={false}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={1}
                  // error={error}
                  text="NPS (Net Promoter Score)"
                >
                  <p style={{marginTop: 0}}>Partly true.</p>
                  <p>
                    NPS is a good choice, but it only gets you so far. It measures the satisfaction of people who have completed the course, but not the people who bought but didn’t finish it.
                  </p>
                  <p>Other metrics are as one-sided as NPS:</p>
                  <ul>
                    <li>CSAT measures customer experience.</li>
                    <li>Completion rate measures your course’s success at prompting the audience to complete it.</li>
                    <li>The number of signups measures how well you are marketing the course.</li>
                    <li>Revenue measures the income generated from people buying the course.</li>
                  </ul>
                  <p style={{marginBottom: 0}}>
                    The correct answer is “all of the above”. You need all metrics to decide what went right and what went wrong.
                  </p>
                </OptionalQuestionItem>
                <OptionalQuestionItem
                  isTrue={false}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={2}
                  // error={error}
                  text="CSAT (Customer Satisfaction Index)"
                >
                  <p style={{marginTop: 0}}>Partly true.</p>
                  <p>
                    CSAT measures the experience of the existing audience. It doesn’t tell you anything about why people decided not to buy your course or how many people completed it.
                  </p>
                  <p>Each metric helps paint a fuller picture:</p>
                  <ul>
                    <li>NPS measures customer loyalty.</li>
                    <li>Completion rate measures your course’s success at prompting the audience to complete it.</li>
                    <li>The number of signups measures how well you are marketing the course.</li>
                    <li>Revenue measures the income generated from people buying the course.</li>
                  </ul>
                  <p style={{marginBottom: 0}}>
                    The correct answer is “all of the above”. To understand why this course is performing as badly as it is, you need to look at it from all angles.
                  </p>
                </OptionalQuestionItem>
                <OptionalQuestionItem
                  isTrue={false}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={3}
                  // error={error}
                  text="Number of signups"
                >
                  <p style={{marginTop: 0}}>Partly true.</p>
                  <p>
                    The number of signups alone won’t tell you the full story. It is a good indicator of your marketing efforts, but not of the quality of your product.
                  </p>
                  <p>The same applies to other metrics:</p>
                  <ul>
                    <li>NPS only measures customer loyalty.</li>
                    <li>CSAT measures customer experience.</li>
                    <li>Completion rate measures your course’s success at prompting the audience to complete it.</li>
                    <li>Revenue measures the income generated from people buying the course.</li>
                  </ul>
                  <p style={{marginBottom: 0}}>
                    The correct answer is “all of the above”. There’s no be-all and end-all metric to measure the overall success of a course.
                  </p>
                </OptionalQuestionItem>
                <OptionalQuestionItem
                  isTrue={false}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={4}
                  // error={error}
                  text="Revenue"
                >
                  <p style={{marginTop: 0}}>Partly true.</p>
                  <p>
                    Revenue measures the income that was generated from people buying the course. It does not include potential or lost revenue from the audience you failed to reach.
                  </p>
                  <p>The success of a given course depends on many variables:</p>
                  <ul>
                    <li>Customer loyalty, which is measured by NPS.</li>
                    <li>Customer experience, which is measured by CSAT.</li>
                    <li>Completion rate, or your course’s success at prompting the audience to complete it.</li>
                    <li>The number of signups, which indicates how well you are marketing the course.</li>
                  </ul>
                  <p style={{marginBottom: 0}}>The correct answer is “all of the above”.</p>
                </OptionalQuestionItem>
                <OptionalQuestionItem
                  isTrue={false}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={5}
                  // error={error}
                  text="COR (Completion Rate)"
                >
                  <p style={{marginTop: 0}}>Partly true.</p>
                  <p>
                    The completion rate measures the quality of your content. The higher the completion rate, the more people found the course valuable and engaging enough to finish.
                  </p>
                  <p>But, there are still many pieces of the puzzle that you’re missing:</p>
                  <ul>
                    <li>Customer loyalty, which is measured by NPS.</li>
                    <li>Customer experience, which is measured by CSAT.</li>
                    <li>Revenue, which is the income generated from people who bought your course.</li>
                    <li>The number of signups, which indicates how well you are marketing the course.</li>
                  </ul>
                  <p style={{marginBottom: 0}}>
                    The correct answer is “all of the above”. Performance metrics are always used in conjunction with each other, to maximize their value.
                  </p>
                </OptionalQuestionItem>
                <OptionalQuestionItem
                  isTrue={true}
                  isOpen={isOpen}
                  value={value}
                  isSubmitted={isSubmitted}
                  id={6}
                  // error={error}
                  text="All of the above"
                >
                  <p style={{marginTop: 0}}>Ding, ding, ding!</p>
                  <p>
                    No one metric can paint you the whole picture. They are used for measuring the specific aspects of a product:</p>
                  <ul>
                    <li>NPS measures customer loyalty.</li>
                    <li>CSAT measures customer experience.</li>
                    <li>Completion rate measures your course’s success at prompting the audience to complete it.</li>
                    <li>The number of signups measures how well you are marketing the course.</li>
                    <li>Revenue measures the income generated from people buying the course.</li>
                  </ul>
                </OptionalQuestionItem>
              </List>
            </RadioGroup>
          </FormControl>
          <div style={{ color: "red", marginBottom: "20px", marginTop: "-10px"}}>{error && "choose option"}</div>
          {!isSubmitted && (<Button type="submit" variant="outlined" color="primary" size="small" disabled={!isSubmitActive}>
            Check Answer
          </Button>)}
        </form>
        {isSubmitted && (<Button
          type="button"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          endIcon={<SubdirectoryArrowLeftIcon />}
          onClick={() => handleClick(targetRef)}
        >
          Continue
        </Button>)}
      </Card>
    </Box>
  )
};
