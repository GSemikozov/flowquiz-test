import React, {useCallback, useEffect, useRef, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {Message} from "../message";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {OptionalQuestionItem} from "../optional-question-item";
import List from "@material-ui/core/List";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
// import {Intro} from "../intro";
import {OptionalQuestionAnswers} from "../optional-question-answers";
// import {OptionalQuestionAnswer} from "../optional-question-answer";
import {Answers} from "./answers";
import CustomButton from "../button";
import Image from "material-ui-image";
import img1 from "./img1.gif";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
  },
  sectionBlock: {
    height: 0,
    overflow: "hidden",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  answerTypography: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  visible: {
    height: "auto",
  },
  animated: {
    opacity: 0,
    animation: `$appearing 200ms ${theme.transitions.easing.easeInOut}`,
    animationFillMode: "forwards",
    animationDelay: "2s",
    "& + $animated": {
      animationDelay: "1s",
    },
    "&:last-child": {
      animationDelay: "3s",
    },
  },
  "@keyframes appearing": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
  // submitBtn: {
  //   color: "#fff",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  // },
}));

// const userAvatar = "data:image/webp;base64,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";

export const Assignment1 = ({ username, email, sectionRef, targetRef, handleClick, systemMessageAvatar, children }) => {
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
  const [isContinueBtn2Active, setIsContinueBtn2Active] = useState(false);
  const [isFinalContinueBntActive, setIsFinalContinueBntActive] = useState(false);
  const [isAnimateChatMassages, setIsAnimateChatMassages] = useState(false);

  const section1Ref = useRef();
  const section2Ref = useRef();
  const formRef = useRef();
  const section1RefButton = useRef();
  const section2RefButton = useRef();
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
    buttonRef === section1RefButton && setIsAnimateChatMassages(true);
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
      selectedOptionId === "6" && setIsTrue(true);
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
      console.log("enter pressed")
      console.log("----isContinueBtn1Active----", isContinueBtn1Active);
      console.log("----isContinueBtn2Active----", isContinueBtn2Active);
      console.log("----isFinalContinueBntActive----", isFinalContinueBntActive);

      if (isContinueBtn1Active) {
        console.log("isContinueBtn1Active clicked")
        section1RefButton.current.click();
        setIsAnimateChatMassages(true);
        setIsContinueBtn1Active(false);
        setIsContinueBtn2Active(true);
      }

      if (isContinueBtn2Active) {
        console.log("isContinueBtn2Active clicked")
        section2RefButton.current.click();
        setIsContinueBtn2Active(false);
        setIsFinalContinueBntActive(true)
      }

      if (isFinalContinueBntActive && continueRefButton.current) {
        console.log("isContinueActive clicked", continueRefButton)
        continueRefButton.current && continueRefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsContinueBtn2Active(false);
        setIsFinalContinueBntActive(false);
      }
    }
  }, [isContinueBtn1Active, isContinueBtn2Active, isFinalContinueBntActive]);

  useEffect(() => {
    console.log("useEffect runs")
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
  }, [isContinueBtn1Active, isContinueBtn2Active, isFinalContinueBntActive, continueRefButton, handleOnEnterContinue]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Card count={1} countAmount={10} isCounted={true}>
        <Box>
          <Box mb={2}>
            <Typography variant="body1">
              It’s your first day at Educately Inc, the leading platform for courses and educational content.
              You came to the office a bit earlier to enjoy your customary cup of coffee.
            </Typography>
          </Box>
          <Box>
            <Image
              src={img1}
              aspectRatio={2/1.5}
              animationDuration={0}
            />
          </Box>
          <Box mt={2}>
            <Typography variant="body1">
              But no sooner does the coffee touch your lips than you suddenly get a message from Nathan, the CEO of Educately Inc.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1">
              Uh-oh, are you in trouble already?
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
          >Yep</CustomButton>
        </Box>
        <Box ref={section1Ref} className={`${classes.sectionBlock}`} style={{marginBottom: "-60px"}}>
          <Fade
            in={isAnimateChatMassages}
            style={{ transitionDelay: isAnimateChatMassages ? '400ms' : '0ms' }}
          >
            <Box mb={2}>
              <Message avatar={systemMessageAvatar} name="Fred Pedersen" text="Hi and welcome aboard!👏" type="system" />
            </Box>
          </Fade>
          <Fade
            in={isAnimateChatMassages}
            style={{ transitionDelay: isAnimateChatMassages ? '2000ms' : '0ms' }}
          >
            <Box mb={2}>
              <Message avatar={systemMessageAvatar} name="Fred Pedersen" text="I know it's your first day but I want you to do me a solid 🙏" type="system" />
            </Box>
          </Fade>
          <Fade
            in={isAnimateChatMassages}
            style={{ transitionDelay: isAnimateChatMassages ? '4000ms' : '0ms' }}
          >
            <Box mb={2}>
              <Message
                avatar={systemMessageAvatar}
                text="Take a look at Wallet Detox. It's our new financial course for women, and it's been performing badly."
                type="system"
                name="Fred Pedersen"
              />
            </Box>
          </Fade>
          <Fade
            in={isAnimateChatMassages}
            style={{ transitionDelay: isAnimateChatMassages ? '6000ms' : '0ms' }}
          >
            <Box mb={2}>
              <Message
                // avatar={userAvatar}
                name={username}
                email={email}
                text="Sure, but badly how? Can you be more specific pls?"
                type="default"
              />
            </Box>
          </Fade>
          <Fade
            in={isAnimateChatMassages}
            style={{ transitionDelay: isAnimateChatMassages ? '8000ms' : '0ms' }}
          >
            <Box>
              <Message
                avatar={systemMessageAvatar}
                text="Sorry, no can do. On a meeting right now. You'll figure it out😉"
                type="system"
                name="Fred Pedersen"
              />
            </Box>
          </Fade>
          <CustomButton
            ref={section2RefButton}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleInnerSectionScroll(section2Ref, section2RefButton, "start")}
            style={{marginTop: "32px"}}
          >Continue</CustomButton>
        </Box>
        <Box ref={section2Ref} className={`${classes.sectionBlock}`} style={{paddingTop: "60px"}}>
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
          <Box ref={formRef}>

          <form onSubmit={handleSubmit}>
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
                    text="NPS (Net Promoter Score)"
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
                    text="CSAT (Customer Satisfaction Index)"
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
                    text="Number of signups"
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
                    text="Revenue"
                  />
                  <OptionalQuestionItem
                    ref={option5ref}
                    isTrue={false}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="5"
                    symbol="e"
                    // error={error}
                    text="COR (Completion Rate)"
                  />
                  <OptionalQuestionItem
                    ref={option6ref}
                    isTrue={true}
                    isOpen={isOpen}
                    hasIcons={true} value={value}
                    isSubmitted={isSubmitted}
                    id="6"
                    symbol="f"
                    // error={error}
                    text="All of the above"
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
                // className={classes.submitBtn}
              >
                Check Answer
              </CustomButton>
            )}
          </form>
          </Box>
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
