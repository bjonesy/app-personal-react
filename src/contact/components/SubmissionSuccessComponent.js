import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const SubmissionSuccess = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" color="textSecondary" paragraph>
        Thank you for your submission
      </Typography>
    </Container>
  );
};

export default SubmissionSuccess;
