import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import ChartDataYear from "./chartDataYear";
import useStyles from "./Styles";

interface Props {
  text: string;
  figure?: number;
}

const LeftCardDashboard: React.FC<Props> = ({ text, figure }) => {
  const { classes } = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography className={classes.text}>{text}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 0.75 }}>
              <Grid container alignItems="center">
                <Grid item xs={9}>
                  <ReactApexChart {...ChartDataYear} />
                </Grid>
                <Grid item xs={3}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography className={classes.figure}>
                        {figure}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* )} */}
    </>
  );
};

export default LeftCardDashboard;
