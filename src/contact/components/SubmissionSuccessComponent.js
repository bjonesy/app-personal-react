import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const SubmissionSuccess = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" color="textSecondary" paragraph>
        Thank you for your submission.
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Your message has been successfully sent. I will contact you very soon!
      </Typography>
    </Container>
  );
};

export default SubmissionSuccess;
