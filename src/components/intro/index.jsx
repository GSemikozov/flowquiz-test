import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import React from 'react';

import { CardHeading } from '../card-heading';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  socials: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 0,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

export const Intro = ({handleClick}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.wrapper}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: 10 }}
      >
        <g clipPath="url(#clip0)">
          <path
            d="M125.805 31.4514V26.6127C124.472 26.6127 123.386 25.5259 123.386 24.1934H118.547C118.547 28.1945 121.804 31.4514 125.805 31.4514Z"
            fill="#848700"
          />
          <path
            d="M108.871 29.0322H104.033C104.033 30.3648 102.946 31.4516 101.613 31.4516V36.2903C105.614 36.2903 108.871 33.0334 108.871 29.0322Z"
            fill="#848700"
          />
          <path d="M111.291 0H116.13V9.67742H111.291V0Z" fill="#848700" />
          <path
            d="M128.633 8.32956L133.472 1.07031L137.499 3.75428L132.659 11.0135L128.633 8.32956Z"
            fill="#848700"
          />
          <path
            d="M89.9277 3.76136L93.9537 1.07739L98.7924 8.33664L94.7664 11.0206L89.9277 3.76136Z"
            fill="#848700"
          />
          <path
            d="M142.158 41.6512C143.772 39.8249 144.866 37.5626 145.106 35.0511C145.429 31.6454 144.302 28.2502 142.017 25.7352C140.098 23.623 137.49 22.268 134.692 21.8852C132.702 16.1156 127.205 12.0968 120.968 12.0968C118.408 12.0968 115.928 12.7796 113.71 14.0826C111.491 12.7796 109.012 12.0968 106.452 12.0968C100.214 12.0968 94.7175 16.1156 92.7293 21.8852C89.932 22.268 87.3248 23.623 85.4051 25.7352C83.1169 28.2502 81.9923 31.6454 82.3159 35.0535C82.8995 41.1727 88.3691 45.9677 94.7707 45.9677H99.1936V53.8519L74.9906 39.7327C74.003 39.1574 72.9386 38.7239 71.9156 38.4699L58.0645 34.4711V30.1451C61.0261 27.4859 62.9032 23.6419 62.9032 19.3548V14.5161C62.9032 6.51029 56.3929 0 48.3871 0C41.1822 0 35.2035 5.27934 34.0789 12.1688C12.7288 26.0931 0 49.4834 0 75C0 116.353 33.6465 150 75 150C116.353 150 150 116.353 150 75C150 63.4277 147.273 51.9488 142.158 41.6512ZM87.131 34.5916C86.9326 32.5113 87.5906 30.5207 88.9834 28.9886C90.3584 27.4765 92.3159 26.6129 94.1245 26.5987L96.5639 26.6956L96.9679 24.6944C97.8728 20.1995 101.862 16.9355 106.452 16.9355C108.525 16.9355 110.533 17.623 112.251 18.9189L113.71 20.0199L115.169 18.9189C116.886 17.623 118.895 16.9355 120.968 16.9355C125.557 16.9355 129.547 20.1995 130.451 24.6968L130.855 26.698L132.896 26.6401L133.19 26.6129C135.184 26.6472 137.09 27.5107 138.436 28.9886C139.829 30.5207 140.487 32.5113 140.288 34.5892C139.937 38.2572 136.583 41.129 132.649 41.129H127.27C122.085 41.129 117.21 43.2578 113.71 46.9423C110.209 43.2578 105.332 41.129 100.149 41.129H94.7707C90.8369 41.129 87.4819 38.2572 87.131 34.5916ZM121.693 113.71L113.71 128.083L105.726 113.71H121.693ZM123.387 108.871H116.129V87.0968H111.29V108.871H104.032V46.5407C106.918 47.3806 109.466 49.1443 111.29 51.6121V82.2581H116.129V51.6145C117.953 49.1443 120.501 47.383 123.387 46.543V108.871ZM99.1936 68.4436L81.4524 58.4638L85.6118 51.5294L99.1936 59.4538V68.4436ZM70.6551 43.142C71.3202 43.3086 71.9616 43.5673 72.5511 43.9134L81.4311 49.0935L77.2327 56.0929L67.7419 50.7533V48.3871H62.9032V75H33.871V48.3871H29.0323V60.4839H21.7742V48.6848C21.7742 45.3487 24.0364 42.4521 27.1764 41.6665L40.3423 38.9247L48.3871 46.9695L56.3469 39.0097L70.6551 43.142ZM45.9677 89.5161V138.847C41.6878 136.894 37.6406 134.526 33.871 131.79V79.8387H62.9032V144.097C58.7367 143.368 54.6871 142.292 50.8065 140.86V89.5161H45.9677ZM21.7742 65.3226H29.0323V95.5645C29.0323 97.5657 27.4044 99.1936 25.4032 99.1936C23.4021 99.1936 21.7742 97.5657 21.7742 95.5645V65.3226ZM53.2258 35.2886L48.3871 40.1273L43.5484 35.2886V33.024C45.0652 33.5638 46.6884 33.871 48.3871 33.871C50.0858 33.871 51.709 33.5615 53.2258 33.024V35.2886ZM38.7097 14.5161C38.7097 9.1789 43.0499 4.83871 48.3871 4.83871C53.7243 4.83871 58.0645 9.1789 58.0645 14.5161V19.3548C58.0645 24.6921 53.7243 29.0323 48.3871 29.0323C43.0499 29.0323 38.7097 24.6921 38.7097 19.3548V14.5161ZM4.83871 75C4.83871 52.2796 15.6124 31.3477 33.871 18.1499V19.3548C33.871 23.6395 35.7481 27.4835 38.7097 30.1451V34.3234L26.1002 36.9483C20.7051 38.2986 16.9355 43.1231 16.9355 48.6848V95.5645C16.9355 100.234 20.7334 104.032 25.4032 104.032C26.7074 104.032 27.9289 103.711 29.0323 103.183V127.938C14.2255 115.065 4.83871 96.1138 4.83871 75ZM67.7419 144.787V56.3032L99.1936 73.9935V111.914L111.84 134.676C101.124 141.317 88.5049 145.161 75 145.161C72.5488 145.161 70.127 145.033 67.7419 144.787ZM117.944 130.425L128.226 111.916V45.9677H132.649C134.646 45.9677 136.532 45.4574 138.229 44.6246C142.754 54.0433 145.161 64.4779 145.161 75C145.161 97.5196 134.487 117.579 117.944 130.425Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="75"
            y1="0"
            x2="75"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#848700" />
            <stop offset="1" stopColor="#848700" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="150" height="150" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <CardHeading style={{ textAlign: "center" }}>
          The course creator test
        </CardHeading>
      </Box>
      <Box component="div" className={classes.socials}>
        <Typography variant="body2" color="textSecondary">6 min to complete</Typography>
        <Box component="div">
          <IconButton color="default" size="medium" component="span">
            <Twitter />
          </IconButton>
          <IconButton color="default" size="medium" component="span">
            <LinkedIn />
          </IconButton>
          <IconButton color="default" size="medium" component="span">
            <Facebook />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Typography variant="body1">
          Don’t let the brevity of this test fool you. Though only 10 questions long, it is deceptively hard.
        </Typography>
        <Typography variant="body1" style={{marginTop: "20px"}}>
          So far, nobody has been able to answer all of the questions correctly. Can you?
        </Typography>
      </Box>
      <Box
        component="div"
        style={{ marginTop: 40, justifyContent: "flex-start", width: "100%" }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          endIcon={<SubdirectoryArrowLeftIcon />}
          onClick={handleClick}
        >
          Let’s go
        </Button>
      </Box>
    </Box>
  );
};
