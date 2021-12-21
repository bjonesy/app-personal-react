import CircularProgress from "@mui/material/CircularProgress";
// import PropTypes from "prop-types";
import React from "react";
import publicPropTypes from "./publicPropTypes";
import { styled } from "@mui/material/styles";

const LoadingContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
}));

const Progress = styled(CircularProgress)(() => ({
  position: "fixed",
  top: "calc( 50% - ( 150px / 1) )",
}));

const defaultPropTypes = {
  color: "primary",
  size: 150,
};

const Loading = ({ color, size, thickness, value, variant }) => (
  <LoadingContainer>
    <Progress
      color={color}
      size={size}
      thickness={thickness}
      value={value}
      variant={variant}
    />
  </LoadingContainer>
);

Loading.propTypes = publicPropTypes;
Loading.defaultProps = defaultPropTypes;

export default Loading;
