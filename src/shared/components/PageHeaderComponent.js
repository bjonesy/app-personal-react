import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  title: PropTypes.string
};

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '0.35em'
  }
}));

const PageHeader = ({ title }) => {
  const classes = useStyles();

  return (
    <header id="page-header">
      <Typography
        className={classes.title}
        component="h1"
        variant="h3"
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
    </header>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;
