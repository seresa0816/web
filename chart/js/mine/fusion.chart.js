"use strict";
var fusionChart = function () {
    var main = this;
    main.branchs = new Array(); // title
    main.sub_branchs = new Array(); // super_key, title
    main.types = new Array();   // super_key, title
    main.chartType = new Array();
    main.init = function () {
        for (var branch_key in main.chartType) {
            main.branchs[branch_key] = {
                title: main.chartBranch[branch_key]
            };
            for (var sub_branch_key in main.chartType[branch_key]) {
                main.sub_branchs[sub_branch_key] = {
                    super_key: branch_key,
                    title: main.chartType[branch_key][sub_branch_key].title
                };
                for (var index in main.chartType[branch_key][sub_branch_key].series) {
                    main.types[main.chartType[branch_key][sub_branch_key].series[index].type] = {
                        super_key: main.chartType[branch_key][sub_branch_key],
                        title: main.chartType[branch_key][sub_branch_key].series[index].title,
                    };
                }
            }
        }
    };
    main.showChart = function (type, dataSource) {
        var chartInstance = new FusionCharts({
            type: type,
            width: '595', // Width of the chart
            height: '495', // Height of the chart
            dataFormat: 'json', // Data type
            renderAt: 'chart_area', //container where the chart will render
            dataSource: dataSource
        });
        // Render
        chartInstance.render();
    };

    main.chartBranch = {
        fusionChartXt: "FusionCharts XT",
        fusionWidgetsXt: 'FusionWidgets XT',
        powerChartsXt: 'PowerCharts XT'
    }

    main.chartType['fusionChartXt'] = {
        single_series: {
            title: "Single Series Charts",
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
            series: [{
                title: "Multi-series 2D Single Y Combination Chart (Column + Line + Area)",
                type: "mscombi2d"
            }, {
                title: "Multi-series 3D Single Y Combination Chart (Column + Line + Area)",
                type: "mscombi3d"
            }, {
                title: "Multi-series Column 3D + Line - Single Y Axis",
                type: "mscolumnline3d"
            }, {
                title: "Stacked Column2D + Line single Y Axis",
                type: "stackedcolumn2dline"
            }, {
                title: "Stacked Column3D + Line single Y Axis",
                type: "stackedcolumn3dline"
            }, {
                title: "Multi-series 2D Dual Y Combination Chart (Column + Line + Area)",
                type: "mscombidy2d"
            }, {
                title: "Multi-series Column 3D + Line - Dual Y Axis",
                type: "mscolumn3dlinedy"
            }, {
                title: "Stacked Column 3D + Line Dual Y Axis",
                type: "stackedcolumn3dlinedy"
            }, {
                title: "Multi-series Stacked Column 2D + Line Dual Y Axis",
                type: "msstackedcolumn2dlinedy"
            }]
        },
        xy_plot: {
            title: "XY Plot Charts",
            series: [{
                title: "Scatter Chart",
                type: "scatter"
            }, {
                title: "Zoom Scatter Chart",
                type: "zoomscatter"
            }, {
                title: "Bubble Chart",
                type: "bubble"
            }]
        },
        scroll: {
            title: "Scroll Charts",
            series: [{
                title: "Scroll Column 2D",
                type: "scrollcolumn2d"
            }, {
                title: "Scroll Line 2D",
                type: "scrollline2d"
            }, {
                title: "Scroll Area 2D",
                type: "scrollarea2d"
            }, {
                title: "Scroll Stacked Column 2D",
                type: "scrollstackedcolumn2d"
            }, {
                title: "Scroll Combination 2D (Single Y)",
                type: "scrollcombi2d"
            }, {
                title: "Scroll Combination 2D (Dual Y)",
                type: "scrollcombidy2d"
            }]
        }
    }
    main.chartType['fusionWidgetsXt'] = {
        gauges: {
            title: "Gauges",
            series: [{
                title: "Real-time Angular",
                type: "angulargauge",
            }, {
                title: "Real-time Bulb",
                type: "bulb",
            }, {
                title: "Real-time Cylinder",
                type: "cylinder",
            }, {
                title: "Real-time Horizontal LED",
                type: "hled"
            }, {
                title: "Real-time Horizontal Linear",
                type: "hlineargauge"
            }, {
                title: "Real-time Thermometer",
                type: "thermometer"
            }, {
                title: "Real-time Vertical LED",
                type: "vled"
            }]
        },
        realtime_datastreaming: {
            title: "Real-time Data-streaming charts",
            series: [{
                title: "Real-time Area",
                type: "realtimearea",
            }, {
                title: "Real-time Column",
                type: "realtimecolumn",
            }, {
                title: "Real-time Line",
                type: "realtimeline",
            }, {
                title: "Real-time Stacked Area",
                type: "realtimestackedarea"
            }, {
                title: "Real-time Stacked Column",
                type: "realtimestackedcolumn"
            }, {
                title: "Real-time Line (Dual Y)",
                type: "realtimelinedy"
            }]
        },
        spark: {
            title: "Spark Charts",
            series: [{
                title: "Spark Line",
                type: "sparkline",
            }, {
                title: "Spark Column",
                type: "sparkcolumn",
            }, {
                title: "Spark Win/Loss",
                type: "sparkwinloss",
            }]
        },
        bullet_graphs: {
            title: "Bullet Graphs",
            series: [{
                title: "Horizontal bullet graph",
                type: "hbullet",
            }, {
                title: "Vertical bullet graph",
                type: "vbullet",
            }]
        },
        other_charts: {
            title: "Other charts",
            series: [{
                title: "Funnel Chart",
                type: "funnel",
            }, {
                title: "Pyramid Chart",
                type: "pyramid",
            }, {
                title: "Gantt Chart",
                type: "gantt",
            }]
        }
    }
    main.chartType['powerChartsXt'] = {
        logarithmic: {
            title: "Logarithmic Charts",
            series: [{
                title: "Logarithmic Column 2D Chart",
                type: "logmscolumn2d",
            }, {
                title: "Logarithmic Line 2D Chart",
                type: "logmsline",
            }]
        },
        spline_charts: {
            title: "Spline Charts",
            series: [{
                title: "Single-Series Spline 2D",
                type: "spline",
            }, {
                title: "Single-Series Spline Area 2D",
                type: "splinearea",
            }, {
                title: "Multi-Series Spline 2D",
                type: "msspline",
            }, {
                title: "Multi-Series Spline Area 2D",
                type: "mssplinearea"
            }]
        },
        error_charts: {
            title: "Error Charts",
            series: [{
                title: "Error Bar Chart",
                type: "errorbar2d",
            }, {
                title: "Error Line 2D Chart",
                type: "errorline",
            }, {
                title: "Error Scatter Chart",
                type: "errorscatter",
            }]
        },
        inverse_y_axis_charts: {
            title: "Inverse Y Axis Charts",
            series: [{
                title: "Inverse y-Axis Area 2D Chart",
                type: "inversemsarea",
            }, {
                title: "Inverse y-Axis Column 2D Chart",
                type: "inversemscolumn2d",
            }, {
                title: "Inverse y-Axis Line 2D Chart",
                type: "inversemsline",
            }]
        },
        dragable_charts: {
            title: "Drag-able Charts",
            series: [{
                title: "Drag-able Column 2D Chart",
                type: "dragcolumn2d",
            }, {
                title: "Drag-able Line 2D Chart",
                type: "dragline",
            }, {
                title: "Drag-able Area 2D Chart",
                type: "dragarea",
            }]
        },
        miscellaneous_power_charts: {
            title: "Miscellaneous Power Charts",
            series: [{
                title: "Heat Map Chart",
                type: "treemap",
            }, {
                title: "Heat Map Chart",
                type: "radar",
            }, {
                title: "Heat Map Chart",
                type: "heatmap",
            }, {
                title: "Box and Whisker Chart",
                type: "boxandwhisker2d",
            }, {
                title: "Drag Node Chart",
                type: "candlestick",
            }, {
                title: "Drag Node Chart",
                type: "dragnode",
            }, {
                title: "Step Line Charts",
                type: "msstepLine",
            }, {
                title: "Select-Scatter Chart",
                type: "multiaxisline",
            }, {
                title: "Select-Scatter Chart",
                type: "multilevelpie",
            }, {
                title: "Select-Scatter Chart",
                type: "selectscatter",
            }, {
                title: "Waterfall / Cascade Chart",
                type: "waterfall2d",
            }, {
                title: "Kagi Chart",
                type: "kagi",
            }]
        }
    }
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
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