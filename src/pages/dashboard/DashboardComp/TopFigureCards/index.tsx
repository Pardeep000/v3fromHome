import React from "react";
import { Grid } from "@mui/material";
import DashboardFigureCard from "src/components/pages/dashboard/DashboardFigureCard";

const TopFigureCard: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} xs={12}>
          <DashboardFigureCard text="Active Agents" figure={5} />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <DashboardFigureCard text="Active Customers" figure={6} />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={12}>
              <DashboardFigureCard text="Total Chats" figure={6} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopFigureCard;
