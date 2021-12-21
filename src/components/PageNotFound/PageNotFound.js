import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useCallback } from "react";

import Header from "../../components/Header";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = styled("main")(() => ({
  marginTop: "100px",
}));

const PageNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const naviagteHome = useCallback(() => navigate("/"), [navigate]);
  const naviagteToAbout = useCallback(() => navigate("/about"), [navigate]);
  const naviagteToContact = useCallback(() => navigate("/contact"), [navigate]);

  return (
    <React.Fragment>
      <Header />
      <Main id="main">
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Page not found
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            Sorry. There was no match found for <code>{location.pathname}</code>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please try the following pages
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="outlined" color="primary" onClick={naviagteHome}>
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={naviagteToAbout}
              >
                About
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={naviagteToContact}
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Main>
    </React.Fragment>
  );
};

export default PageNotFound;
