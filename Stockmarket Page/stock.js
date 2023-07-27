document.addEventListener('DOMContentLoaded', function () {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
// Sample Stock data for the charts-------------------------------
    const stockData = {
      labels: months,
      datasets: [
        {
          label: 'Stock Price',
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          data: [150, 170, 160, 180, 175, 190, 200, 220, 210, 230, 225, 240]
        }
      ]
    };
  
    const stockVolumeData = {
      labels: months,
      datasets: [
        {
          label: 'Stock Volume',
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 2,
          data: [30000, 28000, 32000, 27000, 29000, 31000, 35000, 38000, 34000, 39000, 36000, 40000]
        }
      ]
    };
  
    const stockDistributionData = {
      labels: ['Tech', 'Finance', 'Healthcare', 'Energy', 'Retail'],
      datasets: [
        {
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
          borderWidth: 2,
          data: [45, 30, 25, 20, 15]
        }
      ]
    };
  
    const stockPolarData = {
      labels: ['Tech', 'Finance', 'Healthcare', 'Energy', 'Retail'],
      datasets: [
        {
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
          borderWidth: 2,
          data: [35, 40, 25, 30, 20]
        }
      ]
    };
  
    const stockOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
// Line Chart---------------------------------
    const lineChartCanvas = document.getElementById('lineChart').getContext('2d');
    new Chart(lineChartCanvas, {
      type: 'line',
      data: stockData,
      options: stockOptions
    });
  
// Bar Chart----------------------------------
    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCanvas, {
      type: 'bar',
      data: stockVolumeData,
      options: stockOptions
    });
  
// Pie Chart----------------------------------
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChartCanvas, {
      type: 'pie',
      data: stockDistributionData,
      options: {
        ...stockOptions,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 15
            }
          }
        }
      }
    });
  
    const polarAreaChartCanvas = document.getElementById('polarAreaChart').getContext('2d');
    new Chart(polarAreaChartCanvas, {
      type: 'polarArea',
      data: stockPolarData,
      options: stockOptions
    });
  
    const totalRevenue = stockData.datasets[0].data.reduce((total, value) => total + value, 0);
    document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;

// Sample data for the scatter plot:
  const scatterData = [];
  for (let i = 0; i < months.length; i++) {
    scatterData.push({
      x: Math.random() * 100, // Random stock prices
      y: Math.random() * 1000 // Random stock volume
    });
  }

  const donutData = {
    labels: ['Tech', 'Finance', 'Healthcare', 'Energy', 'Retail'],
    datasets: [
      {
        data: [30, 20, 15, 10, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40']
      }
    ]
  };

// Scatter Plot------------------------
  const scatterChartCanvas = document.getElementById('scatterChart').getContext('2d');
  new Chart(scatterChartCanvas, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Stock Price vs Volume',
          data: scatterData,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Stock Price'
          },
          beginAtZero: true
        },
        y: {
          title: {
            display: true,
            text: 'Stock Volume'
          },
          beginAtZero: true
        }
      }
    }
  });

// Donut Chart---------------------------
  const donutChartCanvas = document.getElementById('donutChart').getContext('2d');
  new Chart(donutChartCanvas, {
    type: 'doughnut',
    data: donutData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 15
          }
        }
      }
    }
  });

  const radarData = {
    labels: ['Growth', 'Dividend', 'Value', 'Momentum', 'Income'],
    datasets: [
      {
        label: 'Stock Metrics',
        data: [8, 7, 6, 9, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

// Sample data for the bubble chart
  const bubbleData = {
    datasets: [
      {
        label: 'Tech',
        data: [
          { x: 4, y: 8, r: 12 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      },
      {
        label: 'Finance',
        data: [
          { x: 6, y: 7, r: 10 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      },
      // Add more sectors here...
    ]
  };

  // Radar Chart
  const radarChartCanvas = document.getElementById('radarChart').getContext('2d');
  new Chart(radarChartCanvas, {
    type: 'radar',
    data: radarData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scale: {
        ticks: { beginAtZero: true, max: 10 }
      }
    }
  });

  // Bubble Chart
  const bubbleChartCanvas = document.getElementById('bubbleChart').getContext('2d');
  new Chart(bubbleChartCanvas, {
    type: 'bubble',
    data: bubbleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Risk'
          },
          beginAtZero: true
        },
        y: {
          title: {
            display: true,
            text: 'Return'
          },
          beginAtZero: true
        }
      }
    }
  });

  const mixedData = {
    labels: months,
    datasets: [
      {
        type: 'line',
        label: 'Stock Price',
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        data: [150, 170, 160, 180, 175, 190, 200, 220, 210, 230, 225, 240]
      },
      {
        type: 'bar',
        label: 'Stock Volume',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        data: [30000, 28000, 32000, 27000, 29000, 31000, 35000, 38000, 34000, 39000, 36000, 40000]
      }
    ]
  };
// Mixed Chart---------------------
  const mixedChartCanvas = document.getElementById('mixedChart').getContext('2d');
  new Chart(mixedChartCanvas, {
    type: 'bar',
    data: mixedData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  });
  