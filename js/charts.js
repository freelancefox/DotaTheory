$(function () {
  $('#stats1').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },


    title: {
      text: 'Total Base Stats',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: [
        'Phantom Lancer',
        'Outworld Devourer',
        'Bane',
        'Meepo',
        'Bloodseeker',
        'Leshrac',
        '<b>Winter Wyvern</b>',
        'Riki'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      tickInterval: 10,
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
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },

    credits: {
      enabled: false
    },

    legend: {
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
      name: 'Intelligence',
      data: [21, 26, 22, 20, 18, 26, 25, 14]
    }, {
      name: 'Strength',
      data: [21, 19, 22, 23, 23, 16, 24, 17]
    }, {
      name: 'Agility',
      data: [29, 24, 22, 23, 24, 23, 16, 34]
    }]
  });
});
$(function () {
  $('#stats2').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Total Stat Growths',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: [
        'Silencer',
        'Vengeful Spirit',
        'Invoker',
        'Outworld Devourer',
        'Centaur Warrunner',
        'Ogre Magi',
        'Treant Protector',
        '<b>Winter Wyvern</b>',
        'Naga Siren'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      tickInterval: 5,
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
      pointFormat: '{series.name} Gain: {point.y}<br/>Total: {point.stackTotal}'
    },

    credits: {
      enabled: false
    },

    legend: {
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
      name: 'Intelligence',
      data: [2.5, 1.75, 4, 3.3, 1.6, 2.4, 1.8, 3.1, 1.95]
    }, {
      name: 'Strength',
      data: [2.2, 2.6, 1.7, 2.3, 3.8, 3.2, 3.3, 2.1, 2.3]
    }, {
      name: 'Agility',
      data: [3, 3.3, 1.9, 2, 2, 1.55, 2, 1.9, 2.75]
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
      data: [109.3, 75, 74.3, 59.1, 55, 50, 50, 50, 48.6, 48, 42.9, 42.9, 41.7, 40, 40]
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
