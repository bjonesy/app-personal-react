import React from "react";
import { Typography } from "@mui/material";
import publicPropTypes from "./publicPropTypes";

const PageHeader = ({ title }) => {
  return (
    <header id="page-header">
      <Typography
        component="h1"
        variant="h3"
        color="textPrimary"
        gutterBottom
        sx={{ marginTop: "0.35em" }}
      >
        {title}
      </Typography>
    </header>
  );
};

PageHeader.propTypes = publicPropTypes;

export default PageHeader;
