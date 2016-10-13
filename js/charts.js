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
  $('#stats3').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Total Stats at Level 25',
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
        'Naga Siren',
        'Outworld Devourer',
        'Vengeful Spirit',
        'Centaur Warrunner',
        '<b>Winter Wyvern</b>',
        'Bloodseeker',
        'Dazzle',
        'Invoker',
        'Treant Protector'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      tickInterval: 25,
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
      pointFormat: 'Total base {series.name} at lvl 25: {point.y}<br/>Total: {point.stackTotal}'
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
      data: [87, 69, 90.8, 49, 53.4, 99.4, 58.8, 108.6, 112, 60.2]
    }, {
      name: 'Strength',
      data: [69.8, 81, 74.2, 80.4, 119, 74.4, 80.6, 60.4, 57.8, 104.2]
    }, {
      name: 'Agility',
      data: [94, 87, 72, 106.2, 63, 61.6, 96, 61.8, 59.6, 63]
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
          's<br/>Manacost: ' + this.point.manacost;
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
$(function () {
  $('#winratebars').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Wyvern Winrate by Role & Farm at TI6',
      style: {
        margin:'8px',
        color:'#1D3E37',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      color:'#1D3E37',
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      padding: 0,
      floating: false,
      itemStyle: {
        fontSize: '12px',
        fontWeight: 'normal'
      }
    },

    xAxis: {
      title: {
        text: 'Position vs Farm',
        style: {
          color:'#1D3E37'
        }
      },
      categories: ['4', '5'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: -250,
      max: 650,
      tickInterval: 100,
      title: {
        text: 'Game Length in Minutes',
        style: {
          color:'#1D3E37'
        }
      },
      stackLabels: {
        enabled: true,
        formatter: function() {
          var pct = [0, 0];
          var nct = [0, 0];
          var series = this.axis.series;

          for (var i in series){
            if (series[i].yData[this.x] > 0) {
              if (series[i].stackKey == 'column4') { pct[0] += 1; }
              else if (series[i].stackKey == 'column5') { pct[1] += 1; }
            }
            else if (series[i].yData[this.x] < 0) {
              if (series[i].stackKey == 'column4') { nct[0] += 1; }
              else if (series[i].stackKey == 'column5') { nct[1] += 1; }
            }
          }
          if (!this.isNegative) {
            if (this.stack == '4') { return pct[0] + " wins"; }
            else if (this.stack == '5') { return pct[1] + " wins"; }
          }
          else {
            if (this.stack == '4') { return nct[0] + " losses"; }
            else if (this.stack == '5') { return nct[1] + " losses"; }
          }
        },
        style: {
          fontSize:'0.65em',
          color:'#1D3E37'
        }
      }
    },

    tooltip: {
      headerFormat: '<b>{point.x}-pos WW by {series.name}',
      pointFormat: '.{point.playername}:</b><br/> {point.y} minute game vs. {point.opponent}<br><b>Gold Per Minute:</b> {point.gpm}<br><b>% of Team\'s Net Worth:</b> {point.percentnw}'
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        cursor: 'pointer',
        stacking: 'normal',
        dataLabels: {
          enabled: false,
          color:'#1D3E37'
        },
        point: {
          events: {
            click: function() { window.open(this.url); }
          }
        }
      }
    },

    series: [{
      name: 'EG',
      color: '#2E6797',
      stack: '4',
      data: [0, {
        playername: 'ppd',
        y: -23.77,
        opponent: 'Wings',
        gpm: 248,
        percentnw: '14.3%',
        url: 'http://www.dotabuff.com/matches/2566800064'
      }]
    }, {
      name: 'EG',
      color: '#2E6797',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'ppd',
        y: 31.07,
        opponent: 'Newbee',
        gpm: 240,
        percentnw: '11.6%',
        url: 'http://www.dotabuff.com/matches/2560158271'
      }]
    }, {
      name: 'EG',
      color: '#2E6797',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'ppd',
        y: 72.1,
        opponent: 'TNC',
        gpm: 275,
        percentnw: '12.6%',
        url: 'http://www.dotabuff.com/matches/2549111670'
      }]
    }, {
      name: 'EG',
      color: '#2E6797',
      linkedTo: ':previous',
      stack: '4',
      data: [0, {
        playername: 'ppd',
        y: 15.45,
        opponent: 'VB',
        gpm: 255,
        percentnw: '13.2%',
        url: 'http://www.dotabuff.com/matches/2461672415'
      }]
    }, {
      name: 'EHOME',
      color: '#414141',
      stack: '5',
      data: [0, {
        playername: 'Fenrir',
        y: 38.58,
        opponent: 'VG.R',
        gpm: 303,
        percentnw: '13%',
        url: 'http://www.dotabuff.com/matches/2469469364'
      }]
    }, {
      name: 'Na\'vi',
      color: '#FFF200',
      stack: '5',
      data: [0, {
        playername: 'Sonneiko',
        y: -35.12,
        opponent: 'TNC',
        gpm: 314,
        percentnw: '15.2%',
        url: 'http://www.dotabuff.com/matches/2547331853'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: -45.48,
        opponent: 'Wings',
        gpm: 305,
        percentnw: '16.5%',
        url: 'http://www.dotabuff.com/matches/2569531910'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '4',
      data: [0, {
        playername: 'Saksa',
        y: 28.23,
        opponent: 'TNC',
        gpm: 408,
        percentnw: '15.5%',
        url: 'http://www.dotabuff.com/matches/2564408925'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: 56.8,
        opponent: 'LGD',
        gpm: 316,
        percentnw: '12.9%',
        url: 'http://www.dotabuff.com/matches/2560502724'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: 27.22,
        opponent: 'Complexity',
        gpm: 483,
        percentnw: '17.5%',
        url: 'http://www.dotabuff.com/matches/2468728087'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: 28.97,
        opponent: 'Complexity',
        gpm: 315,
        percentnw: '13.1%',
        url: 'http://www.dotabuff.com/matches/2468689041'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: 29.77,
        opponent: 'Complexity',
        gpm: 386,
        percentnw: '15.3%',
        url: 'http://www.dotabuff.com/matches/2468492567'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Saksa',
        y: 22.42,
        opponent: 'FDL',
        gpm: 260,
        percentnw: '11.7%',
        url: 'http://www.dotabuff.com/matches/2464111444'
      }]
    }, {
      name: 'Escape',
      color: '#E7853E',
      stack: '5',
      data: [0, {
        playername: 'Synderen',
        y: 71.75,
        opponent: 'Alliance',
        gpm: 299,
        percentnw: '12.1%',
        url: 'http://www.dotabuff.com/matches/2550971502'
      }]
    }, {
      name: 'Escape',
      color: '#E7853E',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Synderen',
        y: -33.13,
        opponent: 'Ad Finem',
        gpm: 175,
        percentnw: '11.7%',
        url: 'http://www.dotabuff.com/matches/2550971502'
      }]
    }, {
      name: 'Escape',
      color: '#E7853E',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Synderen',
        y: 48.67,
        opponent: 'Fantastic 5',
        gpm: 234,
        percentnw: '10.4%',
        url: 'http://www.dotabuff.com/matches/2550971502'
      }]
    }, {
      name: 'Escape',
      color: '#E7853E',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Synderen',
        y: -34.37,
        opponent: 'Alliance',
        gpm: 250,
        percentnw: '15.1%',
        url: 'http://www.dotabuff.com/matches/2550971502'
      }]
    }, {
      name: 'Secret',
      color: '#000000',
      stack: '5',
      data: [0, {
        playername: 'PieLieDie',
        y: 76.8,
        opponent: 'Empire',
        gpm: 276,
        percentnw: '13.2%',
        url: 'http://www.dotabuff.com/matches/2463855212'
      }]
    }, {
      name: 'Secret',
      color: '#000000',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'PieLieDie',
        y: 71.27,
        opponent: 'Escape',
        gpm: 297,
        percentnw: '13.3%',
        url: 'http://www.dotabuff.com/matches/2464172585'
      }]
    }, {
      name: 'LGD',
      color: '#b2b2b2',
      stack: '4',
      data: [{
        playername: 'mmy',
        y: 69.73,
        opponent: 'Secret',
        gpm: 272,
        percentnw: '11.5%',
        url: 'http://www.dotabuff.com/matches/2558387942'
      }, 0]
    }, {
      name: 'Complexity',
      color: '#DD2631',
      stack: '4',
      data: [{
        playername: 'Zfreek',
        y: -63.0,
        opponent: 'DC',
        gpm: 268,
        percentnw: '12.4%',
        url: 'http://www.dotabuff.com/matches/2468922471'
      }, 0]
    }, {
      name: 'Complexity',
      color: '#DD2631',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Handsken',
        y: -31.3,
        opponent: 'DC',
        gpm: 224,
        percentnw: '13.3%',
        url: 'http://www.dotabuff.com/matches/2468440492'
      }]
    }, {
      name: 'Complexity',
      color: '#DD2631',
      linkedTo: ':previous',
      stack: '5',
      data: [0, {
        playername: 'Handsken',
        y: 28.3,
        opponent: 'FDL',
        gpm: 324,
        percentnw: '12.7%',
        url: 'http://www.dotabuff.com/matches/2466075858'
      }]
    }

    ]
  });
});
