import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../core/components/HeaderComponent';
import PageHeader from '../shared/components/PageHeaderComponent';
import ContactForm from './components/ContactFormComponent';

const propTypes = {
  classes: PropTypes.shape({
    mainContainer: PropTypes.string
  })
};

const styles = {
  mainContainer: {
    marginTop: '4px'
  }
};

const validationSchema = Yup.object({
  firstName: Yup.string('Enter your first name').required('First name is required'),
  lastName: Yup.string('Enter your last name').required('Last name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  message: Yup.string('Enter a message').required('A message is required')
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmission: false
    };
  }

  handleSubmit = values => {
    let data = encode({
      'form-name': 'contact',
      ...values
    });

    axios
      .post('/', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(() => {
        this.setState(prevState => {
          if (!prevState.formSubmission) {
            return { formSubmission: true };
          }
        });
      })
      .catch(error => alert(error));
  };

  render() {
    const { classes } = this.props;
    const values = { firstName: '', lastName: '', email: '', message: '' };

    return (
      <React.Fragment>
        <Header />
        <main id="main" className={classes.mainContainer}>
          <article id="page-contact">
            <Container maxWidth="lg">
              <PageHeader title="Contact" />
            </Container>
            <Container maxWidth="lg">
              <Formik
                onSubmit={values => {
                  this.handleSubmit(values);
                }}
                render={props => <ContactForm {...props} />}
                initialValues={values}
                validationSchema={validationSchema}
              />
            </Container>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

Contact.propTypes = propTypes;

export default withStyles(styles)(Contact);
