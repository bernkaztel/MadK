new Chart(document.getElementById("myChart"), {
  type: "radar",
  data: {
    labels: [
      "HTML",
      "CSS",
      "Javascript Vanilla",
      "Bootstrap v4",
      "React",
      "Angular JS",
    ],
    datasets: [
      {
        data: [9, 8, 8, 8, 7, 6],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointStyle: "circle",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointHoverBorderColor: "rgb(255, 99, 132)"
      }
    ]
  },
  options: { elements: { line: { tension: 0, borderWidth: 4 } } }
});