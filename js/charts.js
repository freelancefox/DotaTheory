$(function () {
  $('#stats1').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'rgba(255,255,255,0.175)'
    },


    title: {
      text: 'Total Base Stats',
      margin: 0,
      style: {
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
        'Silencer',
        'Bloodseeker',
        'Leshrac',
        '<b>Winter Wyvern</b>',
        'Storm Spirit',
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
          fontSize:'0.75em',
          color:'#1D3E37'
        }
      }
    },

    series: [{
      name: 'Intelligence',
      data: [21, 26, 22, 20, 27, 18, 26, 25, 24, 14]
    }, {
      name: 'Strength',
      data: [21, 19, 22, 23, 17, 23, 16, 24, 19, 17]
    }, {
      name: 'Agility',
      data: [29, 24, 22, 23, 22, 24, 23, 16, 22, 34]
    }]
  });
});
$(function () {
  $('#stats2').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Total Stat Growths',
      margin: 0,
      style: {
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: [
        'Silencer',
        'Centaur Warrunner',
        'Invoker',
        'Vengeful Spirit',
        'Luna',
        'Naga Siren',
        'Morphling',
        'Ogre Magi',
        'Treant Protector',
        '<b>Winter Wyvern</b>',
        'Bloodseeker',
        'Magnus',
        'Outworld Devourer'],
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
          fontSize:'0.75em',
          color:'#1D3E37'
        }
      }
    },

    series: [{
      name: 'Intelligence',
      data: [2.5, 1.6, 4, 1.5, 1.85, 1.95, 1.5, 2.4, 1.8, 3.1, 1.7, 1.65, 2.7]
    }, {
      name: 'Strength',
      data: [2.2, 4, 1.7, 2.6, 2.2, 2.5, 2, 3.2, 3.3, 2.1, 2.4, 2.9, 2.3]
    }, {
      name: 'Agility',
      data: [3, 2, 1.9, 3.3, 3.3, 2.75, 3.7, 1.55, 2, 1.9, 3, 2.5, 2]
    }]
  });
});
$(function () {
  $('#blast').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Top AoE Nukes by DPS',
      margin: 0,
      style: {
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
        'Shadowraze',
        'Arc Lightning',
        'Static Remnant',
        'Nether Blast',
        'Crypt Swarm',
        'Anchor Smash',
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
        'Powershot',
        'Dragon Slave'],
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
        return '<b>' + this.x + '<br>' +
          this.point.hero + '</b><br/>' +
          this.series.name + ': ' + this.y +
          '<br/>Damage: ' + this.point.damage +
          '<br/>Cooldown: ' + this.point.cooldown +
          '<br/>Manacost: ' + this.point.manacost;
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
      data: [{y: 97.5,
              color: '#450500',
              hero: 'Shadow Fiend',
              damage: '325*3',
              cooldown: 10,
              manacost: '90*3'
             },
             {y: 90.6,
              color: '#C3FAFC',
              hero: 'Zeus',
              damage: 145,
              cooldown: 1.6,
              manacost: 80
             },

             {y: 74.3,
              color: '#2470A7',
              hero: 'Storm Spirit',
              damage: 260,
              cooldown: 3.5,
              manacost: 100
             },
             {y: 65,
              color: '#AFC932',
              hero: 'Pugna',
              damage: 325,
              cooldown: 5,
              manacost: 145
             },
             {y: 60,
              color: '#85E2AC',
              hero: 'Death Prophet',
              damage: 300,
              cooldown: 5,
              manacost: 165
             },
             {y: 56.25,
              color: '#568A7C',
              hero: 'Tidehunter',
              damage: 225,
              cooldown: 4,
              manacost: 60
             },
             {y: 55,
              color: '#7A4B18',
              hero: 'Timbersaw',
              damage: 220,
              cooldown: 4,
              manacost: 90
             },
             {y: 50,
              color: '#FF36FF',
              hero: 'Leshrac',
              damage: 200,
              cooldown: 4,
              manacost: 120
             },
             {y: 50,
              color: '#FEFDE1',
              hero: 'Keeper of the Light',
              damage: 500,
              cooldown: 10,
              manacost: 180
             },
             {y: 50,
              color: '#144661',
              hero: 'Slark',
              damage: 300,
              cooldown: 6,
              manacost: 40
             },
             {y: 48.6,
              color: '#76E1FD',
              hero: 'Winter Wyvern',
              damage: 340,
              cooldown: 7,
              manacost: 150
             },
             {y: 48,
              color: '#FDE00B',
              hero: 'Ursa',
              damage: 240,
              cooldown: 5,
              manacost: 75
             },
             {y: 42.9,
              color: '#E55D77',
              hero: 'Queen of Pain',
              damage: 300,
              cooldown: 7,
              manacost: 140
             },
             {y: 42.9,
              color: '#099ECA',
              hero: 'Magnus',
              damage: 300,
              cooldown: 7,
              manacost: 90
             },
             {y: 41.7,
              color: '#7A4B18',
              hero: 'Timbersaw',
              damage: 250,
              cooldown: 6,
              manacost: 70
             },
             {y: 40,
              color: '#F3B515',
              hero: 'Shadow Shaman',
              damage: 320,
              cooldown: 8,
              manacost: 160
             },
             {y: 40,
              color: '#45815D',
              hero: 'Windranger',
              damage: 360,
              cooldown: 9,
              manacost: 120
             },
             {y: 40,
              color: '#F49F35',
              hero: 'Lina',
              damage: 320,
              cooldown: 8,
              manacost: 145
             }]
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
