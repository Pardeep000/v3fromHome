import React from "react";
import { Grid, AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import getHeaderText from "src/utils/layout/getHeaderText";
import useStyles from "./Styles";
import Notification from "../notification/Notification";
import ProfileSection from "../profileSection/ProfileSection";

const Header: React.FC = () => {
  const location = useLocation();
  const { heading, text } = getHeaderText(location.pathname);
  const { classes } = useStyles();
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      className={classes.appbar}
    >
      <Toolbar>
        <Grid container className={classes.header}>
          <Grid item md={11} pt={2} pl={7} pr={3}>
            <Typography className={classes.typography}>{heading}</Typography>
            <Typography className={classes.text}>{text}</Typography>
          </Grid>
          <Grid
            item
            md={1}
            pt={2}
            pl={3}
            pr={4}
            sx={{ display: { xs: "none", md: "block", lg: "block" } }}
          >
            <Grid container wrap="nowrap">
              <Grid item md={6}>
                {" "}
                <Notification />
              </Grid>
              <Grid item md={6} sx={{ cursor: "pointer" }}>
                <ProfileSection />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
