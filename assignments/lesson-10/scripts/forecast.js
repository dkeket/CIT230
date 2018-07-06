google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'F');

      data.addRows([
        [1, 89],   [2, 87], [3, 78],  [4, 75],  [5, 72],
        [6, 72],  [7, 77],  [8, 83],  [9, 85],  [10, 89], 
      ]);

      var options = {
        hAxis: {
          title: 'Days'
        },
        vAxis: {
          title: 'Temperature'
        },
        backgroundColor: 'white'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }