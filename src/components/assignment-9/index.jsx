import React, {useCallback, useEffect, useRef, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import CustomButton from "../button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {OptionalQuestionItem} from "../optional-question-item";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import {OptionalQuestionAnswers} from "../optional-question-answers";
import {Answers} from "./answers";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
  sectionBlock: {
    height: 0,
    overflow: "hidden",
  },
  answerTypography: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  visible: {
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export const Assignment9 = ({ sectionRef, targetRef, handleClick, children }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isOpen, showAnswer] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [isContinueActive, setIsContinueActive] = useState(true);
  const [isContinueBtn1Active, setIsContinueBtn1Active] = useState(true);
  const [isFinalContinueBntActive, setIsFinalContinueBntActive] = useState(false);

  const section1Ref = useRef();
  const formRef = useRef();
  const section1RefButton = useRef();
  const continueRefButton = useRef();
  const chooseOptionRefBtn = useRef();
  const option1ref = useRef();
  const option2ref = useRef();
  const option3ref = useRef();
  const option4ref = useRef();
  const option5ref = useRef();
  const option6ref = useRef();

  const handleInnerSectionScroll = (ref, buttonRef, alignType) => {
    ref.current.classList.add(classes.visible);
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: alignType,
        inline: 'start',
      });
    }, 100)
    buttonRef.current.style.display = "none";
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setSelectedOptionId(event.target.id);
    setError(false);
    setIsSubmitActive(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      setError(false);
      setIsSubmitted(true);
      selectedOptionId === "3" && setIsTrue(true);
      !error && setIsSubmitActive(false);
      !error && showAnswer(true);
    } else {
      setIsSubmitActive(false);
      setError(true);
    }

    // won't work in section close to page end
    setTimeout(() => {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }, 300);
  };

  const handleContinue = (event) => {
    handleClick(targetRef);
    setIsContinueActive(false);
    event.target.style.display = "none";
  }

  const handleOnEnterContinue = useCallback((event) => {
    if (event.key === 'Enter') {
      if (isContinueBtn1Active) {
        section1RefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsFinalContinueBntActive(true);
      }

      if (isFinalContinueBntActive && continueRefButton.current) {
        continueRefButton.current && continueRefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsFinalContinueBntActive(false);
      }
    }
  }, [isContinueBtn1Active, isFinalContinueBntActive]);

  useEffect(() => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }, [sectionRef]);

  useEffect(() => {
    window.addEventListener("keypress", handleOnEnterContinue, false);

    // cleanup this component
    return () => {
      window.removeEventListener("keypress", handleOnEnterContinue, false);
    };
  }, [isContinueBtn1Active, isFinalContinueBntActive, continueRefButton, handleOnEnterContinue]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Card count={9} countAmount={10} isCounted={true}>
        <Box mb={2}>
          <Typography variant="body1">
            The landing page looks better by the minute. You feel like this is going to be a big success,
            especially considering that everyone who has taken the course loved it.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Come to think of it, there were so many glowing reviews from the learners. It???d be a waste not to use them to market the course.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            What did that colleague of yours use to say? ???Social proof is one of the best ways to build trust in your product.???
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            After a few minutes, you end up with six quotes you think are the strongest.
            Including all five on a single landing page would be overkill, so you decide to settle on just one.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Which one would it be?
          </Typography>
        </Box>
        <CustomButton
          ref={section1RefButton}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleInnerSectionScroll(section1Ref, section1RefButton, "center")}
          style={{marginTop: "20px"}}
        >Continue</CustomButton>
        <Box ref={section1Ref} className={`${classes.sectionBlock}`}>
          <form onSubmit={handleSubmit} ref={formRef}>
            <FormControl component="fieldset" error={error} style={{width: "100%"}}>
              <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                <List style={{ counterReset: "alphabeticList" }}>
                  <OptionalQuestionItem
                    ref={option1ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="1"
                    symbol="a"
                    // error={error}
                    text={`"Probably the best course I've purchased on Educately, insane value. My wife swears by Wallet Detox." Tony, 35.`}
                  />
                  <OptionalQuestionItem
                    ref={option2ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="2"
                    symbol="b"
                    // error={error}
                    text={`"Wallet Detox helped me structure and streamline my finances through cutting-edge accounting strategies." Bailey, 36.`}
                  />
                  <OptionalQuestionItem
                    ref={option3ref}
                    isTrue={true}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="3"
                    symbol="c"
                    // error={error}
                    text={`"A simple, effective course that any woman in her 20s and beyond should watch." Faith, 29.`}
                  />
                  <OptionalQuestionItem
                    ref={option4ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="4"
                    symbol="d"
                    // error={error}
                    text={`"I just wanted to share my thoughts and express deep gratitude to the author of Wallet Detox.
                    I'm glad I took the time to finish it, as it opened my eyes to a lot of deep-seated problems I and many other women have in our lives.
                    I used to really struggle to save an extra dollar for a rainy day, but not anymore. I am truly a financially independent woman now."
                    Clarissa, 44.`}
                  />
                  <OptionalQuestionItem
                    ref={option5ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="3"
                    symbol="e"
                    // error={error}
                    text={`"What an amazing course! Thank you, Educately, for featuring it. Keep up the great work!" Sonya, 22.`}
                  />
                  <OptionalQuestionItem
                    ref={option6ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="3"
                    symbol="f"
                    // error={error}
                    text={`"A fantastic course on financial independence that I wish would run for longer. It left me with a few questions." Tanya, 19.`}
                  />
                </List>
              </RadioGroup>
            </FormControl>
            <OptionalQuestionAnswers isOpen={isOpen} isTrue={isTrue}>
              <Answers selectedOptionId={selectedOptionId} />
            </OptionalQuestionAnswers>
            {error && <div style={{ color: "red", marginBottom: "20px", marginTop: "-10px"}}>choose option</div>}
            {!isSubmitted && (
              <CustomButton
                ref={chooseOptionRefBtn}
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!isSubmitActive}
              >
                Check Answer
              </CustomButton>
            )}
          </form>
        </Box>
        {isSubmitted && isContinueActive && (<CustomButton
          ref={continueRefButton}
          type="button"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleContinue}
          style={{marginTop: "8px"}}
        >
          Continue
        </CustomButton>)}
      </Card>
    </Box>
  )
};
