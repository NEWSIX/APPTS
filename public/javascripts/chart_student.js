var options = {
  responsive: false,
  maintainAspectRatio: true,
  scale: {
      ticks: {
          beginAtZero: true,
          max: 50
      }
  }
};
var dataLiteracy = {
  labels: [
      "Basic",
      "Trace",
      "Explain",
      "Write"
  ],
  datasets: [{
      label: "score",
      data: [
        45, 65, 30, 55
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
      
  }]
};

var ctx = document.getElementById("myChart");
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: dataLiteracy,
  scale: {
    ticks: {
      max: 100,
      min : 0
    }
}
})