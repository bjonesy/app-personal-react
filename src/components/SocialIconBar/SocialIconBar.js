import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";

const SocialBarContainer = styled("section")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
}));

const SocialIconBar = () => {
  return (
    <SocialBarContainer id="social-icon-bar">
      <IconButton
        aria-label="github"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/bjonesy"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="github"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/BrandonJ0nes"
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="linkedin"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/brandon-jones-57513b13/"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </SocialBarContainer>
  );
};

export default SocialIconBar;
