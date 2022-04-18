//Chart PIE
var xValues1 = ["Mastery (80-100)", "Approaching (60-79)", "Normal (45-59)", "Improve (Less than 45)"];
var yValues1 = [55, 49, 44, 24];
var barColors = ["red", "green","blue","orange"];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors,
      data: yValues1
    }]
  },
  options: {
    title: {
      display: true,
      text: "Class Mastery"
    }
  }
});

//Chart BAR

var xValues = ["Basic", "Tracing",  "Explaining", "Writing"];
var yValues = [55, 49, 50, 60];
var barColors = ["red", "green","Blue","orange"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Skill Summary"
    }
  }
});