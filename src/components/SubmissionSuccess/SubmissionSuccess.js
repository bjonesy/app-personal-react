import { Button, Container, Typography } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import publicPropTypes from "./publicPropTypes";

const SubmissionSuccess = ({ resetForm }) => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        sx={{ marginTop: "100px" }}
        variant="h4"
        align="center"
        color="textSecondary"
        paragraph
      >
        Thank you for your submission.
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Your message has been successfully sent.
      </Typography>
      <div>
        <CheckCircleIcon sx={{ color: green[500], fontSize: 70 }} />
      </div>
      <Button onClick={resetForm}>Send Another Message</Button>
    </Container>
  );
};

SubmissionSuccess.propTypes = publicPropTypes;

export default SubmissionSuccess;
