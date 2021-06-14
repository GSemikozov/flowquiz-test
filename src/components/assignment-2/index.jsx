import React, {useCallback, useEffect, useRef, useState} from "react";
import {Card} from "../card";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import CustomButton from "../button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {OptionalQuestionItem} from "../optional-question-item";
import ImageComponent from "material-ui-image";
import img2 from "./img2.gif";
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
    "& tr td, & tr th": {
      textAlign: "center",
      padding: theme.spacing(1),
    },
  },
}));

export const Assignment2 = ({ sectionRef, targetRef, handleClick, children }) => {
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
      selectedOptionId === "3" && setIsTrue(true);
      !error && setIsSubmitActive(false);
      !error && showAnswer(true);
    } else {
      setIsSubmitActive(false);
      setError(true);
    }
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
      console.log("----isFinalContinueBntActive----", isFinalContinueBntActive);

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
      <Card count={2} countAmount={10} isCounted={true}>
        <Box mb={2}>
          <Typography variant="body1">
            So far, so good. The only problem is that something went wrong with the NPS calculator. The numbers are all over the place!
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            You contact the IT department but it will be a while before they can fix it.
          </Typography>
        </Box>
        <Box>
          <ImageComponent
            src={img2}
            aspectRatio={2/1.25}
            className={classes.img}
          />
        </Box>
        <Box my={2}>
          <Typography variant="body1">
            Luckily, you’ve got a list of responses from all 1,000 people who have completed the course.
            You can calculate the NPS yourself using a table you quickly threw together.
          </Typography>
        </Box>
        <Box>
          <table width="100%" border={1} className={classes.table}>
            <thead>
            <tr>
              <th>Score</th>
              <th>Respondents</th>
              <th>Percentag</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>10</td>
              <td>150</td>
              <td>15</td>
            </tr>
            <tr>
              <td>9</td>
              <td>750</td>
              <td>75</td>
            </tr>
            <tr>
              <td>7 or 8</td>
              <td>70</td>
              <td>7%</td>
            </tr>
            <tr>
              <td>6</td>
              <td>20</td>
              <td>2</td>
            </tr>
            <tr>
              <td>>6</td>
              <td>10</td>
              <td>1%</td>
            </tr>
            </tbody>
          </table>
        </Box>
        <Box my={2}>
          <Typography variant="body1">
            Now, what’s the course’s NPS?
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
          <form onSubmit={handleSubmit}>
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
                    text="94%"
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
                    text="90%"
                  />
                  <OptionalQuestionItem
                    ref={option3ref}
                    isTrue={true}
                    isOpen={isOpen}
                    value={value}
                    isSubmitted={isSubmitted}
                    id="3"
                    symbol="c"
                    // error={error}
                    text="87%"
                  />
                  <OptionalQuestionItem
                    ref={option4ref}
                    isTrue={false}
                    isOpen={isOpen}
                    value={value}
                    isSubmitted={isSubmitted}
                    id="4"
                    symbol="d"
                    // error={error}
                    text="80%"
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
