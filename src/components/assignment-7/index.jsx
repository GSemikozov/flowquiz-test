import React, {useCallback, useEffect, useRef, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {OptionalQuestionItem} from "../optional-question-item";
import List from "@material-ui/core/List";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import CustomButton from "../button";
import Image from "material-ui-image";
import img7 from "./img7.gif";
import {FormAnswer} from "./form-answer";

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
  table: {
    borderCollapse: "collapse",
    borderRadius: "8px",
    "& tr td, & tr th": {
      width: "50%",
      textAlign: "center",
      padding: theme.spacing(1),
      borderColor: theme.palette.action.active,
    },
  },
  blockquote: {
    position: "relative",
    background: "#f9f9f9",
    margin: 0,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderLeft: "10px solid #ccc",
    // "&:before": {
    //   content: "open-quote",
    //   position: "absolute",
    //   left: theme.spacing(1),
    //   top: 0,
    //   color: theme.palette.primary.light,
    //   fontSize: "5em",
    //   lineHeight: 1,
    //   height: "30px",
    // },
    // "&:after": {
    //   content: "close-quote",
    //   position: "absolute",
    //   right: theme.spacing(1),
    //   bottom: theme.spacing(1),
    //   color: theme.palette.primary.light,
    //   fontSize: "5em",
    //   lineHeight: 1,
    //   height: "30px",
    // },
  },
}));

