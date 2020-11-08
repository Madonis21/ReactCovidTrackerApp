export let PieChartOptions = {
    chart: {
        type: 'pie',
    },
  title: {
      text: 'World Statistics'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Cases",
          colorByPoint: true,
          data: [
              
          ]
      }
    ]
  };