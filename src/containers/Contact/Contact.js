import * as Yup from "yup";

import { Container, Fab } from "@mui/material";
import React, { useCallback, useState } from "react";

import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PageHeader from "../../components/PageHeader";
import ScrollTop from "../../components/ScrollTop";
import SubmissionSuccess from "../../components/SubmissionSuccess";
import axios from "axios";
import { isEmpty } from "lodash/fp";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";

const Main = styled("main")(() => ({
  marginTop: "4px",
}));

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false);
  const encode = useCallback((data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }, []);
  const handleSubmit = useCallback(
    (values) => {
      const data = encode({
        "form-name": "contact",
        ...values,
      });

      axios
        .post("/", data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then(() => {
          setFormSubmission(true);
        })
        .catch((error) => {
          alert(error);
        });
    },
    [encode]
  );
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("Enter your first name").required(
        "First name is required"
      ),
      lastName: Yup.string("Enter your last name").required(
        "Last name is required"
      ),
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      message: Yup.string("Enter a message").required("A message is required"),
    }),
    onSubmit: handleSubmit,
  });
  const onFormReset = useCallback(() => {
    setFormSubmission(false);
    if (!isEmpty(formik.values.firstName)) {
      formik.values.firstName = "";
    }
    if (!isEmpty(formik.values.lastName)) {
      formik.values.lastName = "";
    }
    if (!isEmpty(formik.values.email)) {
      formik.values.email = "";
    }
    if (!isEmpty(formik.values.message)) {
      formik.values.message = "";
    }
  }, [formik.values]);

  return (
    <React.Fragment>
      <Header />
      <Main id="main">
        <article id="page-contact">
          <Container maxWidth="lg">
            <PageHeader title="Contact" />
          </Container>
          <Container maxWidth="lg">
            {formSubmission ? (
              <SubmissionSuccess resetForm={onFormReset} />
            ) : (
              <ContactForm formik={formik} />
            )}
          </Container>
        </article>
      </Main>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Contact;
