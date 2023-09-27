import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import getHeaderText from "src/utils/layout/useGetHeaderText";
import useStyles from "src/components/layout/mainLayout/header/Styles";
import Notification from "src/components/layout/mainLayout/header/notification";
import Profile from "src/components/layout/mainLayout/header/profile";
import Appbar from "src/components/layout/mainLayout/header/appbar";

const Header: React.FC = () => {
  const location = useLocation();
  const { heading, text } = getHeaderText(location.pathname);
  const { classes } = useStyles();
  return (
    <Appbar>
      <Grid container className={classes.header}>
        <Grid item md={11} className={classes.grid1}>
          <Typography className={classes.typography}>{heading}</Typography>
          <Typography className={classes.text}>{text}</Typography>
        </Grid>
        <Grid item md={1} className={classes.grid2}>
          <Grid container wrap="nowrap">
            <Grid item md={6}>
              <Notification />
            </Grid>
            <Grid item md={6}>
              <Profile />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Appbar>
  );
};

export default Header;
