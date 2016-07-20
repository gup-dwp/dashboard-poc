google.charts.load("current", {packages:["bar", "corechart", "table"]});
google.charts.setOnLoadCallback(drawChart2);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title:  'My Daily Activities',
    titleTextStyle : {
      bold: true,
      fontSize: 16
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart-1'));
  chart.draw(data, options);

  google.charts.setOnLoadCallback(drawChart);


    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ]);

    var options = {
      chart: {
        //title: 'Company Performance',
      },
      series: {
        0: { color: '#000000' },
        1: { color: '#e7711b' },
        2: { color: '#f1ca3a' },
        3: { color: '#6f9654' },
        4: { color: '#1c91c0' },
        5: { color: '#43459d' },
      }
    };

    var chart = new google.charts.Bar(document.getElementById('chart-2'));

    chart.draw(data, options);

      /*  var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Bob',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('chart-3'));

        table.draw(data, {showRowNumber: false, width: '90%', height: '100%'});*/

  }

  function drawChart2(data,rows) {
    console.log(rows);
  }

  function sortData(data) {
    console.log(data);
    var rowsTotal = data.rows,
        rows      = [];

    for (i=1; i<=rowsTotal; i++) {

        var objName = 'chart1data' + i;
        rows.push(data[objName]);

    }
    drawChart2(data,rows)
  }

  function getData(data) {
    for (i=0; i<data.length;i++) {
      var rows = [],
          rowObj = {},
          cells =data[i].content.$t.split(',');

      for (var j=0; j<cells.length; j++) {
          var keyVal = cells[j].split(':');
          rowObj[keyVal[0].trim()] = keyVal[1].trim();
      }
      rows.push(rowObj);

      if (rows[0].visible.toLowerCase() === 'true') {
        sortData(rows[0])
      }
    }
  }

  $.ajax({
		url:"https://spreadsheets.google.com/feeds/list/1gOuL1XQTsnfg6cSFTC1sSMW8E57cRql8CPhF73JRUDM/o5asou/public/basic?alt=json",
		contentType: "application/json-in-script; charset=utf-8",
		dataType: "jsonp",
    success: function(data){
      getData(data.feed.entry)
    }
  })
