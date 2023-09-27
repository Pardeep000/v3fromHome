
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartData: any = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false, 
    },
    colors: ['#6BE900'],
    fill: {
      type: 'solid',
      opacity: .1,
    },
    
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      theme: 'light',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Total Order',
      },
      marker: {
        show: false,
      },
    },
  },
  series: [
    {
      name: 'count',
      data: [35, 44, 9, 54, 45, 66, 41, 69],
      type: 'area',
    },
  ],
}

export default chartData
