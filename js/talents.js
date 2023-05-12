$(function () {
  $('#tal0').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Abaddon',
        'Dark Seer',
        'Monkey King',
        'Phantom Lancer',
        'Slardar',
        'Timbersaw',
        'Brewmaster',
        'Naga Siren',
        'Wraith King',
        'Centaur',
        'Huskar',
        'Leshrac',
        'Spectre',
        'Tidehunter',
        'Clinkz',
        'Slark',
        'Drow Ranger',
        'Beastmaster',
        'Lycan',
        'Magnus',
        'Pugna',
        'Chaos Knight',
        'IO',
        'Elder Titan',
        'Omniknight',
        'Earthshaker',
        'Pudge',
        'Viper',
        'Bristleback',
        'Dragon Knight',
        'Faceless Void',
        'Keeper of the Light',
        'Legion Commander',
        'Nightstalker',
        'Troll Warlord',
        'Axe',
        'Necrophos',
        'Shadow Demon',
        'Sven',
        'Tiny',
        'Queen of Pain',
        'Weaver',
        'Winter Wyvern'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '25',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Strength',
      type: 'column',
      data: [{y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 14,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal1').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Oracle',
        'Timbersaw',
        'Windranger',
        'Outworld Devourer',
        'Nature\'s Prophet',
        'Rubick',
        'Tiny',
        'Mesdusa',
        'Storm Spirit',
        'Batrider',
        'Clinkz',
        'Dazzle',
        'Wraith King',
        'Earth Spirit',
        'Chaos Knight',
        'Puck',
        'Tinker',
        'Winter Wyvern',
        'Silencer',
        'Skywrath Mage'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '25',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Intelligence',
      type: 'column',
      data: [{y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 12,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 7,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal2').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Nyx Assassin',
        'Phantom Assassin',
        'Anti-Mage',
        'Juggernaut',
        'Naga Siren',
        'Terrorblade',
        'Weaver',
        'Slark',
        'Viper',
        'Riki',
        'Razor',
        'Troll Warlord',
        'Morphling',
        'Mirana'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '40',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Agility',
      type: 'column',
      data: [{y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 14,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal3').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Lion',
        'Luna',
        'Terrorblade',
        'Ursa',
        'Slark',
        'Chaos Knight',
        'Anti-Mage',
        'Bloodseeker',
        'Clinkz',
        'Phantom Assassin',
        'Juggernaut',
        'Riki',
        'Phantom Lancer',
        'Sven',
        'Vengeful Spirit',
        'Invoker',
        'Weaver',
        'Alchemist',
        'Ember Spirit',
        'Necrophos',
        'Spectre',
        'Templar Assasssin',
        'Enchantress',
        'Warlock',
        'Drow Rnager',
        'Lifestealer',
        'Spirit Breaker'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '25',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'All Stats',
      type: 'column',
      data: [{y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 14,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 12,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 7,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal4').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Lich',
        'Beastmaster',
        'Bounty Hunter',
        'Dark Seer',
        'Omniknight',
        'Treant Protector',
        'Witch Doctor',
        'Brewmaster',
        'Venomancer',
        'Axe',
        'Skywrath Mage',
        'Sven',
        'Vengeful Spirit',
        'Dazzle',
        'Rubick',
        'Crystal Maiden',
        'Lone Druid',
        'Mirana',
        'Night Stalker',
        'Clockwerk',
        'Earthshaker',
        'Enchantress',
        'Ogre Magi',
        'Visage',
        'Tidehunter',
        'Tiny',
        'Lion',
        'Monkey King',
        'Morphling',
        'Templar Assassin',
        'Troll Warlord',
        'Dragon Knight',
        'Lina',
        'Puck',
        'Winter Wyvern',
        'Necrophos',
        'Slardar',
        'Centaur Warrunner',
        'Tusk',
        'Arc Warden',
        'Gyrocopter',
        'Huskar',
        'Legion Commander',
        'Nature\'s Prophet',
        'Faceless Void',
        'Lifestealer',
        'Terrorblade',
        'Weaver',
        'Abaddon',
        'Bloodseeker',
        'Kunkka',
        'Ursa',
        'Spirit Breaker',
        'Alchemist',
        'Anti-Mage',
        'Ember Spirit',
        'Juggernaut',
        'Spectre',
        'Storm Spirit',
        'Queen of Pain',
        'Invoker',
        'Luna',
        'Lycan',
        'Meepo',
        'Medusa',
        'Phantom Assassin',
        'Slark',
        'Viper',
        'Wraith King'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '25',
      max: '150',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Damage',
      type: 'column',
      data: [{y: 150,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 120,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 120,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 120,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 100,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 90,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 90,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 75,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 75,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 75,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 75,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 60,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 60,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 60,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 55,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 50,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 50,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 50,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 45,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 45,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 40,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 35,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal5').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Underlord',
        'Broodmother',
        'Elder Titan',
        'Bristleback',
        'Huskar',
        'Storm Spirit',
        'Wraith King',
        'Bounty Hunter',
        'Invoker',
        'Nature\'s Prophet',
        'Phantom Assassin',
        'Alchemist',
        'Razor',
        'Silencer',
        'Sven',
        'Bloodseeker',
        'Mirana',
        'Naga Siren',
        'Brewmaster',
        'Treant Protector',
        'Slark',
        'Spectre',
        'Luna',
        'Meepo',
        'Tiny',
        'Night Stalker',
        'Morphling',
        'Slardar',
        'Arc Warden',
        'Magnus',
        'Templar Assassin',
        'Vengeful Spirit',
        'Anti-Mage',
        'Drow Ranger',
        'Juggernaut',
        'Medusa',
        'Outworld Devourer',
        'Ursa',
        'Dragon Knight',
        'Monkey King',
        'Phantom Lancer',
        'Shadow Fiend',
        'Chaos Knight',
        'Faceless Void',
        'Lifestealer',
        'Sniper',
        'Terrorblade'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '60',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Attack Speed',
      type: 'column',
      data: [{y: 60,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 50,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 50,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 45,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 30,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 30,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 30,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 30,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 30,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal6').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Axe',
        'Elder Titan',
        'Lifestealer',
        'Undying',
        'Enigma',
        'Night Stalker',
        'Nature\'s Prophet',
        'Phoenix',
        'Ember Spirit',
        'Sniper',
        'Storm Spirit',
        'Witch Doctor',
        'Keeper of the Light',
        'Legion Commander',
        'Slardar',
        'Viper',
        'Faceless Void',
        'Juggernaut',
        'Tidehunter',
        'Tusk',
        'Troll Warlord',
        'Bane',
        'IO',
        'Tinker',
        'Abaddon',
        'Pudge',
        'Spirit Breaker',
        'Outworld Devourer',
        'Ursa',
        'Zeus',
        'Monkey King',
        'Sand King',
        'Spectre',
        'Alchemist',
        'Batrider',
        'Clockwerk',
        'Earth Spirit',
        'Meepo',
        'Silencer',
        'Underlord'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '3',
      max: '15',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Armor',
      type: 'column',
      data: [{y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 12,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 12,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 7,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 7,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 7,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal7').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Tusk',
        'Earthshaker',
        'Death Prophet',
        'Clockwerk',
        'Meepo',
        'Necrophos',
        'Spectre',
        'Disruptor',
        'Beastmaster',
        'Sand King',
        'Troll Warlord',
        'Warlock',
        'Alchemist',
        'Dragon Knight',
        'Earth Spirit',
        'Enigma',
        'Faceless Void',
        'Kunkka',
        'Visage',
        'Undying',
        'Outworld Devourer',
        'Razor',
        'Templar Assassin',
        'Elder Titan',
        'Monkey King',
        'Ogre Magi',
        'Ursa',
        'Axe',
        'Broodmother',
        'Chen',
        'Lifestealer',
        'Crystal Maiden',
        'Bane',
        'Doom',
        'Lone Druid',
        'Slardar',
        'Tinker',
        'Nature\'s Prophet',
        'Queen of Pain',
        'Weaver',
        'Batrider',
        'Arc Warden',
        'Bristleback',
        'Oracle',
        'Silencer',
        'Sniper',
        'Storm Spirit',
        'Terrorblade',
        'Venomancer',
        'Bloodseeker',
        'Gyrocopter',
        'Witch Doctor',
        'Drow Ranger',
        'Shadow Fiend',
        'Bounty Hunter',
        'Juggernaut',
        'Huskar',
        'Nyx Assassin',
        'Phoenix',
        'Puck',
        'Zeus',
        'Luna',
        'Anti-Mage',
        'Lycan',
        'Mirana',
        'Phantom Assassin',
        'Pugna',
        'Riki',
        'Rubick',
        'Shadow Shaman',
        'Tidehunter',
        'Timbersaw',
        'Viper',
        'Dazzle',
        'Invoker',
        'Leshrac',
        'Lich',
        'Naga Siren',
        'Skywrath Mage'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '100',
      max: '700',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Health',
      type: 'column',
      data: [{y: 700,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 600,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 400,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 350,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 350,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 350,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 350,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 300,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 275,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 275,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 275,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 275,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 275,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 250,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 250,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 225,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 225,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 225,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 200,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 175,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 15
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal8').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Sand King',
        'Underlord',
        'Ancient Apparition',
        'Axe',
        'Bristleback',
        'Doom',
        'IO',
        'Kunkka',
        'Dark Seer',
        'Timbersaw',
        'Slardar',
        'Terrorblade'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '50',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Health Regen',
      type: 'column',
      data: [{y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 30,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 14,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 14,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal9').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Medusa',
        'Leshrac',
        'Night Stalker',
        'Earthshaker',
        'Naga Siren',
        'Outworld Devourer',
        'Abaddon',
        'Bane',
        'Clockwerk',
        'Morphling',
        'Sven',
        'Slardar'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '100',
      max: '600',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Mana',
      type: 'column',
      data: [{y: 600,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 400,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 300,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 250,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 250,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 250,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 200,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal10').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Skywrath Mage',
        'Tiny',
        'IO',
        'Omniknight',
        'Tidehunter',
        'Sniper',
        'Windranger',
        'Axe',
        'Storm Spirit',
        'Pugna',
        'Brewmaster',
        'Pudge',
        'Treant Protector',
        'Centaur Warrunner',
        'Techies',
        'Underlord',
        'Zeus',
        'Bristleback'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '15',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Mana Regen',
      type: 'column',
      data: [{y: 14,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 14,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 6,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 3,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 3,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 3,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 3,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 2,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal11').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Visage',
        'Ogre Magi',
        'Earth Spirit',
        'Windranger',
        'Magnus',
        'Ember Spirit',
        'Storm Spirit',
        'Centaur Warrunner',
        'Disruptor',
        'Puck',
        'Underlord',
        'Lion',
        'Outworld Devourer',
        'Phoenix',
        'Rubick',
        'Ancient Apparition',
        'Jakiro',
        'Lina',
        'Shadow Demon',
        'Shadow Fiend',
        'Gyrocopter',
        'Leshrac',
        'Necrophos',
        'Timbersaw',
        'Batrider',
        'Mirana',
        'Nyx Assassin',
        'Tinker',
        'Death Prophet'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '20',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + '% ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Spell Amp',
      type: 'column',
      data: [{y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 12,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 6,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 6,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 5,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 5,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 5,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 5,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 4,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 4,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal12').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Jakiro',
        'Silencer',
        'Razor',
        'Lone Druid',
        'Shadow Fiend',
        'Lina',
        'Clinkz',
        'Windranger',
        'Huskar',
        'Sniper',
        'Arc Warden',
        'Queen of Pain',
        'Viper'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '50',
      max: '400',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Attack Range',
      type: 'column',
      data: [{y: 400,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 200,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 175,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 175,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 150,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 150,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 125,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 100,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 100,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 100,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 100,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 100,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 75,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             }]
    }]
  });
});
$(function () {
  $('#tal13').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Alchemist',
        'Arc Warden',
        'Bloodseeker',
        'Medusa',
        'Huskar',
        'Meepo',
        'Shadow Fiend',
        'Phantom Assassin',
        'Slark'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '30',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + '% ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Lifesteal',
      type: 'column',
      data: [{y: 30,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 30,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 30,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal14').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Queen of Pain',
        'Tinker'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '70',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + '% ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Spell Lifesteal',
      type: 'column',
      data: [{y: 70,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal15').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Keeper of the Light',
        'Oracle',
        'Riki',
        'Techies',
        'Zeus',
        'Bane',
        'Pugna',
        'Timbersaw',
        'Razor',
        'Venomancer',
        'Warlock',
        'Underlord',
        'Crystal Maiden',
        'Jakiro',
        'Lich',
        'Lina',
        'Chen',
        'Dazzle',
        'Shadow Shaman',
        'Visage',
        'Death Prophet',
        'Dark Seer',
        'Disruptor',
        'Night Stalker',
        'Ogre Magi',
        'Rubick',
        'Tinker',
        'Omniknight',
        'Shadow Demon'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '50',
      max: '400',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Cast Range',
      type: 'column',
      data: [{y: 400,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 250,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 250,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 200,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 200,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 175,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 150,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 150,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 150,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 150,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 150,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 125,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 125,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 125,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 125,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 125,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 125,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 100,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 100,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 100,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 100,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 100,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 100,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 100,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 100,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 75,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 75,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 75,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 75,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             }]
    }]
  });
});
$(function () {
  $('#tal16').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Bounty Hunter',
        'Faceless Void',
        'Clinkz',
        'Anti-Mage',
        'Lifestealer',
        'Lycan',
        'Phantom Lancer',
        'Sven',
        'Medusa',
        'Templar Assassin',
        'Dark Seer',
        'Meepo',
        'Centaur Warrunner'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '25',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + '% ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Evasion',
      type: 'column',
      data: [{y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             }]
    }]
  });
});
$(function () {
  $('#tal17').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Kunkka',
        'Disruptor',
        'Weaver',
        'Troll Warlord',
        'Lion',
        'Monkey King',
        'Shadow Shaman',
        'Windranger',
        'Phantom Lancer',
        'Skywrath Mage',
        'Tinker',
        'Venomancer',
        'Witch Doctor',
        'Earth Spirit',
        'Puck',
        'Crystal Maiden',
        'Clockwerk',
        'Elder Titan',
        'Enchantress',
        'Silencer',
        'Tusk',
        'Gyrocopter',
        'Nyx Assassin',
        'Enigma',
        'Keeper of the Light',
        'Luna',
        'Necrophos',
        'Shadow Demon',
        'Brewmaster',
        'Centaur Warrunner',
        'Leshrac',
        'Clinkz',
        'IO',
        'Sand King',
        'Ursa',
        'Zeus',
        'Ogre Magi',
        'Death Prophet',
        'Vengeful Spirit'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '5',
      max: '35',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + '% ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Magic Resistance',
      type: 'column',
      data: [{y: 35,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 30,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 12,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 8,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal18').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Bane',
        'Dragon Knight',
        'Naga Siren',
        'Nyx Assassin',
        'Magnus',
        'Windranger',
        'Ancient Apparition',
        'Axe',
        'Batrider',
        'Gyrocopter',
        'Vengeful Spirit',
        'Zeus',
        'Underlord',
        'Night Stalker',
        'Abaddon',
        'Dazzle',
        'Death Prophet',
        'Lifestealer',
        'Morphling',
        'Ogre Magi',
        'Oracle',
        'Terrorblade',
        'Undying',
        'Meepo',
        'Treant Protector',
        'Chen',
        'Enchantress',
        'Juggernaut',
        'Skywrath Mage',
        'Spirit Breaker',
        'Chaos Knight',
        'Doom',
        'Earthshaker',
        'Ember Spirit',
        'Legion Commander',
        'Nature\'s Prophet',
        'Necrophos',
        'Phantom Assassin',
        'Sven',
        'Tiny',
        'Beastmaster',
        'Enigma',
        'Keeper of the Light',
        'Techies',
        'Templar Assassin',
        'Venomancer',
        'Ursa',
        'Bounty Hunter',
        'Kunkka',
        'Pudge',
        'Spectre',
        'Troll Warlord',
        'Winter Wyvern',
        'Wraith King',
        'Drow Ranger',
        'Leshrac',
        'Lich',
        'Luna',
        'Razor',
        'Riki',
        'Shadow Fiend',
        'Shadow Shaman',
        'Outworld Devourer',
        'Shadow Demon'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '15',
      max: '75',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Movement Speed',
      type: 'column',
      data: [{y: 75,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 40,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 35,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 30,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 25,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 20,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.7)',
              level: 20
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.5)',
              level: 15
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 15,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             },
             {y: 10,
              color: 'rgba(201,201,201,0.3)',
              level: 10
             }]
    }]
  });
});
$(function () {
  $('#tal19').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal20').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal21').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal22').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal23').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal24').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal25').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal26').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal27').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal28').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        'Faceless Void',
        'Huskar',
        'Morphling',
        'Drow Ranger'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '20',
      max: '100',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y + '% increase<br>+' + this.point.bonus
          + ' ' + this.point.note
          + this.series.name + '<br>'
          + 'Original Range: ' + this.point.original;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'Range',
      type: 'column',
      data: [{y: 88,
              color: 'rgba(201,201,201,0.9)',
              note: 'Timewalk Cast ',
              bonus: '600',
              original: '675',
              level: 25
             },
             {y: 58,
              color: 'rgba(201,201,201,0.9)',
              note: 'Lifebreak Cast ',
              bonus: '400',
              original: '550',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              note: 'Waveform ',
              bonus: '400',
              original: '1000',
              level: 25
             },
             {y: 31,
              color: 'rgba(201,201,201,0.9)',
              note: 'Gust Knockback/',
              bonus: '400',
              original: '900',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal29').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal30').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal31').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal32').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
$(function () {
  $('#tal33').highcharts({

    chart: {
      type: 'column',
      marginBottom: 80,
      backgroundColor:'#292929'
    },

    title: {
      text: null
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
        'Powershot',
        'Scream of Pain',
        'Shockwave',
        'Whirling Death',
        'Ether Shock',
        'Dragon Slave'],
      useHTML: 'true',
      lineColor: 'rgba(255,255,255,0.4)',
      tickColor: 'rgba(255,255,255,0.4)',
      labels: {
        padding: 0,
        style: {
          color:'rgba(255,255,255,0.6)',
          textOverflow:'none',
          whiteSpace:'nowrap',
          fontSize:'10px'
        }
      }
    },

    yAxis: {
      tickInterval: '10',
      max: '110',
      style: {
        fontSize: '0.75em',
        color: 'rgba(255,255,255,0.4)'
      },
      gridLineColor: 'rgba(255,255,255,0.4)',
      title: {
        text: null
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '<br>' +
          'Level ' + this.point.level
          + ' talent</b><br>+'+ this.point.y
          + ' ' + this.series.name;
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
      series: {
        borderWidth: 0
      }
    },

    series: [{
      name: 'DPS',
      type: 'column',
      data: [{y: 97.5,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 90.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },

             {y: 74.3,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 65,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 60,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 56.25,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 55,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 50,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48.6,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 48,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 46.67,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 42.9,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 41.7,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             },
             {y: 40,
              color: 'rgba(201,201,201,0.9)',
              level: 25
             }]
    }]
  });
});
