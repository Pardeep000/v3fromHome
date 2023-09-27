/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import Typography from "@mui/material/Typography";
import useStyles from "./Styles";

interface Props {
  text: string;
  color?: string;
}
interface TypoProps {
  children: React.ReactNode;
  className: string;
}

export const Text: React.FC<Props> = ({ text }) => {
  const { classes } = useStyles();
  return <Typography className={classes.text}>{text}</Typography>;
};

export const Title: React.FC<Props> = ({ text }) => {
  const { classes } = useStyles();

  return <Typography className={classes.title}>{text}</Typography>;
};

export const Title12500: React.FC<Props> = ({ text }) => {
  const { classes } = useStyles();

  return <Typography className={classes.title12500}>{text}</Typography>;
};

export const Title14500: React.FC<Props> = ({ text }) => {
  const { classes } = useStyles();

  return <Typography className={classes.title14500}>{text}</Typography>;
};

export const ContentSmall: React.FC<TypoProps> = ({ className, children }) => {
  const { classes } = useStyles();

  return (
    <Typography className={`${classes.contentSmall} ${className}`}>
      {children}
    </Typography>
  );
};
