import React, { useState } from "react";

import { CopyToClipboard as CopyToClipboardLib } from "react-copy-to-clipboard";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {

  },
}));

export const CopyToClipboard = ({text}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Grid
        item
        lg={3}
        md={6}
        xs={12}
        component={Box}
        paddingLeft="15px"
        paddingRight="15px"
      >
        <CopyToClipboardLib
          text={text}
          onCopy={() => setCopiedText(text)}
        >
          <Tooltip
            title={
              copiedText === text
                ? "This was Copied!"
                : "Copy To Clipboard"
            }
            placement="top"
          >
            <Box
              component="button"
              fontFamily="inherit"
              fontSize="16px"
              fontWeight="400"
              lineHeight="1.25"
              display="inline-block"
              width="100%"
              margin="1rem 0"
              padding="24px"
              textAlign="left"
              color={theme.palette.grey[800]}
              border="0"
              borderRadius="4px"
              className={classes.button}
            >
              <div>
                {`${text}`}
              </div>
            </Box>
          </Tooltip>
        </CopyToClipboardLib>
        <CopyToClipboardLib text={text} onCopy={() => setCopiedText(text)}>
          <Tooltip
            title={
              copiedText === text
                ? "This was Copied!"
                : "Copy To Clipboard"
            }
            placement="top"
          >
            <Button variant="outlined">Copy</Button>
          </Tooltip>
        </CopyToClipboardLib>
      </Grid>
    </>
  );
};
