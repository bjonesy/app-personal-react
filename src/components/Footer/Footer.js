import { Container, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: "white",
  marginTop: "auto",
  padding: theme.spacing(2),
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer id="colophon">
      <Container maxWidth="sm">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          &copy; {currentYear}, Brandon Jones
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