export const Assignment7 = ({ sectionRef, targetRef, handleClick, children }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  // const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  // const [isContinueActive, setIsContinueActive] = useState(true);
  const [isHiddenOptionsVisible, setHiddenOptionsVisible] = useState(false);
  const [isContinueBtn1Active, setIsContinueBtn1Active] = useState(true);
  const [isContinueBtn2Active, setIsContinueBtn2Active] = useState(false);
  const [isContinueBtn3Active, setIsContinueBtn3Active] = useState(false);
  const [isContinueBtn4Active, setIsContinueBtn4Active] = useState(false);
  const [isFinalContinueBntActive, setIsFinalContinueBntActive] = useState(false);

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const hiddenOptionsRef = useRef();
  const section1RefButton = useRef();
  const section2RefButton = useRef();
  const section3RefButton = useRef();
  const section4RefButton = useRef();
  const continueRefButton = useRef();
  const chooseOptionRefBtn = useRef();
  const option1ref = useRef();
  const option2ref = useRef();
  const option3ref = useRef();

  const handleInnerSectionScroll = (ref, buttonRef, alignType, hasOptions = false) => {
    ref.current.classList.add(classes.visible);

    if (hasOptions) {
      setHiddenOptionsVisible(true);
    }

    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: alignType,
        inline: 'start',
      });
    }, 100);

    if (buttonRef) {
      buttonRef.current.style.display = "none";
    }
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    // setSelectedOptionId(event.target.id);
    setError(false);
    setIsSubmitActive(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== "") {
      setError(false);
      setIsSubmitted(true);
      // selectedOptionId === "6" && setIsTrue(true); // TODO: submit this part without true value
      !error && setIsSubmitActive(false);
    } else {
      setIsSubmitActive(false);
      setError(true);
    }

    setTimeout(() => {
      handleContinue(event);
    }, 1000)
  };

  const handleContinue = (event) => {
    handleClick(targetRef);
    // setIsContinueActive(false);
    event.target.style.display = "none";
  }

  const handleOnEnterContinue = useCallback((event) => {
    if (event.key === 'Enter') {
      if (isContinueBtn1Active) {
        section1RefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsContinueBtn2Active(true);
      }

      if (isContinueBtn2Active) {
        section2RefButton.current.click();
        setIsContinueBtn2Active(false);
        setIsContinueBtn3Active(false);
      }

      if (isContinueBtn3Active) {
        section3RefButton.current.click();
        setIsContinueBtn3Active(false);
        setIsContinueBtn4Active(false);
      }

      if (isContinueBtn4Active) {
        section4RefButton.current.click();
        setIsContinueBtn4Active(false);
        setIsFinalContinueBntActive(true)
      }

      if (isFinalContinueBntActive && continueRefButton.current) {
        continueRefButton.current && continueRefButton.current.click();
        setIsContinueBtn1Active(false);
        setIsContinueBtn2Active(false);
        setIsContinueBtn3Active(false);
        setIsFinalContinueBntActive(false);
      }
    }
  }, [
    isContinueBtn1Active,
    isContinueBtn2Active,
    isContinueBtn3Active,
    isFinalContinueBntActive,
    isContinueBtn4Active,
  ]);

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
  }, [
    isContinueBtn1Active,
    isContinueBtn2Active,
    isContinueBtn3Active,
    isContinueBtn4Active,
    isFinalContinueBntActive,
    continueRefButton,
    handleOnEnterContinue
  ]);

  return (
    <Box ref={sectionRef} className={classes.section}>
      <Card count={7} countAmount={10} isCounted={true}>
        <Box>
          <Box mb={2}>
            <Typography variant="body1">
              When you visit the landing page, your first instinct is to immediately close it and delete your browser history.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1">
              Good god, it looks like a time capsule straight from the 90s. Are you being pranked?
              Is somebody purposely sabotaging the success of Wallet Detox?
            </Typography>
          </Box>
          <Box>
            <Image
              src={img7}
              aspectRatio={2/1.5}
            />
          </Box>
          <Box mt={2}>
            <Typography variant="body1">
              The design is easy to fix; it’s the copy you’re concerned about.
              Oh well, rewriting huge amounts of text is a lot like eating an elephant — you do it one bite at a time.
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="body1">
              Let’s start from the very top. This intro doesn’t do Wallet Detox any service:
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
          <Box>
            <blockquote className={classes.blockquote}>
              <Box mb={2}>
                <Typography variant="body1">
                  Ladies, women and girls! Whether you work from home or go to college, Wallet Detox is a course that you need in your life!
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1">
                  This course:
                </Typography>
              </Box>
              <Box mb={2}>
                <ul>
                  <li>
                    <Typography variant="body1" component="span">is for married/single/widowed women</Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      received many prestigious awards
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      will make you money-smart
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      Is only 10 hours long, broken into chapters!
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      No hidden fees or additional payments, LOW PRICE!
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      100% secure
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" component="span">
                      Includes homework that will be checked by tutors and students
                    </Typography>
                  </li>
                </ul>
              </Box>
            </blockquote>
          </Box>
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
              Yuck! You want to take a shower simply looking at this mess.
            </Typography>
          </Box>
          <Box mt={2} mb={2}>
            <Typography variant="body1">
              What is missing in this intro and what would you change?
              Keep in mind what you’ve learned about the course’s target audience: their interests, backgrounds, needs and wants.
            </Typography>
          </Box>
          <FormAnswer onSubmit={() => handleInnerSectionScroll(section3Ref, false, "start", true)} />
        </Box>
        <Box ref={section3Ref} className={`${classes.sectionBlock}`}>
          <Box mb={2} mt={3}>
            <Typography variant="body1">
              This is a self-evaluation question.
              Please grade how well you think you have answered the question by looking at our version and then choosing one of the options below.
            </Typography>
          </Box>
          <Box mb={2} style={{background: "#f9f9f9", padding: "16px"}}>
            <Box mb={2}>
              <Typography variant="body1">
                There are many ways you can fix a landing page,
                but the main thing is that you need to emphasize the value your clients will be getting out of your product or service.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                The value is not how long/short or how good the course is. The value is directly linked to solving a pain point of a client.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                Compare these two descriptions:
              </Typography>
            </Box>
            <Box mb={2}>
              <table width="100%" border={1} className={classes.table}>
                <thead>
                <tr>
                  <th>Focus on the product</th>
                  <th>Focus on the value and benefits</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    Learn how to live your life with a dog. In 32 engaging lessons,
                    you will learn the techniques for balancing yourself and your pet and take your relationship with your dog to the next level.
                  </td>
                  <td>
                    Fix your dog's behavior problems, such as barking at the door,
                    spoiling things, being afraid of fireworks, poor hygiene, and extortion of treats.
                  </td>
                </tr>
                </tbody>
              </table>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                See how the second example focuses on specific problems the client has? Your landing page should follow the same principle.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                First, let’s identify the main problems our clients experience:
              </Typography>
            </Box>
            <Box mb={2}>
              <ol>
                <li>
                  I have a relatively high salary, but never enough money.
                </li>
                <li>
                  I buy a lot of stuff which I barely use.
                </li>
                <li>
                  I am afraid that if I lose my job, I will have no way to pay my bills.
                </li>
              </ol>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                Now, let’s identify the main obstacles to solving these problems:
              </Typography>
            </Box>
            <Box mb={2}>
              <ol>
                <li>
                  I don’t understand finance, it is too complicated.
                </li>
                <li>
                  I don’t want to give up my lifestyle.
                </li>
                <li>
                  My partner handles all the finances.
                </li>
              </ol>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                We  should clearly answer these 5 questions on the landing page, preferably at the top.
              </Typography>
            </Box>
            <Box mb={2}>
              <ol>
                <li>
                  <b>What is it?</b> What the product is exactly, in no ambiguous terms.
                </li>
                <li>
                  <b>Who is this for?</b> Who the product is aimed at and who benefits from it the most.
                </li>
                <li>
                  <b>Who/what is it against?</b> The main problems the product was made to solve.
                </li>
                <li>
                  <b>What is the benefit?</b> What changes should a client expect once they have used the product?
                  Why are these changes a good thing?
                </li>
                <li>
                  <b>How to use it?</b> Come up with real-life situations where the benefits will be useful.
                </li>
              </ol>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                Here is one way:
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                <b>Wallet detox</b>
              </Typography>
              <Typography variant="body1">
                A personal finance online course for women.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                Stop living from paycheck to paycheck. In 3 weeks, you will learn how to achieve financial wellness and literacy.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                Wallet Detox will teach you how to:
              </Typography>
            </Box>
            <Box mb={2}>
              <ul>
                <li>Understand personal finance and accounting</li>
                <li>Stop buying stuff you don’t need</li>
                <li>Get off the credit hook</li>
                <li>Handle losing your job or getting divorced without stress</li>
              </ul>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                You will join a community of like-minded women and get your knowledge tested in a safe, friendly environment
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Ditch debt. Save money. Build wealth.
              </Typography>
            </Box>
          </Box>
          <CustomButton
            ref={section4RefButton}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleInnerSectionScroll(section4Ref, section4RefButton, "center")}
            style={{marginTop: "20px"}}
          >Continue</CustomButton>
        </Box>
        <Box ref={section4Ref} className={`${classes.sectionBlock}`}>
          {isHiddenOptionsVisible && (
            <form ref={hiddenOptionsRef} onSubmit={handleSubmit}>
              <FormControl component="fieldset" error={error} style={{width: "100%"}}>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                  <List style={{ counterReset: "alphabeticList" }}>
                    <OptionalQuestionItem
                      ref={option1ref}
                      isTrue={true}
                      hasIcons={false}
                      value={value}
                      preventSubmitBySymbol={true}
                      isSubmitted={isSubmitted}
                      id="1"
                      symbol="a"
                      // error={error}
                      text="Entirely correct"
                    />
                    <OptionalQuestionItem
                      ref={option2ref}
                      isTrue={false}
                      hasIcons={false}
                      value={value}
                      preventSubmitBySymbol={true}
                      isSubmitted={isSubmitted}
                      id="2"
                      symbol="b"
                      // error={error}
                      text="Mostly correct"
                    />
                    <OptionalQuestionItem
                      ref={option3ref}
                      isTrue={false}
                      hasIcons={false}
                      value={value}
                      preventSubmitBySymbol={true}
                      isSubmitted={isSubmitted}
                      id="3"
                      symbol="c"
                      // error={error}
                      text="Incorrect"
                    />
                  </List>
                </RadioGroup>
              </FormControl>
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
                  Continue
                </CustomButton>
              )}
            </form>
          )}
        </Box>
        {/*{isSubmitted && isContinueActive && (<CustomButton*/}
        {/*  ref={continueRefButton}*/}
        {/*  type="button"*/}
        {/*  variant="contained"*/}
        {/*  color="primary"*/}
        {/*  size="large"*/}
        {/*  onClick={handleContinue}*/}
        {/*  style={{marginTop: "8px"}}*/}
        {/*>*/}
        {/*  Continue*/}
        {/*</CustomButton>)}*/}
      </Card>
    </Box>
  )
};
