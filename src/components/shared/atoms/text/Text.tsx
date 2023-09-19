/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import Typography from "@mui/material/Typography";
import theme from "src/theme";

interface Props {
  text: string;
  color?: string;
}

export const Text: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 400,
        [theme.breakpoints.up("md")]: {
          fontSize: "0.875rem",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "0.75rem",
        },
        lineHeight: "20px",
        textAlign: "center",
        color: theme.palette.text.secondary,
      }}
    >
      {text}
    </Typography>
  );
};

export const Title: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "18px",
        color: "black",
      }}
    >
      {text}
    </Typography>
  );
};

export const Title12500: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
        color: "black",
      }}
    >
      {text}
    </Typography>
  );
};

export const Title14500: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "18px",
        color: "black",
      }}
    >
      {text}
    </Typography>
  );
};

export const Title10500: React.FC<Props> = ({ color, text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "15px",
        color,
      }}
    >
      {text}
    </Typography>
  );
};

export const ContentSmall: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "15px",
        color: theme.palette.text.secondary,
      }}
    >
      {text}
    </Typography>
  );
};

export const EmailText: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: theme.palette.text.primary,
      }}
    >
      {text}
    </Typography>
  );
};
