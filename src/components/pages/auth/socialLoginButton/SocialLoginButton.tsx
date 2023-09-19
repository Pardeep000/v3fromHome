import React from "react";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import useStyles from "./Styles";

interface Props {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const SocialLoginButton: React.FC<Props> = ({ text, icon, handleClick }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root} mt={1} onClick={handleClick}>
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
