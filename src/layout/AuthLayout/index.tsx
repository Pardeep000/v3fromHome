import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: IProps) => {
  return (
    <Grid container>
      <Grid item md={6}>
        {/* Add code for left part of auth screens */}
      </Grid>
      <Grid item md={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
