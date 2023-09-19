import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: IProps) => {
  return (
    <Grid container>
      <Grid item>{/* Add code for left part of auth screens */}</Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default AuthLayout;
