"use strict";
var fusionChart = function() {
    var main = this;
    main.superTypes = new Array()
    main.subTypes = new Array();
    main.init = function() {
        for (var superKey in main.chartType) {
            main.superTypes[superKey] = {
                branch: superKey,
                title: main.chartType[superKey].title
            };
            for (var subKey in main.chartType[superKey].series) {
                main.subTypes[main.chartType[superKey].series[subKey].type] = {
                    supeTitle: main.chartType[superKey].title,
                    title: main.chartType[superKey].series[subKey].title,
                    defaultConfig: main.chartType[superKey].defaultConfig
                };
            }
        };
    };
    main.showChart = function(type, dataSource) {
        var chartInstance = new FusionCharts({
            type: type,
            width: '626', // Width of the chart
            height: '514', // Height of the chart
            dataFormat: 'json', // Data type
            renderAt: 'chart_area', //container where the chart will render
            dataSource: dataSource
        });
        // Render
        chartInstance.render();
    };

    main.chartType = {
        single_series: {
            title: "Single Series Charts",
            defaultConfig: default_config.singleConfig,
            series: [{
                title: "Column 2D",
                type: "column2d",
            }, {
                title: "Column 3D",
                type: "column3d",
            }, {
                title: "Line 2D",
                type: "line",
            }, {
                title: "Area 2D",
                type: "area2d"
            }, {
                title: "Bar 2D",
                type: "bar2d"
            }, {
                title: "Bar 3D",
                type: "bar3d"
            }, {
                title: "Pie 2D",
                type: "pie2d"
            }, {
                title: "Pie 3D",
                type: "pie3d"
            }, {
                title: "Doughnut 2D",
                type: "doughnut2d"
            }, {
                title: "Doughnut 3D",
                type: "doughnut3d"
            }, {
                title: "Pareto 2D",
                type: "pareto2d"
            }, {
                title: "Pareto 3D",
                type: "pareto3d"
            }]
        },
        multi_series: {
            title: "Multi-series Charts",
            defaultConfig: default_config.multiConfig,
            series: [{
                title: "Multi-series Column 2D",
                type: "mscolumn2d"
            }, {
                title: "Multi-series Column 3D",
                type: "mscolumn3d"
            }, {
                title: "Multi-series Line 2D",
                type: "msline"
            }, {
                title: "Multi-series Bar 2D",
                type: "msbar2d"
            }, {
                title: "Multi-series Bar 3D",
                type: "msbar3d"
            }, {
                title: "Overlapped Column 2D",
                type: "overlappedcolumn2d"
            }, {
                title: "Overlapped Bar 2D",
                type: "overlappedbar2d"
            }, {
                title: "Multi-series Area 2D",
                type: "msarea"
            }, {
                title: "Marimekko",
                type: "marimekko"
            }, {
                title: "Zoom Line",
                type: "zoomline"
            }, {
                title: "Zoom Line DY",
                type: "zoomlinedy"
            }]
        },
        stacked: {
            title: "Stacked Charts",
            defaultConfig: default_config.stackedConfig,
            series: [{
                title: "Stacked Column 2D",
                type: "stackedcolumn2d"
            }, {
                title: "Stacked Column 3D",
                type: "stackedcolumn3d"
            }, {
                title: "Stacked Bar 2D",
                type: "stackedbar2d"
            }, {
                title: "Stacked Bar 3D",
                type: "stackedbar3d"
            }, {
                title: "Stacked Area 2D",
                type: "stackedarea2d"
            }, {
                title: "Multi-series Stacked Column 2D",
                type: "msstackedcolumn2d"
            }]
        },
        combination: {
            title: "Combination Charts",
            defaultConfig: default_config.combinedConfig,
            series: [{
                title: "Multi-series 2D Single Y Combination Chart (Column + Line + Area)",
                type: "mscombi2d"
            }, {
                title: "Multi-series 3D Single Y Combination Chart (Column + Line + Area) ",
                type: "mscombi3d"
            }, {
                title: "Multi-series Column 3D + Line - Single Y Axis ",
                type: "mscolumnline3d"
            }, {
                title: "Stacked Column2D + Line single Y Axis ",
                type: "stackedcolumn2dline"
            }, {
                title: "Stacked Column3D + Line single Y Axis ",
                type: "stackedcolumn3dline"
            }, {
                title: "Multi-series 2D Dual Y Combination Chart (Column + Line + Area) ",
                type: "mscombidy2d"
            }, {
                title: "Multi-series Column 3D + Line - Dual Y Axis ",
                type: "mscolumn3dlinedy"
            }, {
                title: "Stacked Column 3D + Line Dual Y Axis ",
                type: "stackedcolumn3dlinedy"
            }, {
                title: "Multi-series Stacked Column 2D + Line Dual Y Axis ",
                type: "msstackedcolumn2dlinedy"
            }]
        },
        xy_plot: {
            title: "XY Plot Charts",
            defaultConfig: default_config.xyPlotConfig,
            series: [{
                title: "Scatter Chart ",
                type: "scatter"
            }, {
                title: "Zoom Scatter Chart ",
                type: "zoomscatter"
            }, {
                title: "Bubble Chart ",
                type: "bubble"
            }]
        },
        scroll: {
            title: "Scroll Charts",
            defaultConfig: default_config.scrollConfig,
            series: [{
                title: "Scroll Column 2D ",
                type: "scrollcolumn2d"
            }, {
                title: "Scroll Line 2D ",
                type: "scrollline2d"
            }, {
                title: "Scroll Area 2D ",
                type: "scrollarea2d"
            }, {
                title: "Scroll Stacked Column 2D ",
                type: "scrollstackedcolumn2d"
            }, {
                title: "Scroll Combination 2D (Single Y) ",
                type: "scrollcombi2d"
            }, {
                title: "Scroll Combination 2D (Dual Y) ",
                type: "scrollcombidy2d"
            }]
        }
    }
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string") {
            x = ("" + x).toLowerCase();
        }
        if (typeof y == "string") {
            y = ("" + y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}