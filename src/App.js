import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Home from './home/HomeContainer';
import About from './about/AboutContainer';
import Contact from './contact/ContactContainer';
import Footer from './core/components/FooterComponent';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}));

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  })
};

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = propTypes;

export default App;
