import { Box, Zoom } from "@mui/material";

import React from "react";
import publicPropTypes from "./publicPropTypes";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

ScrollTop.propTypes = publicPropTypes;

export default ScrollTop;
