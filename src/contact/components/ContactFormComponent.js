import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string
  }),
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.shape({
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    email: PropTypes.bool,
    message: PropTypes.bool
  }),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  isValid: PropTypes.bool,
  handleBlur: PropTypes.func
};

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%'
  },
  submit: {
    textAlign: 'right'
  }
}));

const ContactForm = ({
  values: { firstName, lastName, email, message },
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
  isValid
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            helperText={touched.firstName ? errors.firstName : ''}
            error={touched.firstName && Boolean(errors.firstName)}
            label="First Name"
            placeholder="John"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type="text"
            value={firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            helperText={touched.lastName ? errors.lastName : ''}
            error={touched.lastName && Boolean(errors.lastName)}
            label="Last Name"
            placeholder="Doe"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type="text"
            value={lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            label="Email"
            placeholder="John@gmail.com"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="message"
            name="message"
            helperText={touched.message ? errors.message : ''}
            error={touched.message && Boolean(errors.message)}
            multiline
            rows="6"
            label="Message"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} className={classes.submit}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            disabled={!isValid}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

ContactForm.propTypes = propTypes;

export default ContactForm;
