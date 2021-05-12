import { Typography } from '@material-ui/core';
import React from 'react';

import { CardTitle } from '../card-title';

const imgBase64 =
  "data:image/png;base64,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";

export const Statistics = ({ title, text }) => {
  return (
    <>
      <img
        src={imgBase64}
        alt="chart"
        style={{ marginBottom: "16px", maxWidth: "100%" }}
      />
      <CardTitle style={{ textAlign: "center" }}>{title}</CardTitle>
      <Typography variant="body1">{text}</Typography>
    </>
  );
};
