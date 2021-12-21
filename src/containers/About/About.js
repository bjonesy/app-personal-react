import { Container, Divider, Fab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get, isNil } from "lodash/fp";

import Header from "../../components/Header";
import JobListing from "../../components/JobListing";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import ScrollTop from "../../components/ScrollTop";
import axios from "axios";
import { styled } from "@mui/material/styles";

const Main = styled("main")(() => ({
  marginTop: "4px",
}));

const ExperienceHeader = styled(Typography)(() => ({
  marginTop: "0.35em",
}));

const About = () => {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    axios
      .get("data/data.json")
      .then((response) => {
        console.log(response);
        setAboutContent(get("data.about", response));
      })
      .catch((err) => {
        console.log(err, "error trying to get videos");
      });
  }, []);

  return isNil(aboutContent) ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Header />
      <Main id="main">
        <article id="page-about">
          <Container maxWidth="lg">
            <PageHeader title="About" />
          </Container>
          <Container maxWidth="lg">
            <Typography variant="body1" paragraph>
              {aboutContent.content}
            </Typography>
            <Divider />
            <section id="work-experience">
              <ExperienceHeader
                variant="h4"
                component="h3"
                color="textPrimary"
                gutterBottom
              >
                {aboutContent.experience.header}
              </ExperienceHeader>
              {aboutContent.experience.jobs.map((job) => (
                <JobListing
                  key={job.id}
                  companyName={job.companyName}
                  duration={job.duration}
                  summary={job.summary}
                  responsibilities={job.responsibilities}
                />
              ))}
            </section>
          </Container>
        </article>
      </Main>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default About;
