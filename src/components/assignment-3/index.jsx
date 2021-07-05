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
  img: {
    maxWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  table: {
    borderCollapse: "collapse",
    borderRadius: "8px",
    "& tr td, & tr th": {
      textAlign: "center",
      padding: theme.spacing(1),
      borderColor: theme.palette.action.active,
    },
  },
}));

export const Assignment3 = ({ sectionRef, targetRef, handleClick, children }) => {
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
      selectedOptionId === "2" && setIsTrue(true);
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
        console.log("isContinueBtn1Active clicked")
        section1RefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsFinalContinueBntActive(true);
      }

      if (isFinalContinueBntActive && continueRefButton.current) {
        console.log("isContinueActive clicked", continueRefButton)
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
      <Card count={3} countAmount={10} isCounted={true}>
        <Box mb={2}>
          <Typography variant="body1">
            Slowly but surely, you’re piecing the evidence together.
            It seems that despite the NPS of 87%, the course has a low conversion rate.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            Which is a polite way of saying “not a whole lot of people give a damn about Wallet Detox“.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            The coffee that you poured in the morning has already gone cold.
            In deep thoughts, you waddle to the kitchen area, and on your way there you run into Nathan, fresh from his meeting.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            “So, how’s it going? Cracked the mystery yet?” he asks nonchalantly while browsing a vending machine for the perfect afternoon snack.<br/>
            “Almost, yeah. I figured out that not too many people sign up for the course, but those who do, like it a lot. But why is that?”<br/>
            “It’s kind of your job to know that, so you tell me. What would be the best way to find that out?”
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            You think for a second.
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
                    text="Check the analytics"
                  />
                  <OptionalQuestionItem
                    ref={option2ref}
                    isTrue={true}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="2"
                    symbol="b"
                    // error={error}
                    text="Check the target audience and the landing page"
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
                    text="Speak directly to the users"
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
                    text="Check the course materials"
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
