import {
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
  Card,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Chart from "react-apexcharts";
import { getCustomerCountAndCountsPerPageResultItem } from "./Types";
import useStyles from "./Styles";

interface Props {
  pagesBreakdownData: getCustomerCountAndCountsPerPageResultItem[];
  loading: boolean;
}

const ReportsPagesBreakdown: React.FC<Props> = ({
  pagesBreakdownData,
  loading,
}) => {
  const theme = useTheme();
  const { classes } = useStyles();

  const series = pagesBreakdownData.map((item) => item.pageCount);
  const data: any = {
    series,
    options: {
      chart: {
        type: "donut",
      },
      series: [44, 55, 41, 17, 15],
      labels: ["A", "B", "C", "D", "E"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <Card sx={{ height: "365px", borderRadius: "10px" }}>
      <CardContent>
        {loading ? (
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                fontWeight: "400",
                color: "#4d1277",
              }}
            >
              <CircularProgress size={24} />
            </Box>
          </>
        ) : (
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid
                container
                alignContent="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography className={classes.heading}>
                    Pages Breakdown
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ pt: "16px !important" }}>
              {series ? (
                <Chart
                  options={data.options}
                  series={data.series}
                  type="donut"
                  height={100}
                />
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                overflowY: "auto",
                height: 200,
              }}
            >
              {pagesBreakdownData && pagesBreakdownData.length !== 0 ? (
                pagesBreakdownData.map(({ pageName, pageCount }) => {
                  return (
                    <>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item xs={10}>
                              <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Box
                                    sx={{
                                      width: 12,
                                      height: 12,
                                      backgroundColor:
                                        theme.palette.success.light,
                                      color: theme.palette.success.dark,
                                    }}
                                  ></Box>
                                </Grid>
                                <Grid item ml={1}>
                                  <Tooltip
                                    title={pageName}
                                    placement="top-start"
                                  >
                                    <Typography className={classes.text}>
                                      {pageName}
                                    </Typography>
                                  </Tooltip>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography className={classes.figure}>
                                {pageCount}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 1.5 }} />
                    </>
                  );
                })
              ) : (
                <Grid item xs={12}>
                  <Grid container alignContent="center" justifyContent="center">
                    <Grid item>
                      <Typography className={classes.heading}>
                        No Pages
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default ReportsPagesBreakdown;
