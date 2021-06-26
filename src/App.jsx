// import logo from './logo.svg';
import * as React from "react";
import './App.css';

// import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

import { Card } from './components/card';
// import { CardHeading } from './components/card-heading';
// import { CustomRating } from './components/custom-rating';
import { Intro } from './components/intro';
// import { Message } from './components/message';
// import { OptionalQuestion } from './components/optional-question';
// import { QuestionWithAnswer } from './components/question-with-answer';
// import { Statistics } from './components/statistics';
import {useRef, useState} from "react";
import {Assignment1} from "./components/assignment-1";
import {Assignment2} from "./components/assignment-2";
// import {Ads} from "./components/ads";
import {Review} from "./components/review";
import {Assignment3} from "./components/assignment-3";
import {Assignment4} from "./components/assignment-4";
import {Assignment5} from "./components/assignment-5";
import {Assignment6} from "./components/assignment-6";
import {Assignment8} from "./components/assignment-8";
import {Assignment9} from "./components/assignment-9";
import {Assignment10} from "./components/assignment-10";
import {Assignment7} from "./components/assignment-7";

// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    //
  },
  hidden: {
    display: "none",
  },
  section: {
    marginTop: "40px",
  },
}));

// const useShow = (initialState = false) => {
//   // Initialize the state
//   const [state, setState] = useState(initialState);
//
//   const show = useCallback(() => setState(state => true), []);
//
//   return [state, show];
// }

