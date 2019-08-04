import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  quote: PropTypes.string,
  primaryBtnLabel: PropTypes.string,
  primaryBtnLink: PropTypes.string,
  secondaryBtnLabel: PropTypes.string,
  secondaryBtnLink: PropTypes.string
};

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  linkClass: {
    textDecoration: 'none'
  }
}));

const Hero = ({
  name,
  role,
  quote,
  primaryBtnLabel,
  primaryBtnLink,
  secondaryBtnLabel,
  secondaryBtnLink
}) => {
  const classes = useStyles();

  return (
    <div id="hero" className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
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
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to={primaryBtnLink} className={classes.linkClass}>
                <Button variant="contained" color="primary" size="large">
                  {primaryBtnLabel}
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={secondaryBtnLink} className={classes.linkClass}>
                <Button variant="outlined" color="primary" size="large">
                  {secondaryBtnLabel}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
