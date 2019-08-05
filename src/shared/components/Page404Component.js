import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../../core/components/HeaderComponent';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: '100px'
  },
  linkClass: {
    textDecoration: 'none'
  }
}));

const Page404 = ({ location }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <main id="main" className={classes.mainContainer}>
        <Container maxWidth="lg">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Page not found
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary" paragraph>
            Sorry. There was no match found for <code>{location.pathname}</code>
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Please try the following pages
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/" className={classes.linkClass}>
                <Button variant="outlined" color="primary">
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about" className={classes.linkClass}>
                <Button variant="outlined" color="primary">
                  about
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact" className={classes.linkClass}>
                <Button variant="outlined" color="primary">
                  Contact
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

Page404.propTypes = propTypes;

export default Page404;
