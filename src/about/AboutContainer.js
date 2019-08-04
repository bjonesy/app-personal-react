import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Loading from '../core/components/LoadingComponent';
import Header from '../core/components/HeaderComponent';
import PageHeader from '../shared/components/PageHeaderComponent';
import JobListing from './components/JobListing';

const propTypes = {
  classes: PropTypes.shape({
    mainContainer: PropTypes.string,
    experienceHeader: PropTypes.string
  })
};

const styles = {
  mainContainer: {
    marginTop: '4px'
  },
  experienceHeader: {
    marginTop: '0.35em'
  }
};

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: null
    };
  }

  async componentDidMount() {
    try {
      const response = await this.fetchData();
      if (!response) {
        throw Error(response.statusText);
      }
      const json = await response.data;
      this.setState({ about: json.about });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async fetchData() {
    return axios.get('data/data.json');
  }

  render() {
    const { classes } = this.props;

    if (!this.state.about) return <Loading />;
    return (
      <React.Fragment>
        <Header />
        <main id="main" className={classes.mainContainer}>
          <article id="page-about">
            <Container maxWidth="lg">
              <PageHeader title="About" />
            </Container>
            <Container maxWidth="lg">
              <Typography variant="body1" paragraph>
                {this.state.about.content}
              </Typography>
              <Divider />
              <section id="work-experience">
                <Typography
                  className={classes.experienceHeader}
                  variant="h4"
                  component="h3"
                  color="textPrimary"
                  gutterBottom
                >
                  {this.state.about.experience.header}
                </Typography>
                {this.state.about.experience.jobs.map(job => (
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
        </main>
      </React.Fragment>
    );
  }
}

About.propTypes = propTypes;

export default withStyles(styles)(About);
