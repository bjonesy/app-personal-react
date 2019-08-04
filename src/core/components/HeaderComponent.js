import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: 'white',
    flexGrow: 1,
    textDecoration: 'none'
  },
  button: {
    color: 'white',
    display: 'none',
    margin: theme.spacing(2),
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  menuButton: {
    display: 'block',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  icon: {
    cursor: 'pointer',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1)
    }
  },
  link: {
    color: 'inherit'
  }
}));

const propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const ElevationScroll = props => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const Header = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.9.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to="/" className={classes.title}>
              <Typography variant="h5" noWrap>
                Brandon Jones
              </Typography>
            </Link>
            <Link to="/about" className={classes.button}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/contact" className={classes.button}>
              <Button color="inherit">Contact</Button>
            </Link>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/about">
                About
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">
                Contact
              </MenuItem>
            </Menu>
            <a
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bjonesy"
            >
              <Icon className={clsx(classes.icon, 'fab fa-github')} color="inherit" />
            </a>
            <a
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/BrandonJ0nes"
            >
              <Icon className={clsx(classes.icon, 'fab fa-twitter')} color="inherit" />
            </a>
            <a
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/brandon-jones-57513b13/"
            >
              <Icon className={clsx(classes.icon, 'fab fa-linkedin-in')} color="inherit" />
            </a>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

ElevationScroll.propTypes = propTypes;

export default Header;
