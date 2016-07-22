google.charts.load("current", {packages:["bar", "corechart", "table"]});

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Online', 'Paper'],
    ['Loan given', 92, 70],
    ['No loan given', 22, 33]
  ]);

  var options = {
    bar: {groupWidth: "75%"},
    bars: 'horizontal',
      hAxis: {
          minValue: 0,
          maxValue: 100,
          textStyle : {
              fontSize: 18 // or the number you want
          },
        },
        vAxis : {
          textStyle : {
              fontSize: 18,
          }
        },
      colors: ['#6F777B', '#BFC1C3']
  };

  var chart = new google.charts.Bar(document.getElementById('chart-1'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

}

function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Channel', 'Application in transit', 'Processor makes decision',"Applicant accepts offer",'Loan Paid'],
        ['Online', 0,5,8,4],
        ['Paper', 4,8,8,7]
      ]);

      var options = {
        chartArea: {width: '55%'},
        isStacked: true,
        //bars: 'horizontal',
        legend: {
          position: 'right'
        },
        vAxis : {
          textStyle : {
              fontSize: 18,
          }
        },
        hAxis: {
          maxValue: 30,
          gridlines: { count: 4 },
          textStyle : {
              fontSize: 18 // or the number you want
          }
        },
        colors: ['#f8f8f8', '#BFC1C3','#DEE0E2','#6F777B']
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart-2'));
      chart.draw(data, options);
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Paper', 'Online'],
    ['Mon', 0, 9],
    ['Tues', 0, 5],
    ['Weds', 2, 6],
    ['Thurs', 1, 10],
    ['Fri', 2, 2],
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,2,
                   { calc: "stringify",
                     sourceColumn: 2,
                     type: "string",
                     fontSize: 18,
                     role: "annotation" }
                   ]);

  var options = {
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    isStacked: true,
    //height : 250,
    hAxis : {
      textStyle : {
          fontSize: 18,
      }
    },
    vAxis : {
      title : "Number of applications",
      gridlines: { count: 5 },
      maxValue : 11,
      titleTextStyle: {italic: false}
    },
    colors: ['#BFC1C3', '#6F777B'],
    annotations: {
      textStyle: {
        fontSize: 18,
        bold: true,
        color: '#000',     // The color of the text.
    }
  }
}

  var chart = new google.visualization.ColumnChart(document.getElementById('chart-3'));
  chart.draw(view, options);

}

function drawChart4() {

  var data = google.visualization.arrayToDataTable([
    ['', ''],
    ["Have'nt been on benefits long enough",    25],
    ['Had a break from benefits for more than 4 weeks',      4],
    ['Get contribution-based JSA or ESA',  6],
    ['Not on benefits', 8],
    ['To much Social Fund Debt',     45],
  ]);

  var options = {
    colors: ['#000000', '#BFC1C3','#DEE0E2','#6F777B','#6F777B'],
    pieSliceText: ''
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-4'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
