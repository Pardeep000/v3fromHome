import React from "react";
import Box from "src/components/shared/atoms/box";
import Heading from "src/components/shared/atoms/heading/Heading";
import { Text } from "src/components/shared/atoms/text/Text";
import SocialLoginButton from "src/components/pages/auth/login/socialLoginButton";
import LoginFooter from "src/components/pages/auth/login/loginFooter";
import LoginForm from "src/components/pages/auth/login/loginForm";
import Divider from "@mui/material/Divider";
import BoxDesign from "src/components/pages/auth/shared/boxDesign";
import useStyles from "./Styles";

const Login: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <BoxDesign />
      <Heading heading="Hey, welcome Back" />
      <Text text="Enter your credentials to access your account" />
      <Box className={classes.form}>
        {/* sign in form */}
        <LoginForm />
        <Box className={classes.style}>
          <Box className={classes.divider}>
            <Divider className={classes.dividerText}>or</Divider>
          </Box>
          <Box className={classes.style}>
            <SocialLoginButton type="google" />
            <SocialLoginButton type="facebook" />
          </Box>
          {/* footer */}
          <LoginFooter />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
