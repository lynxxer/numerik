import { Component, OnInit } from '@angular/core';
import random from 'highcharts-random'
// Load Highcharts
const Highcharts = require('highcharts');
const random = require('highcharts-random')

// Alternatively, this is how to load Highstock. Highmaps is similar.
// var Highcharts = require('highcharts/highstock');
 
// Load the exporting module, and initialize it.
require('highcharts/modules/exporting')(Highcharts);
//disabled for performance reasons for now:
require('highcharts/modules/stock.src')(Highcharts);
require('highcharts/modules/exporting.src')(Highcharts);
require('highcharts/modules/offline-exporting.src')(Highcharts);
require('highcharts/modules/export-data.src')(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public count = 0 ;

  constructor() { }

  incNumber() {
    setInterval(() => {
      this.count++;
    }, 2000)
  }

  ngOnInit() {
 // Create the chart
 Highcharts.chart('container', {
  chart: {
      type: 'column',
      renderTo: 'container',
      backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
      text: 'Banesat e shitura gjat vitit te kaluar'.toUpperCase()
  },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
      ],
      crosshair: true,
      max: 11,
  },
  yAxis: {
      min: 0,
      allowDecimals: false,
      title: {
          text: 'Numri i Banesave'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + 
          '<td style="padding:0"><b>{point.y:.0f} banesa</b></td></tr>',
      footerFormat: '</table>',
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Dardani',
      data: random.data(12)

  }, {
      name: 'Pejton',
      data: random.data(12)

  }, {
      name: 'Bregu Diellit',
      data: random.data(12)

  }, {
      name: 'Emshir',
      data: random.data(12)

  }]
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SECOND CHART.!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Highcharts.chart('secondContainer', {
  chart: {
      type: 'bar',
      renderTo: 'secondContainer',
      backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
      text: 'Banesat ne pritje'.toUpperCase()
  },
  subtitle: {
      text: null
  },
  xAxis: {
      categories: ['Dardani', 'Pejton', 'Bregu i Diellit', 'Emshir', 'Other'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Numri i Banesave',
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
    showLegend: true,
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 2017',
      data: random.data(5)
  }, {
      name: 'Year 2018',
      data: random.data(5)
  }, {
      name: 'Year 2019',
      data: random.data(5)
  }, {
      name: 'Year 2020',
      data: random.data(5)
      }]
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//THIRD CHART.!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    Highcharts.chart('container4', {
        chart: {
            type: 'bar',
            renderTo: 'secondContainer',
            backgroundColor: 'rgba(0,0,0,0)'
        },
    
        title: {
            text: 'LAGJET NE PRISHTINE'.toUpperCase(),
        },
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
    
        series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            data: [
                ['1', 29.9, false],
                ['2', 71.5, false],
                ['3', 106.4, false],
                ['4', 129.2, false],
                ['5', 144.0, false],
                ['6', 176.0, false],
                ['7', 135.6, true, true],
                ['8', 148.5, false]
            ],
            showInLegend: true
        }]
    });
}    
}