var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "dark",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "size": 1000,
        "Bubble": 3.6,
        "Selection": 2.2,
        "Insertion": 1.8,
        "Quick": 1,
        "Merge": 1.6,
        "Heap": 1      
    }, {
        "size": 5000,
        "Bubble": 79,
        "Selection": 35.4,
        "Insertion": 16,
        "Quick": 2,
        "Merge": 5.6,
        "Heap": 2     
    },{
        "size": 10000,
        "Bubble": 350.2,
        "Selection": 120,
        "Insertion": 62,
        "Quick": 2,
        "Merge": 8.8,
        "Heap": 5      
    }, {
        "size": 50000,
        "Bubble": 9804,
        "Selection": 2993.2,
        "Insertion": 1478.6,
        "Quick": 9,
        "Merge": 31.2,
        "Heap": 23.4      
    }, {
        "size": 100000,
        "Bubble": 37703.2,
        "Selection": 12076.2,
        "Insertion": 6102.4,
        "Quick": 17.4,
        "Merge": 60,
        "Heap": 23.4      
    }, {
        "size": 500000,
        "Quick": 90.8,
        "Merge": 301.2,
        "Heap": 139.4      
    },  {
        "size": 1000000,
        "Quick": 180.6,
        "Merge": 594,
        "Heap": 326.2      
    }, {
        "size": 5000000,
        "Quick": 973.6,
        "Merge": 3018.2,
        "Heap": 2238.4      
    }, {
        "size": 10000000,
        "Quick": 2027.4,
        "Merge": 6102.6,
        "Heap": 4783     
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 40000,
        "minimum": 1,
        // "reversed": true,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Time (ms)"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "Bubble - [[value]]ms",
        "bullet": "round",
        "title": "Bubble",
        "valueField": "Bubble",
        "fillAlphas": 0
    }, {
        "balloonText": "Selection - [[value]]ms",
        "bullet": "round",
        "title": "Selection",
        "valueField": "Selection",
        "fillAlphas": 0
    }, {
        "balloonText": "Insertion - [[value]]ms",
        "bullet": "round",
        "title": "Insertion",
        "valueField": "Insertion",
        "fillAlphas": 0
    }, {
        "balloonText": "Quick - [[value]]ms",
        "bullet": "round",
        "title": "Quick",
        "valueField": "Quick",
        "fillAlphas": 0
    }, {
        "balloonText": "Merge - [[value]]ms",
        "bullet": "round",
        "title": "Merge",
        "valueField": "Merge",
        "fillAlphas": 0
    }, {
        "balloonText": "Heap - [[value]]ms",
        "bullet": "round",
        "title": "Heap",
        "valueField": "Heap",
        "fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "size",
    "categoryAxis": {
        "title": "Array length (elements)",
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top"
    },
    "export": {
        "enabled": true,
        "position": "bottom-right"
     }
});

AmCharts.theme = AmCharts.themes.dark;