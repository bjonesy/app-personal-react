import { Button, Grid, TextField } from "@mui/material";

import publicPropTypes from "./publicPropTypes";

const ContactForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            helperText={formik.touched.firstName ? formik.errors.firstName : ""}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            label="First Name"
            placeholder="John"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            helperText={formik.touched.lastName ? formik.errors.lastName : ""}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            label="Last Name"
            placeholder="Doe"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            helperText={formik.touched.email ? formik.errors.email : ""}
            error={formik.touched.email && Boolean(formik.errors.email)}
            label="Email"
            placeholder="John@gmail.com"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="message"
            name="message"
            helperText={formik.touched.message ? formik.errors.message : ""}
            error={formik.touched.message && Boolean(formik.errors.message)}
            multiline
            rows="6"
            label="Message"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            disabled={!formik.isValid}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

ContactForm.propTypes = publicPropTypes;

export default ContactForm;
