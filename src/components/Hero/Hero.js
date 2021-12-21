import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useCallback } from "react";

import publicPropTypes from "./publicPropTypes";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

const HeroButtons = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Hero = ({
  name,
  role,
  quote,
  primaryBtnLabel,
  primaryBtnLink,
  secondaryBtnLabel,
  secondaryBtnLink,
}) => {
  const navigate = useNavigate();
  const navigateToAboutPage = useCallback(
    () => navigate(primaryBtnLink),
    [navigate, primaryBtnLink]
  );
  const navigateToContactPage = useCallback(
    () => navigate(secondaryBtnLink),
    [navigate, secondaryBtnLink]
  );
  return (
    <HeroContainer>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="h4" align="center" color="textSecondary" paragraph>
          {role}
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {quote}
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <HeroButtons>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                onClick={navigateToAboutPage}
                variant="contained"
                color="primary"
                size="large"
              >
                {primaryBtnLabel}
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={navigateToContactPage}
                variant="outlined"
                color="primary"
                size="large"
              >
                {secondaryBtnLabel}
              </Button>
            </Grid>
          </Grid>
        </HeroButtons>
      </Container>
    </HeroContainer>
  );
};

Hero.propTypes = publicPropTypes;

export default Hero;
