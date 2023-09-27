import { useState, useMemo } from "react";
import { Grid, Card } from "@mui/material";
import Select from "./Select";
import ReactApexChart from "react-apexcharts";
import useStyles from "./Styles";
// import ToggleImage from "../../../shared/atoms/toggleChartIcon/ToggleImage";
import ToggleImage from "./ToggleImage";

interface Props {
  authPanelType: String;
  text: String;
  selectChange: any;
  data: any;
  selectValue: string;
}

const TotalChatsChart: React.FC<Props> = ({
  authPanelType,
  text,
  selectChange,
  data,
  selectValue,
}) => {
  const horizontalData: string[] = [];
  const verticalData: number[] = [];
  // convert data into array to show in graphh
  data.forEach((item: { pageName: string | null }) =>
    horizontalData.push(item.pageName ? item.pageName : "Facebook Page"),
  );
  data.forEach((item: { pageCount: number }) => {
    verticalData.push(item.pageCount);
  });

  const chartData: any = {
    height: 295,
    // type: 'bar',
    options: {
      noData: {
        text: "No Data",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "14px",
          fontFamily: undefined,
        },
      },
      chart: {
        id: "bar-chart",
        stacked: true,
        toolbar: {
          show: false, //3 lines to download the chart
        },
        zoom: {
          enabled: true,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      colors: ["#4D1277", "#4D1277", "#4D1277", "#4D1277"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      xaxis: {
        type: "category",
        categories: horizontalData,
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `Poppins`,
        position: "bottom",
        offsetX: 20,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      column: {
        colors: "#4D1277",
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 50,
        bottom: 0,
        left: 0,
      },
    },
  };

  const { classes } = useStyles();
  const [chartType, setChartType] = useState(true);

  const onTransferClick = () => {
    setChartType(!chartType);
  };
  const type = chartType ? "bar" : "line";

  const apexcharts = useMemo(
    () => (
      <ReactApexChart
        key={type}
        series={[
          {
            name: "Chats",
            data: verticalData,
          },
        ]}
        {...chartData}
        type={type}
      />
    ),
    [type, horizontalData, verticalData],
  );
  return (
    <>
      <Card className={classes.chart}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <ToggleImage
                      text={text}
                      type={chartType}
                      onTransferClick={onTransferClick}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <Grid container spacing={1}>
                  <Grid item md={9}></Grid>
                  <Grid item md={3} pr={2}>
                    <Select
                      value={selectValue}
                      values={[
                        "Today",
                        "Yesterday",
                        "This Week",
                        "This Month",
                        "This Year",
                      ]}
                      selectChange={selectChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {apexcharts}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TotalChatsChart;
