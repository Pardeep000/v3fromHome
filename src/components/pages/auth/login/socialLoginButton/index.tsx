/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import Box from "src/components/shared/atoms/box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as GoogleSvgComponent } from "src/assets/images/auth/Google.svg";
import { ReactComponent as FacebookSvgComponent } from "src/assets/images/auth/Facebook.svg";
import expressConfig from "src/config/express.json";
import useStyles from "./Styles";

interface Props {
  type: string;
}
const buttonDetails = (type: string) => {
  const env = process.env.NODE_ENV || "development";

  const config = expressConfig[env];

  const { auth_url }: { auth_url: string } = config;
  let icon;
  let text;
  let handleClick;
  if (type === "google") {
    icon = <GoogleSvgComponent />;
    text = "Sign In with Google";
    handleClick = () => {
      window.open(`${auth_url}google`, "_self");
    };
  }
  if (type === "facebook") {
    icon = <FacebookSvgComponent />;
    text = "Sign In with Facebook";
    handleClick = () => {
      window.open(`${auth_url}facebook`, "_self");
    };
  }

  return {
    icon,
    text,
    handleClick,
  };
};

const SocialLoginButton: React.FC<Props> = ({ type }) => {
  const { classes } = useStyles();
  const { icon, text, handleClick } = buttonDetails(type);

  return (
    <Box className={classes.root} onClick={handleClick}>
      <Box className={classes.box}>
        <SvgIcon>{icon}</SvgIcon>
      </Box>
      <Typography ml={1} className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

export default SocialLoginButton;
