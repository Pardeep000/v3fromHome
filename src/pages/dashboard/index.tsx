import React from "react";
import { Grid } from "@mui/material";
import _ from "lodash";

import {
  TopFigureCard,
  LeftGraphicalChart,
  RightPendingDataTable,
} from "./DashboardComp";

import useStyles from "./Styles";

const Dashboard: React.FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Grid className={classes.dashboard}>
        <Grid pt={2} pl={3} pr={2} container spacing={2}>
          <TopFigureCard />
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <LeftGraphicalChart />
              <RightPendingDataTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
