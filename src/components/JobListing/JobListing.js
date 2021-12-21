import React from "react";
import { Typography } from "@mui/material";
import publicPropTypes from "./publicPropTypes";

const JobPosting = ({ companyName, duration, summary, responsibilities }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" component="p" color="textPrimary">
        {companyName}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color="textSecondary"
        gutterBottom
      >
        {duration}
      </Typography>
      <Typography variant="body1" paragraph>
        {summary}
      </Typography>
      <ul>
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>
            <Typography variant="body1" paragraph>
              {responsibility}
            </Typography>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

JobPosting.propTypes = publicPropTypes;

export default JobPosting;
