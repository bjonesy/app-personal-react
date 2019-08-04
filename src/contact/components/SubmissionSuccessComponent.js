import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  addMargin: {
    marginTop: '100px'
  }
}));

const SubmissionSuccess = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography
        className={classes.addMargin}
        variant="h4"
        align="center"
        color="textSecondary"
        paragraph
      >
        Thank you for your submission.
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Your message has been successfully sent. I will contact you very soon!
      </Typography>
    </Container>
  );
};

export default SubmissionSuccess;
