Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
$(function () {
  $('#stats1').highcharts({

    chart: {
      type: 'bar',
      backgroundColor:'rgba(255,255,255,0.175)'
    },


    title: {
      text: 'Initiation Range',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '9px',
        fontWeight: 'normal'
      }
    },

    xAxis: {
      categories: [
        'Burrowstrike',
        'Sheepstick',
        'Ethereal Blade',
        'Burrow + AeL',
        'Sheep + AeL',
        'Eblade + AeL',
        'Burrow + Aghs',
        'Burrow+Aghs/AeL'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      max: 3000,
      tickInterval: 250,
      title: {
        text: null
      },
      stackLabels: {
        enabled: true,
        style: {
          fontSize:'0.75em',
          color:'#1D3E37'
        }
      }
    },

    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color:'#1D3E37'
        }
      }
    },

    series: [{
      name: 'Cast Range',
      data: [650, 800, 800, 850, 1000, 1000, 1300, 1500]
    }, {
      name: 'Cast Range + Blink Range',
      data: [1850, 2000, 2000, 2250, 2400, 2400, 2500, 2700]
    }]
  });
});
$(function () {
  $('#stats2').highcharts({

    chart: {
      type: 'bar',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Uptime',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '9px',
        fontWeight: 'normal'
      }
    },

    xAxis: {
      categories: [
        'Burrowstrike',
        'Blink Dagger',
        'Boots of Travel',
        'Eul\'s',
        'Sheepstick',
        'BKB',
        'Shiva\'s',
        'Veil',
        'Epicenter'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      max: 100,
      tickInterval: 20,
      title: {
        text: null
      },
      stackLabels: {
        enabled: true,
        style: {
          fontSize:'0.75em',
          color:'#1D3E37'
        }
      }
    },

    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color:'#1D3E37'
        }
      }
    },

    series: [{
      name: 'Duration',
      data: [2.17, 0, 0, 2.5, 3.5, 5, 4, 16, 3]
    }, {
      name: 'Cooldown',
      data: [11, 12, 45, 23, 25, 55, 30, 20, 100]
    }, {
      name: 'Cooldown w/ Octarine',
      data: [8.25, 9, 33.75, 17.25, 18.75, 41.25, 22.5, 15, 75]
    }]
  });
});
$(function () {
  $('#stats3').highcharts({

    chart: {
      type: 'bar',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Total Damage Output',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '9px',
        fontWeight: 'normal'
      }
    },

    xAxis: {
      categories: [
        'Dagon EB Veil AeL',
        'Shiva\'s EB Veil AeL',
        'Dagon EB AeL',
        'EB Veil',
        'Dagon EB',
        'Dagon Veil AeL',
        'EB',
        'Shiva\'s Veil',
        'Dagon',
        'Veil',
        'Shiva\'s',
        'AeL',
        'Plain'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      max: 3600,
      tickInterval: 400,
      title: {
        text: null
      },
      stackLabels: {
        enabled: true,
        style: {
          fontSize:'0.75em',
          color:'#1D3E37'
        }
      }
    },

    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color:'#1D3E37'
        }
      },
      series: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'Shiva\'s',
      data: [0, 286, 0, 0, 0, 0, 0, 194, 0, 0, 154, 0, 0]
    }, {
      name: 'Burrowstrike lvl 4',
      data: [400, 403, 318, 378, 303, 284, 300, 273, 215, 268, 217, 224, 213]
    }, {
      name: 'Eblade @ lvl 16 (72 str)',
      data: [339, 328, 256, 313, 244, 0, 235, 0, 0, 0, 0, 0, 0]
    }, {
      name: 'Single Epi Pulse/Passive Caustic Proc',
      data: [159, 160, 126, 150, 120, 112, 119, 108, 85, 106, 86, 88, 84]
    }, {
      name: 'Full Epi 3 @ lvl 16 (45 int)',
      data: [1590, 1600, 1260, 1500, 1200, 1120, 1190, 1080, 850, 1060, 860, 880, 840]
    }, {
      name: 'Dagon 1',
      data: [572, 0, 454, 0, 433, 406, 0, 0, 308, 0, 0, 0, 0]
    }]
  });
});
$(function () {
  $('#stats4').highcharts({

    chart: {
      type: 'bar',
      alignTicks: false,
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      margin: 0,
      text: 'DPS Increase per Item',
      style: {
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '9px',
        fontWeight: 'normal'
      }
    },

    xAxis: {
      categories: [
        'Dagon EB Veil AeL',
        'EB Veil',
        'Dagon EB AeL',
        'Dagon EB',
        'Shiva\'s EB AeL',
        'EB',
        'Dagon Veil AeL',
        'Shiva\'s Veil',
        'Veil',
        'Dagon',
        'Shiva\'s',
        'AeL',
        'Plain'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: [{
      opposite: true,
      allowDecimals: false,
      min: 0,
      max: 180,
      tickInterval: 30,
      title: {
        text: 'DPS',
        margin: 0,
        style: {
          color: Highcharts.getOptions().colors[0]
        },
      },
      labels: {
        enabled: true,
        style: {
          fontSize:'0.75em',
          color: Highcharts.getOptions().colors[0]
        }
      }
    }, {
      title: {
        margin: -4,
        text: 'Total Cost',
        style: {
          color: Highcharts.getOptions().colors[3]
        },
      },
      allowDecimals: false,
      min: 0,
      max: 18000,
      tickInterval: 3000,
      labels: {
        enabled: true,
        style: {
          fontSize:'0.75em',
          color: Highcharts.getOptions().colors[3]
        }
      }
    }],

    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}'
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          color:'#1D3E37'
        }
      }
    },

    series: [{
      yAxis: 0,
      name: 'DPS (Epi 3+Passive CF+Burrow)',
      data: [111.72, 89.68, 87.95, 83.95, 82.84, 70.59, 67.12, 59.92, 52.46, 50.85, 47.63, 43.66, 41.60]
    }, {
      yAxis: 0,
      name: 'DPS w/ Octarine',
      data: [142.43, 113.09, 112.10, 106.97, 105.07, 88.93, 84.63, 75.10, 65.12, 64.11, 59.70, 54.22, 50.05]
    }, {
      yAxis: 1,
      name: 'Total Cost',
      data: [11960, 6940, 9720, 7420, 11700, 4700, 7260, 6940, 2240, 2720, 4700, 2300, 0]
    }, {
      yAxis: 1,
      name: 'Total Cost w/ Octarine',
      data: [17860, 12840, 15620, 13320, 17600, 10600, 13160, 12840, 8140, 8620, 10600, 8200, 5900]
    }]
  });
});
$(function () {
  $('#blast').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Burrow + Caustic Damage per Level',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: [
        'Lvl 1',
        'Lvl 2',
        'Lvl 3',
        'Lvl 4',
        'Lvl 5',
        'Lvl 6',
        'Lvl 7',
        'Lvl 8'],
      useHTML: 'true',
      labels: {
        style: {
          fontSize:'0.85em'
        }
      }
    },

    yAxis: {
      tickInterval: '300',
      max: '900',
      style: {
        fontSize:'0.75em',
        color:'#1D3E37'
      },
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + ' magic dmg';
      }
    },

    credits: {
      enabled: false
    },

    legend: {
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '9px',
        fontWeight: 'normal'
      }
    },

    series: [{
      name: 'BS + No CF',
      type: 'column',
      data: [75, 75, 121, 121, 167, 167, 213, 213]
    },
    {name: 'BS + ½ CF',
      type: 'column',
      data: [75, 109, 155, 170, 216, 231, 277, 296]
    },
    {name: 'BS + 1 CF',
      type: 'column',
      data: [75, 143, 189, 219, 265, 296, 342, 380]
    },
    {name: 'BS + 2 CF',
      type: 'column',
      data: [75, 211, 257, 317, 363, 425, 471, 547]
    },
    {name: 'BS + 3 CF',
      type: 'column',
      data: [75, 279, 325, 415, 461, 554, 600, 714]
    },
    {name: 'BS + 4 CF',
      type: 'column',
      data: [75, 347, 393, 513, 559, 683, 729, 881]
    }]
  });
});
$(function () {
  $('#blast2').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Top AoE Nukes by DPS',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Arc Lightning',
        'Shadowraze',
        'Crypt Swarm',
        'Static Remnant',
        'Nether Blast',
        'Timber Chain',
        'Lightning Storm',
        'Illuminate',
        'Dark Pact',
        '<b>Splinter Blast</b>',
        'Earthshock',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Powershot'],
      useHTML: 'true',
      labels: {
        style: {
          fontSize:'0.85em'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize:'0.75em',
        color:'#1D3E37'
      },
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [109.3, 97.5, 75, 74.3, 59.1, 55, 50, 50, 50, 48.6, 48, 42.9, 42.9, 41.7, 40, 40]
    }]
  });
});
$(function () {
  $('#blast3').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Top AoE Nukes by DPS',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Arc Lightning',
        'Shadowraze',
        'Crypt Swarm',
        'Static Remnant',
        'Nether Blast',
        'Timber Chain',
        'Lightning Storm',
        'Illuminate',
        'Dark Pact',
        '<b>Splinter Blast</b>',
        'Earthshock',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Powershot'],
      useHTML: 'true',
      labels: {
        style: {
          fontSize:'0.85em'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize:'0.75em',
        color:'#1D3E37'
      },
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [109.3, 97.5, 75, 74.3, 59.1, 55, 50, 50, 50, 48.6, 48, 42.9, 42.9, 41.7, 40, 40]
    }]
  });
});
$(function () {
  $('#blast4').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Top AoE Nukes by DPS',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Arc Lightning',
        'Shadowraze',
        'Crypt Swarm',
        'Static Remnant',
        'Nether Blast',
        'Timber Chain',
        'Lightning Storm',
        'Illuminate',
        'Dark Pact',
        '<b>Splinter Blast</b>',
        'Earthshock',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Powershot'],
      useHTML: 'true',
      labels: {
        style: {
          fontSize:'0.85em'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize:'0.75em',
        color:'#1D3E37'
      },
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [109.3, 97.5, 75, 74.3, 59.1, 55, 50, 50, 50, 48.6, 48, 42.9, 42.9, 41.7, 40, 40]
    }]
  });
});
$(function () {
  $('#curse').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'BKB-piercing Disable Ranges',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Hookshot',
        'Chaotic Offering',
        'Supernova',
        '<b>Winter\'s Curse</b>',
        'Nether Strike',
        'Fiend\'s Grip',
        'Primal Roar',
        'Reverse Polarity',
        'Berserker\'s Call'],
      useHTML: 'true',
      labels: {
        style: {
          fontSize:'0.9em'
        }
      }

    },

    yAxis: {
      tickInterval: '500',
      max: '3000',
      style: {
        fontSize:'0.75em',
        color:'#1D3E37'
      },
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: 'Effective Range',
      data: [3000, 1800, 1000, 800, 700, 625, 600, 410, 300],
    }]
  });
});
$(function () {
  $('#current').highcharts({

    chart: {
      type: 'pie',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },

    title: {
      text: 'TI5',
      style: {
        margin:'4px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    tooltip: {
      formatter: function () {
        return this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stackipredictee: 'normal'
      }
    },

    series: [{
      name: "Pick Rate",
      colorByPoint: true,
      data: [{
        name: "5",
        y: 0.42
      }, {
        name: "4",
        y: 0.58
      }]
    }]
  });
});
$(function () {
  $('#predicted').highcharts({

    chart: {
      type: 'pie',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },

    title: {
      text: 'Predicted',
      style: {
        margin:'4px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    tooltip: {
      formatter: function () {
        return this.series.name + ': ' + this.y;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: [{
      name: "Pick Rate",
      colorByPoint: true,
      data: [{
        name: "5",
        y: 0.42
      }, {
        name: "4",
        y: 0.15
      }, {
        name: "3",
        y: 0.17
      }, {
        name: "2",
        y: 0.25
      }, {
        name: "1",
        y: 0.01
      }]
    }]
  });
});
