// Stock Chart (Numerical Analysis)
const stockCtx = document.getElementById('stockChart').getContext('2d');
new Chart(stockCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Stock Price',
      data: [25000, 26000, 25500, 27000, 27500],
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Sentiment Chart
const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
new Chart(sentimentCtx, {
  type: 'bar',
  data: {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      label: 'Sentiment Score',
      data: [65, 20, 15],
      backgroundColor: ['#10b981', '#fbbf24', '#ef4444']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});
