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

export const Assignment8 = ({ sectionRef, targetRef, handleClick, children }) => {
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
      selectedOptionId === "4" && setIsTrue(true);
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
      <Card count={8} countAmount={10} isCounted={true}>
        <Box mb={2}>
          <Typography variant="body1">
            You let out a tired sigh as you slouch back into your chair. The new copy looks competent, but there???s still something missing.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            A second opinion is what you need ??? one straight from the horse???s mouth.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            You have no shortage of positive responses about the course, but how about feedback from the people who were this close to signing up for Wallet Detox?
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            You look up a list of all potential learners and the interactions they???ve had with the marketing campaign messages.
            You want to find a person who was the furthest along in your acquisition cycle.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Alright, here???s one ??? Jenny, 35. She initially signed up for the course and even opened all the newsletters but ultimately did not buy it.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            You call her up and hear an unenthused ???Hello???? on the other end.
            Judging by Jenny???s tone, she???s not too thrilled about receiving this call. You???d better make this quick.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Which question should you ask her?
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
                    value={value}
                    isSubmitted={isSubmitted}
                    id="1"
                    symbol="a"
                    // error={error}
                    text="At what stage did you reconsider buying the course?"
                  />
                  <OptionalQuestionItem
                    ref={option2ref}
                    isTrue={false}
                    isOpen={isOpen}
                    value={value}
                    isSubmitted={isSubmitted}
                    id="2"
                    symbol="b"
                    // error={error}
                    text="Would a special offer or discount make you buy the course?"
                  />
                  <OptionalQuestionItem
                    ref={option3ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="3"
                    symbol="c"
                    // error={error}
                    text="What information do you think the course should cover?"
                  />
                  <OptionalQuestionItem
                    ref={option4ref}
                    isTrue={true}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="4"
                    symbol="d"
                    // error={error}
                    text="Why did you sign up for the course?"
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
