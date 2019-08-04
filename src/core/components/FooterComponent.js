import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'white',
    marginTop: 'auto',
    padding: theme.spacing(2)
  }
}));

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          &copy; {currentYear}, Brandon Jones
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
