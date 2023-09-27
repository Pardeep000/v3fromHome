import React, { useState } from "react";
import { Link as MuiLink } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Box from "src/components/shared/atoms/box";
import TextField from "src/components/shared/atoms/textField/TextField";
import AuthButton from "src/components/pages/auth/shared/button/AuthButton";
import Typography from "src/components/shared/atoms/typography";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import {
  SignInErrorsProps,
  FormValues,
} from "src/components/pages/auth/login/loginForm/Types";
import useStyles from "./Styles";

const LoginForm = () => {
  const { classes } = useStyles();
  const [signInErrors] = useState<SignInErrorsProps | null>(null);

  // validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });
  // if login mutation sends back the result

  const handleSubmit = async (
    values: FormValues,
    // { setSubmitting }: FormikHelpers<FormValues>
    { setSubmitting }: any,
  ) => {
    // handle form submission
    setSubmitting(false);
    // settng email
    // e.preventDefault()
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik: any) => (
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Box className={classes.marginTop}>
            <TextField
              id="email"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              helperText={
                (signInErrors && signInErrors.email) ||
                (formik.touched.email && formik.errors.email)
              }
            />
          </Box>
          <Box className={classes.marginTop}>
            <TextField
              id="password"
              label="Password"
              name="password"
              typeField="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={
                (signInErrors && signInErrors.password) ||
                (formik.touched.password && formik.errors.password)
              }
            />
          </Box>

          <Box className={classes.terms}>
            <Checkbox />
            <Typography className={classes.label}>
              <p className={classes.terms1}>Remember me</p>
              <MuiLink className={classes.terms2}>
                <Link to="/forgetpassword">Forgot password</Link>
              </MuiLink>
            </Typography>
          </Box>

          <AuthButton text="Sign In" loading={false} />
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
