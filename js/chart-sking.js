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
        color:'#292018',
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
          color:'#292018'
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
          color:'#292018'
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
        color:'#292018',
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
          color:'#292018'
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
          color:'#292018'
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
        color:'#292018',
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
          color:'#292018'
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
          color:'#292018'
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
        color:'#292018',
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
          color:'#292018'
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
        color:'#292018',
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
        color:'#292018'
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
  $('#winratebars').highcharts({

    chart: {
      type: 'column',
      backgroundColor:'rgba(255,255,255,0.175)'
    },

    title: {
      text: 'Sand King Winrate by Team & Role at TI6',
      style: {
        margin:'8px',
        color:'#292018',
        fontSize:'15px',
        fontWeight:'bold'
      }
    },

    legend: {
      color:'#292018',
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
      title: {
        text: 'Role',
        style: {
          color:'#292018'
        }
      },
      categories: ['1', '2', '3', '4', '5'],
      labels: {
        style: {
          fontSize:'0.8em'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: -400,
      max: 800,
      tickInterval: 100,
      title: {
        text: 'Game Length in Minutes',
        style: {
          color:'#292018'
        }
      },
      stackLabels: {
        enabled: true,
        formatter: function() {
          var pct = 0;
          var nct = 0;
          var series = this.axis.series;

          for (var i in series){
            if (series[i].yData[this.x] > 0) { pct += 1; }
            else if (series[i].yData[this.x] < 0) { nct += 1; }
          }
          if (!this.isNegative) { return pct + " wins"; }
          else { return nct + " losses"; }
        },
        style: {
          fontSize:'0.65em',
          color:'#292018'
        }
      }
    },

    tooltip: {
      headerFormat: '<b>{point.x}-pos SK by {series.name}',
      pointFormat: '.{point.playername}:</b><br/> {point.y} minute game vs. {point.opponent}<br><b>Blink Timing:</b> {point.blinktiming}'
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
          color:'#292018'
        },
        point: {
          events: {
            click: function() { window.open(this.url); }
          }
        }
      }
    },

    series: [{
      name: 'Liquid',
      color: '#6EB1DB',
      data: [0, 0, {
        playername: 'MinD_ControL',
        y: -54.28,
        opponent: 'Newbee',
        blinktiming: '12:41',
        url: 'http://www.dotabuff.com/matches/2562303634'
      }, 0, 0]
    }, {
      name: 'Liquid',
      linkedTo: ':previous',
      color: '#6EB1DB',
      data: [0, 0, {
        playername: 'MinD_ControL',
        y: 17.32,
        opponent: 'Newbee',
        blinktiming: '13:16',
        url: 'http://www.dotabuff.com/matches/2562388622'
      }, 0, 0]
    }, {
      name: 'Liquid',
      linkedTo: ':previous',
      color: '#6EB1DB',
      data: [0, 0, {
        playername: 'MinD_ControL',
        y: -40.17,
        opponent: 'Fnatic',
        blinktiming: '16:08',
        url: 'http://www.dotabuff.com/matches/2564485350'
      }, 0, 0]
    }, {
      name: 'EHOME',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: 39.95,
        opponent: 'MVP.Phoenix',
        blinktiming: '12:31',
        url: 'http://www.dotabuff.com/matches/2549498173'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: 45.92,
        opponent: 'Secret',
        blinktiming: '12:31',
        url: 'http://www.dotabuff.com/matches/2549431849'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: 49.87,
        opponent: 'Liquid',
        blinktiming: '11:55',
        url: 'http://www.dotabuff.com/matches/2547593329'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: 36.88,
        opponent: 'Alliance',
        blinktiming: '9:10',
        url: 'http://www.dotabuff.com/matches/2560069057'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: 36.33,
        opponent: 'Alliance',
        blinktiming: '14:52',
        url: 'http://www.dotabuff.com/matches/2559987699'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: -45.43,
        opponent: 'DC',
        blinktiming: '11:30',
        url: 'http://www.dotabuff.com/matches/2551542175'
      }, 0, 0]
    }, {
      name: 'EHOME',
      linkedTo: ':previous',
      color: '#414141',
      data: [0, 0, {
        playername: 'Old EleveN',
        y: -31.87,
        opponent: 'DC',
        blinktiming: '15:30',
        url: 'http://www.dotabuff.com/matches/2564619977'
      }, 0, 0]
    }, {
      name: 'Na\'vi',
      color: '#FFF200',
      data: [0, 0, {
        playername: 'General',
        y: 34.08,
        opponent: 'Wings',
        blinktiming: '20:54',
        url: 'http://www.dotabuff.com/matches/2551023876'
      }, 0, 0]
    }, {
      name: 'Na\'vi',
      linkedTo: ':previous',
      color: '#FFF200',
      data: [0, 0, {
        playername: 'General',
        y: 15.47,
        opponent: 'Wings',
        blinktiming: '12:48',
        url: 'http://www.dotabuff.com/matches/2550962469'
      }, 0, 0]
    }, {
      name: 'Wings',
      color: '#d4d0d4',
      data: [0, 0, {
        playername: 'Faith_bian',
        y: 23.90,
        opponent: 'LGD',
        blinktiming: '10:17',
        url: 'http://www.dotabuff.com/matches/2551226728'
      }, 0, {
        playername: 'iceice',
        y: 40.67,
        opponent: 'DC',
        blinktiming: '22:04',
        url: 'http://www.dotabuff.com/matches/2569470828'
      }]
    }, {
      name: 'Wings',
      linkedTo: ':previous',
      color: '#d4d0d4',
      data: [0, 0, {
        playername: 'Faith_bian',
        y: 20.58,
        opponent: 'LGD',
        blinktiming: '14:09',
        url: 'http://www.dotabuff.com/matches/2551167223'
      }, 0, {
        playername: 'iceice',
        y: 34.88,
        opponent: 'EG',
        blinktiming: '18:11',
        url: 'http://www.dotabuff.com/matches/2546938575'
      }]
    }, {
      name: 'DC',
      color: '#242054',
      data: [0, 0, {
        playername: 'Moo',
        y: 48.80,
        opponent: 'VG.R',
        blinktiming: '16:28',
        url: 'http://www.dotabuff.com/matches/2549312032'
      }, {
        playername: 'Misery',
        y: 45.48,
        opponent: 'Wings',
        blinktiming: '23:32',
        url: 'http://www.dotabuff.com/matches/2569531910'
      }, 0]
    }, {
      name: 'DC',
      linkedTo: ':previous',
      color: '#242054',
      data: [0, 0, {
        playername: 'Moo',
        y: 54.65,
        opponent: 'Complexity',
        blinktiming: '10:40',
        url: 'http://www.dotabuff.com/matches/2468766885'
      }, {
        playername: 'Misery',
        y: 28.23,
        opponent: 'TNC',
        blinktiming: '15:37',
        url: 'http://www.dotabuff.com/matches/2564408925'
      }, 0]
    }, {
      name: 'Escape',
      color: '#E7853E',
      data: [0, 0, {
        playername: 'KheZzu',
        y: 76.95,
        opponent: 'Alliance',
        blinktiming: '8:44',
        url: 'http://www.dotabuff.com/matches/2550971502'
      }, 0, 0]
    }, {
      name: 'Execration',
      color: '#887868',
      data: [0, 0, {
        playername: 'RR',
        y: -18.80,
        opponent: 'Escape',
        blinktiming: '14:27',
        url: 'http://www.dotabuff.com/matches/2545445798'
      }, 0, 0]
    }, {
      name: 'Execration',
      linkedTo: ':previous',
      color: '#887868',
      data: [0, 0, {
        playername: 'RR',
        y: 23.55,
        opponent: 'Complexity',
        blinktiming: '11:01',
        url: 'http://www.dotabuff.com/matches/2545251072'
      }, 0, 0]
    }, {
      name: 'Secret',
      color: '#000000',
      data: [0, 0, {
        playername: 'Bulba',
        y: 61.50,
        opponent: 'DC',
        blinktiming: '14:21',
        url: 'http://www.dotabuff.com/matches/2549658092'
      }, 0, 0]
    }, {
      name: 'Secret',
      color: '#000000',
      linkedTo: ':previous',
      data: [0, 0, {
        playername: 'Bulba',
        y: 29.88,
        opponent: 'MVP.Phoenix',
        blinktiming: '11:30',
        url: 'http://www.dotabuff.com/matches/2547598732'
      }, 0, 0]
    }, {
      name: 'Secret',
      color: '#000000',
      linkedTo: ':previous',
      data: [0, 0, {
        playername: 'Bulba',
        y: 35.38,
        opponent: 'VG.R',
        blinktiming: '13:32',
        url: 'http://www.dotabuff.com/matches/2547405264'
      }, 0, 0]
    }, {
      name: 'EG',
      color: '#2E6797',
      data: [0, {
        playername: 'Sumail',
        y: -38.43,
        opponent: 'Wings',
        blinktiming: '11:30',
        url: 'http://www.dotabuff.com/matches/2566725198'
      }, 0, 0, 0]
    }, {
      name: 'TNC',
      color: '#FF5300',
      data: [0, {
        playername: 'kuku',
        y: -35.38,
        opponent: 'Alliance',
        blinktiming: '15:13',
        url: 'http://www.dotabuff.com/matches/2546935618'
      }, 0, 0, 0]
    }, {
      name: 'Fnatic',
      color: '#F39E2D',
      data: [0, 0, {
        playername: 'Ohaiyo',
        y: 47.52,
        opponent: 'MVP.Phoenix',
        blinktiming: '10:09',
        url: 'http://www.dotabuff.com/matches/2566482748'
      }, 0, 0]
    }, {
      name: 'Fnatic',
      color: '#F39E2D',
      linkedTo: ':previous',
      data: [0, 0, {
        playername: 'Ohaiyo',
        y: 54.87,
        opponent: 'Liquid',
        blinktiming: '11:52',
        url: 'http://www.dotabuff.com/matches/2564547149'
      }, 0, 0]
    }, {
      name: 'Newbee',
      color: '#1F88C9',
      data: [0, 0, {
        playername: 'kpii',
        y: -70.70,
        opponent: 'EG',
        blinktiming: '12:28',
        url: 'http://www.dotabuff.com/matches/2560226228'
      }, 0, 0]
    }, {
      name: 'Complexity',
      color: '#DD2631',
      data: [0, 0, {
        playername: 'Swindlez',
        y: -26.93,
        opponent: 'Execration',
        blinktiming: '11:17',
        url: 'http://www.dotabuff.com/matches/2545299883'
      }, 0, 0]
    }

    ]
  });
});
