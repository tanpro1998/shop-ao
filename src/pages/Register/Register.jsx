import React from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../redux/callAPI";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const paperStyle = { padding: 20, width: 500, margin: "0 auto" };
const headerStyle = { margin: 0, fontWeight: "bold" };
const typeStyle = { fontSize: 14 };


const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    username: "",
    password: "",
    cfpassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Name is required"),
    username: Yup.string()
      .min(3, "It's too short")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Password is required"),
    cfpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    userRegister(values, navigate);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom style={typeStyle}>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="username"
                label="Username"
                placeholder="Enter your username"
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="cfpassword"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                helperText={<ErrorMessage name="cfpassword" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions."
              />

              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Register;
