import React from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/callAPI";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";

const paperStyle = { padding: 20, width: 500, margin: "0 auto" };
const headerStyle = { margin: 0, fontWeight: "bold" };
const typeStyle = { fontSize: 14 };

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "It's too short")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Password is required"),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    userLogin(values, navigate);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center" xs={12}>
          <h2 style={headerStyle}>Sign In</h2>
          <Typography variant="caption" gutterBottom style={typeStyle}>
            Please fill this form to login account !
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

              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
