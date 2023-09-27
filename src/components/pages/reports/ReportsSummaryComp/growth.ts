// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: any = (categories: string[], data: number[]) => {
  return {
    height: 295,
    // type: 'bar',
    options: {
      chart: {
        id: "bar-chart",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
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
        categories,
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
    series: [
      {
        name: "Chats",
        data,
      },
    ],
  };
};

export default chartData;