function App() {
  const classes = useStyles();

  const [isSection1Shown, setIsSection1Shown] = useState(false);
  const [isSection2Shown, setIsSection2Shown] = useState(false);
  const [isSection3Shown, setIsSection3Shown] = useState(false);
  const [isSection4Shown, setIsSection4Shown] = useState(false);
  const [isSection5Shown, setIsSection5Shown] = useState(false);
  const [isSection6Shown, setIsSection6Shown] = useState(false);
  const [isSection7Shown, setIsSection7Shown] = useState(false);
  const [isSection8Shown, setIsSection8Shown] = useState(false);
  const [isSection9Shown, setIsSection9Shown] = useState(false);
  const [isSection10Shown, setIsSection10Shown] = useState(false);
  const [isSectionReviewShown, setIsSectionReviewShown] = useState(false);

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const section8Ref = useRef();
  const section9Ref = useRef();
  const section10Ref = useRef();
  const sectionReviewRef = useRef();

  const openCorrectSection = (ref) => {
    switch(ref) {
      case section1Ref:
        return setIsSection1Shown(true);
      case section2Ref:
        return setIsSection2Shown(true);
      case section3Ref:
        return setIsSection3Shown(true);
      case section4Ref:
        return setIsSection4Shown(true);
      case section5Ref:
        return setIsSection5Shown(true);
      case section6Ref:
        return setIsSection6Shown(true);
      case section7Ref:
        return setIsSection7Shown(true);
      case section8Ref:
        return setIsSection8Shown(true);
      case section9Ref:
        return setIsSection9Shown(true);
      case section10Ref:
        return setIsSection10Shown(true);
      case sectionReviewRef:
        return setIsSectionReviewShown(true);
      default:
        return;
    }
  }

  const moveToSection = (ref) => {
    // const section = ref.current;
    // section.style.display = "block";
    openCorrectSection(ref);
    // section.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'center',
    // });
  }

  return (
    <div className="wrapper">
      <header className="header">
        <Container>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <svg
            width="107"
            height="32"
            viewBox="0 0 107 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.8786 23.6003C28.0087 19.7189 30 15.0141 30 11.4554C30 9.70944 29.579 8.48045 28.9524 7.57613C28.318 6.66051 27.3695 5.92939 26.0797 5.36105C23.4197 4.18899 19.6796 3.86328 15.5493 3.86328C11.6992 3.86328 8.25948 4.82351 5.83948 6.5834C3.48776 8.29364 2 10.8173 2 14.3255C2 18.025 3.42229 22.0165 5.79133 25.0632C8.16025 28.1097 11.2925 29.9992 14.6479 29.9992C17.8874 29.9992 21.7127 27.526 24.8786 23.6003ZM14.6479 31.9992C22.9451 31.9992 32 19.7981 32 11.4554C32 3.11276 23.8465 1.86328 15.5493 1.86328C7.25206 1.86328 0 5.98284 0 14.3255C0 22.6682 6.35065 31.9992 14.6479 31.9992Z"
              fill="#A8D1E7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.0953 23.6595C28.932 21.4393 30 18.2262 30 14.4133C30 11.0794 28.0507 8.0102 24.9107 5.68923C21.7723 3.36949 17.6897 2 14.0177 2C10.448 2 8.10498 3.28297 6.59066 5.28674C5.01122 7.37669 4.15381 10.494 4.15381 14.4133C4.15381 17.849 5.94585 21.022 8.80825 23.3945C11.677 25.7722 15.4661 27.2039 19.0915 27.2039C22.6406 27.2039 25.2936 25.8376 27.0953 23.6595ZM19.0915 29.2039C27.3333 29.2039 32 22.7486 32 14.4133C32 6.07796 22.2594 0 14.0177 0C5.77587 0 2.15381 6.07796 2.15381 14.4133C2.15381 22.7486 10.8497 29.2039 19.0915 29.2039Z"
              fill="#374785"
            />
            <path
              d="M42.8438 22V17.1172H47.8359V15.8672H42.8438V11.9922H48.2812V10.7266H41.4375V22H42.8438ZM50.5 22H51.8438V10.2344H50.5V22ZM57.9141 22.1484C60.3125 22.1484 61.7969 20.4922 61.7969 17.7891C61.7969 15.0781 60.3125 13.4297 57.9141 13.4297C55.5156 13.4297 54.0312 15.0781 54.0312 17.7891C54.0312 20.4922 55.5156 22.1484 57.9141 22.1484ZM57.9141 20.9375C56.3203 20.9375 55.4219 19.7812 55.4219 17.7891C55.4219 15.7891 56.3203 14.6406 57.9141 14.6406C59.5078 14.6406 60.4062 15.7891 60.4062 17.7891C60.4062 19.7812 59.5078 20.9375 57.9141 20.9375ZM74.1875 13.5781H72.8359L71.1797 20.3125H71.0547L69.1719 13.5781H67.8828L66 20.3125H65.875L64.2188 13.5781H62.8594L65.2188 22H66.5781L68.4531 15.4844H68.5781L70.4609 22H71.8281L74.1875 13.5781ZM78.7734 13.4297C76.6406 13.4297 75.25 15.1484 75.25 17.7891C75.25 20.4453 76.625 22.1484 78.7734 22.1484C79.9609 22.1484 80.8672 21.6562 81.4062 20.7344H81.5312V24.8125H82.8906V13.5781H81.5938V14.9844H81.4688C80.9688 14.0391 79.9219 13.4297 78.7734 13.4297ZM79.0781 20.9375C77.5469 20.9375 76.6406 19.7656 76.6406 17.7891C76.6406 15.8203 77.5547 14.6406 79.0859 14.6406C80.6094 14.6406 81.5703 15.8594 81.5703 17.7891C81.5703 19.7266 80.6172 20.9375 79.0781 20.9375ZM92.2344 13.5781H90.8906V18.5625C90.8906 20.0391 90.0781 20.9219 88.5938 20.9219C87.25 20.9219 86.6875 20.2188 86.6875 18.7031V13.5781H85.3438V19.0312C85.3438 21.0234 86.3281 22.1484 88.2188 22.1484C89.5078 22.1484 90.4062 21.6172 90.8281 20.6797H90.9531V22H92.2344V13.5781ZM95.4688 11.9531C95.9844 11.9531 96.4062 11.5312 96.4062 11.0156C96.4062 10.5 95.9844 10.0781 95.4688 10.0781C94.9531 10.0781 94.5312 10.5 94.5312 11.0156C94.5312 11.5312 94.9531 11.9531 95.4688 11.9531ZM94.7969 22H96.1406V13.5781H94.7969V22ZM98.5078 22H104.992V20.875H100.133V20.75L104.969 14.5859V13.5781H98.5156V14.7031H103.367V14.8281L98.5078 21.0156V22Z"
              fill="#1A1F36"
            />
          </svg>
        </Container>
      </header>

      <main className="main">
        <Container fixed={true} maxWidth="md">
          <Box>
            <Card className={classes.card}>
              <Intro handleClick={() => moveToSection(section1Ref)} />
            </Card>
          </Box>
          {isSection1Shown && (<Assignment1 sectionRef={section1Ref} targetRef={section2Ref} handleClick={moveToSection} />)}
          {isSection2Shown && (<Assignment2 sectionRef={section2Ref} targetRef={section3Ref} handleClick={moveToSection} />)}
          {isSection3Shown && (<Assignment3 sectionRef={section3Ref} targetRef={section4Ref} handleClick={moveToSection} />)}
          {isSection4Shown && (<Assignment4 sectionRef={section4Ref} targetRef={section5Ref} handleClick={moveToSection} />)}
          {isSection5Shown && (<Assignment5 sectionRef={section5Ref} targetRef={section6Ref} handleClick={moveToSection} />)}
          {isSection6Shown && (<Assignment6 sectionRef={section6Ref} targetRef={section8Ref} handleClick={moveToSection} />)}
          {/*<Assignment7 sectionRef={section7Ref} targetRef={section8Ref} handleClick={moveToSection} />*/}
          {isSection7Shown && (<Assignment7 sectionRef={section7Ref} targetRef={section8Ref} handleClick={moveToSection} />)}
          {isSection8Shown && (<Assignment8 sectionRef={section8Ref} targetRef={section9Ref} handleClick={moveToSection} />)}
          {isSection9Shown && (<Assignment9 sectionRef={section9Ref} targetRef={section10Ref} handleClick={moveToSection} />)}
          {isSection10Shown && (<Assignment10 sectionRef={section10Ref} targetRef={sectionReviewRef} handleClick={moveToSection} />)}
          {/*<Ads />*/}
          {isSectionReviewShown && (<Review sectionRef={sectionReviewRef} />)}
        </Container>
      </main>
    </div>
  );
}

export default App;
