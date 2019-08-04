import React, { useEffect } from 'react';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    margin: theme.spacing(2)
  },
  link: {
    color: 'inherit'
  }
}));

const SocialIconBar = () => {
  const classes = useStyles();

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  return (
    <section id="social-icon-bar" className={classes.root}>
      <a
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/bjonesy"
      >
        <Icon className={clsx(classes.icon, 'fab fa-github')} color="primary" fontSize="large" />
      </a>
      <a
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/BrandonJ0nes"
      >
        <Icon className={clsx(classes.icon, 'fab fa-twitter')} color="primary" fontSize="large" />
      </a>
      <a
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/brandon-jones-57513b13/"
      >
        <Icon
          className={clsx(classes.icon, 'fab fa-linkedin-in')}
          color="primary"
          fontSize="large"
        />
      </a>
    </section>
  );
};

export default SocialIconBar;
