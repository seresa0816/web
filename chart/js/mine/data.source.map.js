var default_limit = 50;
var chart_json = {};
var chart_input = {};
// column 2d
chart_json["column2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["column2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// column3d
chart_json["column3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["column3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// line
chart_json["line"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "lineThickness": "2",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["line"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

//area2d

chart_json["area2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "showValues": "1",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["area2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

//bar2d
chart_json["bar2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["bar2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

//bar3d
chart_json["bar3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["bar3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
//pie2d
chart_json["pie2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "use3DLighting": "0",
        "showPercentValues": "1",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["pie2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// pie3d
chart_json["pie3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "enableSmartLabels": "0",
        "startingAngle": "0",
        "showPercentValues": "1",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["pie3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// doughnut2d
chart_json["doughnut2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "numberPrefix": "$",
        "defaultCenterLabel": "Total revenue: $64.08K",
        "centerLabel": "Revenue from $label: $value",
        "decimals": "0",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["doughnut2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// doughnut3d
chart_json["doughnut3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["doughnut3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// pareto2d
chart_json["pareto2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "pYAxisName": "label${value}",
        "sYAxisname": "label${value}",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["pareto2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// pareto3d
chart_json["pareto3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "pYAxisName": "label${value}",
        "sYAxisname": "label${value}",
        "theme": "fusion"
    },
    "data": [{
        "label": "value${label}",
        "value": "value${value}"
    }]
};

chart_input["pareto3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// mscolumn2d
chart_json["mscolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// mscolumn3d
chart_json["mscolumn3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscolumn3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msline
chart_json["msline"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["msline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msbar2d
chart_json["msbar2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "placevaluesInside": "1",
        "xAxisLineColor": "#999999",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["msbar2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msbar3d
chart_json["msbar3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "alignCaptionWithCanvas": "1",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["msbar3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// overlappedcolumn2d
chart_json["overlappedcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["overlappedcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// overlappedbar2d
chart_json["overlappedcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["overlappedcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// overlappedbar2d
chart_json["overlappedbar2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["overlappedbar2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msarea
chart_json["msarea"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "plotFillAlpha": "60",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["msarea"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// marimekko
chart_json["marimekko"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberprefix": "$",
        "aligncaptiontocanvas": "0",
        "valueBgColor": "#FFFFFF",
        "valueBgAlpha": "60",
        "showPlotBorder": "1",
        "plotBorderThickness": "0.25",
        "showxaxispercentvalues": "1",
        "showsum": "1",
        "plottooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}State: <b>$seriesName</b>{br}Sales : <b>$dataValue</b>{br}Market share in $seriesName : <b>$percentValue</b>{br}Overall market share of $label: <b>$xAxisPercentValue</b>",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["marimekko"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// zoomline
chart_json["zoomline"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "yaxisminValue": "800",
        "yaxismaxValue": "1400",
        "pixelsPerPoint": "0",
        "pixelsPerLabel": "30",
        "lineThickness": "1",
        "compactdatamode": "1",
        "dataseparator": "|",
        "labelHeight": "30",
        "scrollheight": "10",
        "flatScrollBars": "1",
        "scrollShowButtons": "0",
        "scrollColor": "#cccccc",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["zoomline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// zoomlinedy
chart_json["zoomlinedy"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "compactDataMode": "1",
        "pixelsPerPoint": "0",
        "lineThickness": "1",
        "dataSeparator": "|",
        "snumberPrefix": "$",
        "pYAxisMaxValue": "1500",
        "pYAxisMinValue": "900",
        "sYAxisMaxValue": "23000",
        "sYAxisMinValue": "15000",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["zoomlinedy"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedcolumn2d
chart_json["stackedcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedcolumn3d
chart_json["stackedcolumn3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedcolumn3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedbar2d
chart_json["stackedbar2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedbar2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedbar3d
chart_json["stackedbar3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedbar3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedarea2d
chart_json["stackedarea2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedarea2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msstackedcolumn2d
chart_json["msstackedcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "numbersuffix": "M",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "dataset": [
                {
                    "seriesname": "label${value1}",
                    "data": [{
                        "value": "value${value1}"
                    }]
                }]
        },
        {
            "dataset": [
                {
                    "seriesname": "label${value2}",
                    "data": [{
                        "value": "value${value2}"
                    }]
                }]
        }
    ]
};

chart_input["msstackedcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// mscombi2d
chart_json["mscombi2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscombi2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// mscombi3d
chart_json["mscombi3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscombi3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// mscolumnline3d
chart_json["mscolumnline3d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscolumnline3d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedcolumn2dline
chart_json["stackedcolumn2dline"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedcolumn2dline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedcolumn3dline
chart_json["stackedcolumn3dline"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedcolumn3dline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// mscombidy2d
chart_json["mscombidy2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "renderAs": "line",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "area",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscombidy2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// mscolumn3dlinedy
chart_json["mscolumn3dlinedy"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "sNumberSuffix": "%",
        "sYAxisMaxValue": "25",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["mscolumn3dlinedy"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// stackedcolumn3dlinedy
chart_json["stackedcolumn3dlinedy"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "sNumberSuffix": "%",
        "sYAxisMaxValue": "25",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "renderAs": "line",
            "parentYAxis": "S",
            "showValues": "0",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["stackedcolumn3dlinedy"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// msstackedcolumn2dlinedy
chart_json["msstackedcolumn2dlinedy"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisname": "label${label}",
        "numberPrefix": "$",
        "numbersuffix": "M",
        "sNumberSuffix": "%",
        "sYAxisMaxValue": "25",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "dataset": [
                {
                    "seriesname": "label${value1}",
                    "data": [{
                        "value": "value${value1}"
                    }]
                }]
        },
        {
            "dataset": [
                {
                    "seriesname": "label${value2}",
                    "data": [{
                        "value": "value${value2}"
                    }]
                }]
        }
    ]
};

chart_input["msstackedcolumn2dlinedy"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

//scatter
chart_json["scatter"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "baseFont": "Helvetica Neue,Arial",
        "xAxisname": "label${value1}",
        "yAxisname": "label${value2}",
        "xAxisMinValue": "23",
        "xAxisMaxValue": "95",
        "yNumberPrefix": "",
        "xNumberSuffix": "",
        "theme": "fusion"
    },
    "categories": [
        {
            "verticalLineDashed": "1",
            "verticalLineDashLen": "1",
            "verticalLineDashGap": "1",
            "verticalLineThickness": "1",
            "verticalLineColor": "#000000",
            "category": [
                {
                    "x": "value${value1}",
                    "label": "value${value1}",
                    "showverticalline": "1"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "showregressionline": "1",
            "data": [{
                "x": "value${value1}",
                "y": "value${value2}"
            }]
        }
    ]
};

chart_input["scatter"] = {
    value1: {
        type: "data",
        label: "value(x)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(y)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// zoomscatter
chart_json["zoomscatter"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "baseFont": "Helvetica Neue,Arial",
        "xAxisname": "label${value1}",
        "yAxisname": "label${value2}",
        "xaxismaxvalue": "1000",
        "xaxisminvalue": "200",
        "yaxismaxvalue": "70",
        "theme": "fusion"
    },
    "categories": [
        {
            "verticalLineDashed": "1",
            "verticalLineDashLen": "1",
            "verticalLineDashGap": "1",
            "verticalLineThickness": "1",
            "verticalLineColor": "#000000",
            "category": [
                {
                    "x": "value${value1}",
                    "label": "value${value1}",
                    "showverticalline": "1"
                }]
        }
    ],
    "dataset": [
        {
            "drawline": "1",
            "seriesname": "Server 1",
            "color": "009900",
            "anchorsides": "3",
            "anchorradius": "4",
            "anchorbgcolor": "D5FFD5",
            "anchorbordercolor": "009900",
            "data": [{
                "x": "value${value1}",
                "y": "value${value2}"
            }]
        }
    ]
};

chart_input["zoomscatter"] = {
    value1: {
        type: "data",
        label: "value(x)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(y)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// bubble
chart_json["bubble"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "baseFont": "Helvetica Neue,Arial",
        "xAxisname": "label${value1}",
        "yAxisname": "label${value2}",
        "xAxisMinValue": "0",
        "xAxisMaxValue": "100",
        "yAxisMinValue": "0",
        "yAxisMaxValue": "30000",
        "plotFillAlpha": "70",
        "plotFillHoverColor": "#6baa01",
        "numDivlines": "2",
        "showValues": "1",
        "plotTooltext": "$name : Profit Contribution - $zvalue%",
        "drawQuadrant": "1",
        "quadrantLineAlpha": "80",
        "quadrantLineThickness": "3",
        "quadrantXVal": "50",
        "quadrantYVal": "15000",
        "quadrantLabelTL": "Low Price / High Sale",
        "quadrantLabelTR": "High Price / High Sale",
        "quadrantLabelBL": "Low Price / Low Sale",
        "quadrantLabelBR": "High Price / Low Sale",
        "use3dlighting": "0",
        "showAlternateHGridColor": "0",
        "showAlternateVGridColor": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "x": "value${value1}",
                    "label": "value${value1}",
                    "showverticalline": "1"
                }]
        }
    ],
    "dataset": [
        {
            "color": "#00aee4",
            "data": [{
                "x": "value${value1}",
                "y": "value${value2}",
                "z": "20",
                "name": "value${label}"
            }]
        }
    ]
};

chart_input["bubble"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(x)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(y)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// scrollcolumn2d
chart_json["scrollcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "showvalues": "1",
        "numberprefix": "$",
        "labeldisplay": "WRAP",
        "linethickness": "3",
        "numVisiblePlot": "12",
        "scrollheight": "10",
        "flatScrollBars": "1",
        "scrollShowButtons": "0",
        "scrollColor": "#cccccc",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "data": [{
                "value": "value${value}"
            }]
        }
    ]
};

chart_input["scrollcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// scrollline2d
chart_json["scrollline2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "lineThickness": "3",
        "flatScrollBars": "1",
        "scrollheight": "10",
        "numVisiblePlot": "12",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "data": [{
                "value": "value${value}"
            }]
        }
    ]
};

chart_input["scrollline2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// scrollarea2d

chart_json["scrollarea2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "pYAxisName": "label${value}",
        "labelDisplay": "AUTO",
        "sYAxisName": "Employees",
        "numberPrefix": "$",
        "numVisiblePlot": "8",
        "flatScrollBars": "1",
        "scrollheight": "10",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "data": [{
                "value": "value${value}"
            }]
        }
    ]
};

chart_input["scrollarea2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// scrollstackedcolumn2d

chart_json["scrollstackedcolumn2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberprefix": "$",
        "lineThickness": "3",
        "flatScrollBars": "1",
        "scrollheight": "10",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value}",
            "color": "008ee4",
            "data": [{
                "value": "value${value}"
            }]
        }
    ]
};

chart_input["scrollstackedcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// scrollcombi2d

chart_json["scrollcombi2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "$",
        "numVisiblePlot": "12",
        "scrollheight": "10",
        "flatScrollBars": "1",
        "scrollShowButtons": "0",
        "scrollColor": "#cccccc",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value}",
            "data": [{
                "value": "value${value}"
            }]
        }
    ]
};

chart_input["scrollcombi2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};

// scrollcombidy2d

chart_json["scrollcombidy2d"] = {
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "label${label}",
        "numberPrefix": "$",
        "sNumberSuffix": "%",
        "sYAxisMaxValue": "50",
        "showValues": "1",
        "numVisiblePlot": "12",
        "flatScrollBars": "1",
        "scrollheight": "10",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [{
                "value": "value${value1}"
            }]
        },
        {
            "seriesname": "label${value2}",
            "data": [{
                "value": "value${value2}"
            }]
        }
    ]
};

chart_input["scrollcombidy2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// angulargauge

chart_json["angulargauge"] = {
    "chart": {
        "caption": "Speedometer",
        "origw": "320",
        "origh": "320",
        "tickvaluedistance": "-10",
        "upperlimit": "240",
        "lowerlimit": "0",
        "basefontcolor": "#FFFFFF",
        "majortmnumber": "9",
        "majortmcolor": "#FFFFFF",
        "majortmheight": "8",
        "majortmthickness": "5",
        "minortmnumber": "5",
        "minortmcolor": "#FFFFFF",
        "minortmheight": "3",
        "minortmthickness": "2",
        "pivotradius": "10",
        "pivotbgcolor": "#000000",
        "pivotbordercolor": "#FFFFFF",
        "pivotborderthickness": "2",
        "tooltipbordercolor": "#FFFFFF",
        "tooltipbgcolor": "#333333",
        "gaugeouterradius": "115",
        "gaugestartangle": "240",
        "gaugeendangle": "-60",
        "decimals": "0",
        "placevaluesinside": "1",
        "pivotfillmix": "",
        "showpivotborder": "1",
        "annrenderdelay": "0",
        "gaugeoriginx": "160",
        "gaugeoriginy": "160",
        "theme": "fusion"
    },
    "dials": {
        "dial": [
            {
                "value": "value${value}",
                "bgcolor": "000000",
                "bordercolor": "#FFFFFF",
                "borderalpha": "100",
                "basewidth": "4",
                "topwidth": "4",
                "borderthickness": "2",
                "valuey": "260"
            }
        ]
    },
    "annotations": {
        "groups": [
            {
                "x": "160",
                "y": "160",
                "items": [
                    {
                        "type": "circle",
                        "radius": "130",
                        "fillasgradient": "1",
                        "fillcolor": "#4B4B4B,#AAAAAA",
                        "fillalpha": "100,100",
                        "fillratio": "95,5"
                    },
                    {
                        "type": "circle",
                        "x": "0",
                        "y": "0",
                        "radius": "120",
                        "showborder": "1",
                        "bordercolor": "cccccc",
                        "fillasgradient": "1",
                        "fillcolor": "#ffffff,#000000",
                        "fillalpha": "50,100",
                        "fillratio": "1,99"
                    }
                ]
            },
            {
                "x": "160",
                "y": "160",
                "showbelow": "0",
                "scaletext": "1",
                "items": [
                    {
                        "type": "text",
                        "y": "100",
                        "label": "value${unit}",
                        "fontcolor": "#FFFFFF",
                        "fontsize": "12",
                        "bold": "1"
                    }
                ]
            }
        ]
    }
}

chart_input["angulargauge"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "KPH"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "100"
    }
};

// bulb
chart_json["bulb"] = {
    "chart": {
        "caption": "Temperature status of deep freezers",
        "upperlimit": "-5",
        "lowerlimit": "-60",
        "captionPadding": "30",
        "showshadow": "0",
        "showvalue": "1",
        "useColorNameAsValue": "1",
        "placeValuesInside": "1",
        "theme": "fusion"
    },
    "colorrange": {
        "color": [
            {
                "minvalue": "0",
                "maxvalue": "50",
                "label": "less than 50",
                "code": "#ff0000"
            },
            {
                "minvalue": "50",
                "maxvalue": "100",
                "label": "less than 100",
                "code": "#ff9900"
            },
            {
                "minvalue": "100",
                "maxvalue": "150",
                "label": "large than 100",
                "code": "#00ff00"
            }
        ]
    },
    "value": "value${value}"
}
chart_input["bulb"] = {
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "100"
    }
};

// cylinder
chart_json["cylinder"] = {
    "chart": {
        "caption": "Fuel Meter",
        "subcaption": "Diesel level in generator Bakersfield Central",
        "subcaptionFontBold": "0",
        "lowerLimit": "0",
        "upperLimit": "120",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": "value${unit}",
        "showhovereffect": "1",
        "theme": "fusion"
    },
    "value": "value${value}"
}

chart_input["cylinder"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "liters"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "100"
    }
};

// hled
chart_json["hled"] = {
    "chart": {
        "caption": "Customer satisfaction score",
        "subcaption": "Current week - Bakersfield Central",
        "lowerLimit": "0",
        "upperLimit": "100",
        "lowerLimitDisplay": "Bad",
        "upperLimitDisplay": "Good",
        "numberSuffix": "value${unit}",
        "tickMarkDistance": "5",
        "theme": "fusion"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "45",
                "code": "#8e0000"
            },
            {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f2c500"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#1aaf5d"
            }
        ]
    },
    "value": "value${value}"
}

chart_input["hled"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "%"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "60"
    }
};

// hlineargauge

chart_json["hlineargauge"] = {
    "chart": {
        "caption": "Server CPU Utilization",
        "subcaption": "food.hsm.com",
        "lowerLimit": "0",
        "upperLimit": "100",
        "numberSuffix": "value${unit}",
        "valueAbovePointer": "0",
        "showShadow": "0",
        "gaugeFillMix": "{light}",
        "theme": "fusion"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "35",
                "label": "Low",
                "code": "#1aaf5d"
            },
            {
                "minValue": "35",
                "maxValue": "70",
                "label": "Moderate",
                "code": "#f2c500"
            },
            {
                "minValue": "70",
                "maxValue": "100",
                "label": "High",
                "code": "#c02d00"
            }
        ]
    },
    "pointers": {
        "pointer": [
            {
                "value": "value${value}"
            }
        ]
    }
}

chart_input["hlineargauge"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "%"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "62.5"
    }
};

// thermometer

chart_json["thermometer"] = {
    "chart": {
        "caption": "Central cold storage",
        "subcaption": "Bakersfield Central",
        "lowerLimit": "-20",
        "upperLimit": "20",
        "numberSuffix": "value${unit}",
        "theme": "fusion"
    },
    "value": "value${value}"
}

chart_input["thermometer"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "C"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "-10"
    }
};

// vled

chart_json["vled"] = {
    "chart": {
        "caption": "Customer score",
        "lowerLimit": "0",
        "upperLimit": "100",
        "lowerLimitDisplay": "Bad",
        "upperLimitDisplay": "Good",
        "numberSuffix": "value${unit}",
        "tickMarkDistance": "5",
        "alignCaptionWithCanvas": "1",
        "captionAlignment": "center",
        "theme": "fusion"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "45",
                "code": "#8e0000"
            },
            {
                "minValue": "45",
                "maxValue": "75",
                "code": "#f2c500"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#1aaf5d"
            }
        ]
    },
    "value": "value${value}"
}

chart_input["vled"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "%"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "92"
    }
};

// realtimearea

chart_json["realtimearea"] = {
    "chart": {
        "caption": "Real-time stock price monitor",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "value${unit}",
        "refreshinterval": "5",
        "yaxisminvalue": "35",
        "yaxismaxvalue": "36",
        "numdisplaysets": "10",
        "labeldisplay": "rotate",
        "showRealTimeValue": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["realtimearea"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "$"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Day Start"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "35.27"
    }
};

// realtimecolumn
chart_json["realtimecolumn"] = {
    "chart": {
        "caption": "Online Transactions per 10 seconds",
        "subCaption": "HarrysSupermart.com",
        "showrealtimevalue": "1",
        "yaxismaxvalue": "10",
        "numdisplaysets": "10",
        "labeldisplay": "rotate",
        "slantLabels": "1",
        "showLegend": "0",
        "numbersuffix": "value${unit}",
        "showRealTimeValue": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "",
            "alpha": "100",
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["realtimecolumn"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "Transactions"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Start"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "3"
    }
};

// realtimeline
chart_json["realtimeline"] = {
    "chart": {
        "caption": "Real-time stock price monitor",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "numberPrefix": "value${unit}",
        "refreshinterval": "5",
        "yaxisminvalue": "35",
        "yaxismaxvalue": "36",
        "numdisplaysets": "10",
        "labeldisplay": "rotate",
        "showRealTimeValue": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["realtimeline"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "$"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Day Start"
    },
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "35.27"
    }
};

// realtimestackedarea
chart_json["realtimestackedarea"] = {
    "chart": {
        "caption": "Live Visitors on Site",
        "subCaption": "Updated every 5 seconds",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "numberSuffix": "value${unit}",
        "refreshinterval": "5",
        "yaxisminvalue": "0",
        "yaxismaxvalue": "60",
        "numdisplaysets": "10",
        "labeldisplay": "rotate",
        "showRealTimeValue": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesName": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesName": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}
chart_input["realtimestackedarea"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "s"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Day Start"
    },
    value1: {
        type: "number",
        label: "value(1st)",
        val_type: "number",
        value: "12"
    },
    value2: {
        type: "number",
        label: "value(2nd)",
        val_type: "number",
        value: "20"
    }
};

// realtimestackedcolumn
chart_json["realtimestackedcolumn"] = {
    "chart": {
        "caption": "Live Visitors on Site",
        "subCaption": "Every 5 seconds",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "refreshinterval": "5",
        "numberSuffix": "value${unit}",
        "yaxisminvalue": "0",
        "yaxismaxvalue": "60",
        "numdisplaysets": "10",
        "labeldisplay": "rotate",
        "showValues": "1",
        "showRealTimeValue": "0",
        "placeValuesInside": "1",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesName": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesName": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["realtimestackedcolumn"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "s"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Day Start"
    },
    value1: {
        type: "number",
        label: "value(1st)",
        val_type: "number",
        value: "12"
    },
    value2: {
        type: "number",
        label: "value(2nd)",
        val_type: "number",
        value: "20"
    }
};

// realtimelinedy
chart_json["realtimelinedy"] = {
    "chart": {
        "caption": "Stock Price Monitor",
        "subCaption": "Harry's Supermart",
        "showRealTimeValue": "0",
        "numberprefix": "value${unit}",
        "setadaptiveymin": "1",
        "setadaptivesymin": "1",
        "xaxisname": "label${label}",
        "labeldisplay": "Rotate",
        "slantlabels": "1",
        "pyaxisminvalue": "35",
        "pyaxismaxvalue": "36",
        "syaxisminvalue": "10000",
        "syaxismaxvalue": "12000",
        "numDisplaySets": "10",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "showvalues": "0",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "showvalues": "0",
            "parentyaxis": "S",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["realtimelinedy"] = {
    unit: {
        type: "string",
        label: "unit",
        val_type: "string",
        value: "$"
    },
    label: {
        type: "string",
        label: "label",
        val_type: "number",
        value: "Day Start"
    },
    value1: {
        type: "number",
        label: "value(1st)",
        val_type: "number",
        value: "35.1"
    },
    value2: {
        type: "number",
        label: "value(2nd)",
        val_type: "number",
        value: "10962.87"
    }
};

// sparkline
chart_json["sparkline"] = {
    "chart": {
        "caption": "",
        "subcaption": "",
        "numberPrefix": "$",
        "canvasleftmargin": "145",
        "chartTopMargin": "10",
        "chartRightMargin": "10",
        "theme": "fusion"
    },
    "dataset": [
        {
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["sparkline"] = {
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// sparkcolumn
chart_json["sparkcolumn"] = {
    "chart": {
        "caption": "",
        "subcaption": "",
        "chartTopMargin": "10",
        "chartBottomMargin": "10",
        "chartRightMargin": "10",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "dataset": [
        {
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["sparkcolumn"] = {
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// sparkwinloss
chart_json["sparkwinloss"] = {
    "chart": {
        "caption": "",
        "subcaption": "",
        "numberPrefix": "$",
        "chartTopMargin": "10",
        "chartBottomMargin": "10",
        "chartRightMargin": "10",
        "theme": "fusion"
    },
    "dataset": [
        {
            "data": [
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                }
            ]
        }
    ]
}

chart_input["sparkwinloss"] = {

};
// hbullet
chart_json["hbullet"] = {
    "chart": {
        "lowerLimit": "0",
        "upperLimit": "100",
        "caption": "Monthly Revenue",
        "subcaption": "Actual vs Target<br>Bakersfield Central",
        "numberPrefix": "$",
        "numberSuffix": "K",
        "targetColor": "#8e0000",
        "showHoverEffect": "1",
        "colorRangeFillMix": "{light+0}",
        "valuePadding": "7",
        "theme": "fusion"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "70"
            },
            {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f2c500",
                "alpha": "70"
            },
            {
                "minValue": "75",
                "maxValue": "120",
                "code": "#1aaf5d",
                "alpha": "70"
            }
        ]
    },
    "value": "value${value}",
    "target": "value${target}"
}

chart_input["hbullet"] = {
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "82"
    },
    target: {
        type: "number",
        label: "target",
        val_type: "number",
        value: "90"
    }
};
// vbullet
chart_json["vbullet"] = {
    "chart": {
        "lowerLimit": "0",
        "upperLimit": "100",
        "numberPrefix": "$",
        "numberSuffix": "K",
        "colorRangeFillMix": "{light}",
        "chartBottomMargin": "20",
        "theme": "fusion"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00",
                "alpha": "70"
            },
            {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f2c500",
                "alpha": "70"
            },
            {
                "minValue": "75",
                "maxValue": "120",
                "code": "#1aaf5d",
                "alpha": "70"
            }
        ]
    },
    "value": "value${value}",
    "target": "value${target}"
}

chart_input["vbullet"] = {
    value: {
        type: "number",
        label: "value",
        val_type: "number",
        value: "82"
    },
    target: {
        type: "number",
        label: "target",
        val_type: "number",
        value: "90"
    }
};
// funnel
chart_json["funnel"] = {
    "chart": {
        "caption": "Website - Harry's SuperMart",
        "subcaption": "Visit to purchase - Conversion analysis for last year",
        "decimals": "1",
        "isHollow": "1",
        "labelDistance": "15",
        "is2D": "1",
        "plotTooltext": "Success : $percentOfPrevValue",
        "showPercentValues": "1",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "value${label}",
            "value": "value${value}"
        }
    ]
}

chart_input["funnel"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// pyramid
chart_json["pyramid"] = {
    "chart": {
        "caption": "The Global Wealth Pyramid",
        "captionOnTop": "0",
        "captionPadding": "25",
        "alignCaptionWithCanvas": "1",
        "subcaption": "Credit Suisse 2013",
        "subCaptionFontSize": "12",
        "borderAlpha": "20",
        "is2D": "1",
        "showValues": "1",
        "numberPrefix": "$",
        "numberSuffix": "M",
        "plotTooltext": "$label of world population is worth USD $value tn ",
        "showPercentValues": "1",
        "chartLeftMargin": "40",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "value${label}",
            "value": "value${value}"
        }
    ]
}

chart_input["pyramid"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// gantt
chart_json["gantt"] = {
    "chart": {
        "caption": "Construction management of a new store in Denver",
        "subcaption": "Planned vs Actual",
        "dateformat": "dd/mm/yyyy",
        "outputdateformat": "ddds mns yy",
        "ganttwidthpercent": "60",
        "ganttPaneDuration": "40",
        "ganttPaneDurationUnit": "d",
        "plottooltext": "$processName{br} $label starting date $start{br}$label ending date $end",
        "legendBorderAlpha": "0",
        "flatScrollBars": "1",
        "gridbordercolor": "#333333",
        "gridborderalpha": "20",
        "slackFillColor": "#e44a00",
        "taskBarFillMix": "light+0",
        "theme": "fusion"
    },
    "categories": [
        {
            "bgcolor": "#999999",
            "category": [
                {
                    "start": "1/4/2014",
                    "end": "30/6/2014",
                    "label": "Months",
                    "align": "middle",
                    "fontcolor": "#ffffff",
                    "fontsize": "12"
                }
            ]
        },
        {
            "bgcolor": "#999999",
            "align": "middle",
            "fontcolor": "#ffffff",
            "fontsize": "12",
            "category": [
                {
                    "start": "1/4/2014",
                    "end": "30/4/2014",
                    "label": "April"
                },
                {
                    "start": "1/5/2014",
                    "end": "31/5/2014",
                    "label": "May"
                },
                {
                    "start": "1/6/2014",
                    "end": "30/6/2014",
                    "label": "June"
                }
            ]
        },
        {
            "bgcolor": "#ffffff",
            "fontcolor": "#333333",
            "fontsize": "11",
            "align": "center",
            "category": [
                {
                    "start": "1/4/2014",
                    "end": "5/4/2014",
                    "label": "Week 1"
                },
                {
                    "start": "6/4/2014",
                    "end": "12/4/2014",
                    "label": "Week 2"
                },
                {
                    "start": "13/4/2014",
                    "end": "19/4/2014",
                    "label": "Week 3"
                },
                {
                    "start": "20/4/2014",
                    "end": "26/4/2014",
                    "label": "Week 4"
                },
                {
                    "start": "27/4/2014",
                    "end": "3/5/2014",
                    "label": "Week 5"
                },
                {
                    "start": "4/5/2014",
                    "end": "10/5/2014",
                    "label": "Week 6"
                },
                {
                    "start": "11/5/2014",
                    "end": "17/5/2014",
                    "label": "Week 7"
                },
                {
                    "start": "18/5/2014",
                    "end": "24/5/2014",
                    "label": "Week 8"
                },
                {
                    "start": "25/5/2014",
                    "end": "31/5/2014",
                    "label": "Week 9"
                },
                {
                    "start": "1/6/2014",
                    "end": "7/6/2014",
                    "label": "Week 10"
                },
                {
                    "start": "8/6/2014",
                    "end": "14/6/2014",
                    "label": "Week 11"
                },
                {
                    "start": "15/6/2014",
                    "end": "21/6/2014",
                    "label": "Week 12"
                },
                {
                    "start": "22/6/2014",
                    "end": "28/6/2014",
                    "label": "Week 13"
                }
            ]
        }
    ],
    "processes": {
        "headertext": "Task",
        "fontcolor": "#000000",
        "fontsize": "11",
        "isanimated": "1",
        "bgcolor": "#6baa01",
        "headervalign": "bottom",
        "headeralign": "left",
        "headerbgcolor": "#999999",
        "headerfontcolor": "#ffffff",
        "headerfontsize": "12",
        "align": "left",
        "isbold": "1",
        "bgalpha": "25",
        "process": [
            {
                "label": "Clear site",
                "id": "1"
            },
            {
                "label": "Excavate Foundation",
                "id": "2",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Concrete Foundation",
                "id": "3",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Footing to DPC",
                "id": "4",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Drainage Services",
                "id": "5",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Backfill",
                "id": "6",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Ground Floor",
                "id": "7"
            },
            {
                "label": "Walls on First Floor",
                "id": "8"
            },
            {
                "label": "First Floor Carcass",
                "id": "9",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "First Floor Deck",
                "id": "10",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Roof Structure",
                "id": "11"
            },
            {
                "label": "Roof Covering",
                "id": "12"
            },
            {
                "label": "Rainwater Gear",
                "id": "13"
            },
            {
                "label": "Windows",
                "id": "14"
            },
            {
                "label": "External Doors",
                "id": "15"
            },
            {
                "label": "Connect Electricity",
                "id": "16"
            },
            {
                "label": "Connect Water Supply",
                "id": "17",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Install Air Conditioning",
                "id": "18",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Interior Decoration",
                "id": "19",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Fencing And signs",
                "id": "20"
            },
            {
                "label": "Exterior Decoration",
                "id": "21",
                "hoverBandColor": "#e44a00",
                "hoverBandAlpha": "40"
            },
            {
                "label": "Setup racks",
                "id": "22"
            }
        ]
    },
    "datatable": {
        "showprocessname": "1",
        "namealign": "left",
        "fontcolor": "#000000",
        "fontsize": "10",
        "valign": "right",
        "align": "center",
        "headervalign": "bottom",
        "headeralign": "center",
        "headerbgcolor": "#999999",
        "headerfontcolor": "#ffffff",
        "headerfontsize": "12",
        "datacolumn": [
            {
                "bgcolor": "#eeeeee",
                "headertext": "Actual{br}Start{br}Date",
                "text": [
                    {
                        "label": "9/4/2014"
                    },
                    {
                        "label": "13/4/2014"
                    },
                    {
                        "label": "26/4/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "4/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "6/5/2014"
                    },
                    {
                        "label": "5/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "11/5/2014"
                    },
                    {
                        "label": "16/5/2014"
                    },
                    {
                        "label": "16/5/2014"
                    },
                    {
                        "label": "21/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "25/5/2014"
                    },
                    {
                        "label": "28/5/2014"
                    },
                    {
                        "label": "4/6/2014"
                    },
                    {
                        "label": "4/6/2014"
                    },
                    {
                        "label": "4/6/2014"
                    },
                    {
                        "label": "2/6/2014"
                    },
                    {
                        "label": "5/6/2014"
                    },
                    {
                        "label": "18/6/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "16/6/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "23/6/2014"
                    },
                    {
                        "label": "18/6/2014"
                    },
                    {
                        "label": "25/6/2014"
                    }
                ]
            },
            {
                "bgcolor": "#eeeeee",
                "headertext": "Actual{br}End{br}Date",
                "text": [
                    {
                        "label": "12/4/2014"
                    },
                    {
                        "label": "25/4/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "4/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "10/5/2014"
                    },
                    {
                        "label": "10/5/2014"
                    },
                    {
                        "label": "11/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "14/5/2014"
                    },
                    {
                        "label": "19/5/2014"
                    },
                    {
                        "label": "21/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "24/5/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "27/5/2014"
                    },
                    {
                        "label": "1/6/2014"
                    },
                    {
                        "label": "6/6/2014"
                    },
                    {
                        "label": "4/6/2014"
                    },
                    {
                        "label": "4/6/2014"
                    },
                    {
                        "label": "7/6/2014"
                    },
                    {
                        "label": "17/6/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "20/6/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "23/6/2014"
                    },
                    {
                        "label": "23/6/2014"
                    },
                    {
                        "label": "23/6/2014",
                        "bgcolor": "#e44a00",
                        "bgAlpha": "40"
                    },
                    {
                        "label": "28/6/2014"
                    }
                ]
            }
        ]
    },
    "tasks": {
        "task": [
            {
                "label": "Planned",
                "processid": "1",
                "start": "9/4/2014",
                "end": "12/4/2014",
                "id": "1-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "1",
                "start": "9/4/2014",
                "end": "12/4/2014",
                "id": "1",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "2",
                "start": "13/4/2014",
                "end": "23/4/2014",
                "id": "2-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "2",
                "start": "13/4/2014",
                "end": "25/4/2014",
                "id": "2",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "2",
                "start": "23/4/2014",
                "end": "25/4/2014",
                "id": "2-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 2 days."
            },
            {
                "label": "Planned",
                "processid": "3",
                "start": "23/4/2014",
                "end": "30/4/2014",
                "id": "3-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "3",
                "start": "26/4/2014",
                "end": "4/5/2014",
                "id": "3",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "3",
                "start": "3/5/2014",
                "end": "4/5/2014",
                "id": "3-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 1 days."
            },
            {
                "label": "Planned",
                "processid": "4",
                "start": "3/5/2014",
                "end": "10/5/2014",
                "id": "4-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "4",
                "start": "4/5/2014",
                "end": "10/5/2014",
                "id": "4",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "5",
                "start": "6/5/2014",
                "end": "11/5/2014",
                "id": "5-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "5",
                "start": "6/5/2014",
                "end": "10/5/2014",
                "id": "5",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "6",
                "start": "4/5/2014",
                "end": "7/5/2014",
                "id": "6-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "6",
                "start": "5/5/2014",
                "end": "11/5/2014",
                "id": "6",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "6",
                "start": "7/5/2014",
                "end": "11/5/2014",
                "id": "6-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 4 days."
            },
            {
                "label": "Planned",
                "processid": "7",
                "start": "11/5/2014",
                "end": "14/5/2014",
                "id": "7-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "7",
                "start": "11/5/2014",
                "end": "14/5/2014",
                "id": "7",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "8",
                "start": "16/5/2014",
                "end": "19/5/2014",
                "id": "8-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "8",
                "start": "16/5/2014",
                "end": "19/5/2014",
                "id": "8",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "9",
                "start": "16/5/2014",
                "end": "18/5/2014",
                "id": "9-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "9",
                "start": "16/5/2014",
                "end": "21/5/2014",
                "id": "9",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "9",
                "start": "18/5/2014",
                "end": "21/5/2014",
                "id": "9-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 3 days."
            },
            {
                "label": "Planned",
                "processid": "10",
                "start": "20/5/2014",
                "end": "23/5/2014",
                "id": "10-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "10",
                "start": "21/5/2014",
                "end": "24/5/2014",
                "id": "10",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "10",
                "start": "23/5/2014",
                "end": "24/5/2014",
                "id": "10-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 1 days."
            },
            {
                "label": "Planned",
                "processid": "11",
                "start": "25/5/2014",
                "end": "27/5/2014",
                "id": "11-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "11",
                "start": "25/5/2014",
                "end": "27/5/2014",
                "id": "11",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "12",
                "start": "28/5/2014",
                "end": "1/6/2014",
                "id": "12-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "12",
                "start": "28/5/2014",
                "end": "1/6/2014",
                "id": "12",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "13",
                "start": "4/6/2014",
                "end": "6/6/2014",
                "id": "13-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "13",
                "start": "4/6/2014",
                "end": "6/6/2014",
                "id": "13",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "14",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "14-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "14",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "14",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "15",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "15-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "15",
                "start": "4/6/2014",
                "end": "4/6/2014",
                "id": "15",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "16",
                "start": "2/6/2014",
                "end": "7/6/2014",
                "id": "16-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "16",
                "start": "2/6/2014",
                "end": "7/6/2014",
                "id": "16",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "17",
                "start": "5/6/2014",
                "end": "10/6/2014",
                "id": "17-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "17",
                "start": "5/6/2014",
                "end": "17/6/2014",
                "id": "17",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "17",
                "start": "10/6/2014",
                "end": "17/6/2014",
                "id": "17-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 7 days."
            },
            {
                "label": "Planned",
                "processid": "18",
                "start": "10/6/2014",
                "end": "12/6/2014",
                "id": "18-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Delay",
                "processid": "18",
                "start": "18/6/2014",
                "end": "20/6/2014",
                "id": "18",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 8 days."
            },
            {
                "label": "Planned",
                "processid": "19",
                "start": "15/6/2014",
                "end": "23/6/2014",
                "id": "19-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "19",
                "start": "16/6/2014",
                "end": "23/6/2014",
                "id": "19",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "20",
                "start": "23/6/2014",
                "end": "23/6/2014",
                "id": "20-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "20",
                "start": "23/6/2014",
                "end": "23/6/2014",
                "id": "20",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Planned",
                "processid": "21",
                "start": "18/6/2014",
                "end": "21/6/2014",
                "id": "21-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "21",
                "start": "18/6/2014",
                "end": "23/6/2014",
                "id": "21",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            },
            {
                "label": "Delay",
                "processid": "21",
                "start": "21/6/2014",
                "end": "23/6/2014",
                "id": "21-2",
                "color": "#e44a00",
                "toppadding": "56%",
                "height": "32%",
                "tooltext": "Delayed by 2 days."
            },
            {
                "label": "Planned",
                "processid": "22",
                "start": "24/6/2014",
                "end": "28/6/2014",
                "id": "22-1",
                "color": "#008ee4",
                "height": "32%",
                "toppadding": "12%"
            },
            {
                "label": "Actual",
                "processid": "22",
                "start": "25/6/2014",
                "end": "28/6/2014",
                "id": "22",
                "color": "#6baa01",
                "toppadding": "56%",
                "height": "32%"
            }
        ]
    },
    "connectors": [
        {
            "connector": [
                {
                    "fromtaskid": "1",
                    "totaskid": "2",
                    "color": "#008ee4",
                    "thickness": "2",
                    "fromtaskconnectstart_": "1"
                },
                {
                    "fromtaskid": "2-2",
                    "totaskid": "3",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "3-2",
                    "totaskid": "4",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "3-2",
                    "totaskid": "6",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "7",
                    "totaskid": "8",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "7",
                    "totaskid": "9",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "12",
                    "totaskid": "16",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "12",
                    "totaskid": "17",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "17-2",
                    "totaskid": "18",
                    "color": "#008ee4",
                    "thickness": "2"
                },
                {
                    "fromtaskid": "19",
                    "totaskid": "22",
                    "color": "#008ee4",
                    "thickness": "2"
                }
            ]
        }
    ],
    "milestones": {
        "milestone": [
            {
                "date": "2/6/2014",
                "taskid": "12",
                "color": "#f8bd19",
                "shape": "star",
                "tooltext": "Completion of Phase 1"
            }
        ]
    },
    "legend": {
        "item": [
            {
                "label": "Planned",
                "color": "#008ee4"
            },
            {
                "label": "Actual",
                "color": "#6baa01"
            },
            {
                "label": "Slack (Delay)",
                "color": "#e44a00"
            }
        ]
    }
}

chart_input["gantt"] = {

};



// logmscolumn2d
chart_json["logmscolumn2d"] = {
    "chart": {
        "caption": "Store footfall vs Online visitors ",
        "subCaption": "Last Year",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "base": "10",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["logmscolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// logmsline
chart_json["logmsline"] = {
    "chart": {
        "caption": "Store footfall vs Online visitors ",
        "subCaption": "Last Year",
        "xAxisName": "label${label}",
        "yAxisName": "USD",
        "base": "10",
        "numberprefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["logmsline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// spline
chart_json["spline"] = {
    "chart": {
        "caption": "Total footfall in Bakersfield Central",
        "subCaption": "Last week",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "lineThickness": "2",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "value${label}",
            "value": "value${value}"
        }
    ]
}

chart_input["spline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// splinearea
chart_json["splinearea"] = {
    "chart": {
        "caption": "Total sales of iPhone",
        "subCaption": "Last month",
        "xAxisName": "label${label}",
        "yAxisName": "label${value}",
        "xAxisLineThickness": "1",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "value${label}",
            "value": "value${value}"
        }
    ]
}

chart_input["splinearea"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// msspline
chart_json["msspline"] = {
    "chart": {
        "caption": "Number of visitors last week",
        "subCaption": "Bakersfield Central vs Los Angeles Topanga",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["msspline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// mssplinearea
chart_json["mssplinearea"] = {
    "chart": {
        "caption": "Number of Footfalls Last Week",
        "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
        "xAxisName": "label${label}",
        "yAxisName": "",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["mssplinearea"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};


// errorbar2d
chart_json["errorbar2d"] = {
    "chart": {
        "caption": "Machinery lifespan range",
        "subcaption": "Means & standard deviations",
        "xAxisName": "label${label}",
        "yAxisName": "Life Span",
        "numberSuffix": " Years",
        "halfErrorBar": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}",
                    "errorvalue": "20000"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}",
                    "errorvalue": "10000"
                }
            ]
        }
    ]
}

chart_input["errorbar2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// errorline
chart_json["errorline"] = {
    "chart": {
        "caption": "Revenues and Profits",
        "subCaption": "Predicted for next year",
        "xAxisname": "label${label}",
        "yAxisName": "",
        "numberPrefix": "$",
        "halferrorbar": "0",
        "plotTooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #999999; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}$seriesName : <b>$dataValue</b>{br}Deviation : <b>� $errorDataValue</b>",
        "fusion": "theme"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [
                {
                    "value": "value${value1}",
                    "errorvalue": "20000"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "dashed": "1",
            "dashlen": "2",
            "dashGap": "2",
            "data": [
                {
                    "value": "value${value2}",
                    "errorvalue": "10000"
                }
            ]
        }
    ]
}

chart_input["errorline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// errorscatter
chart_json["errorscatter"] = {
    "chart": {
        "xaxisname": "label${label}",
        "yaxisname": "",
        "caption": "Revenue forecast",
        "subcaption": "For Next Year",
        "halfverticalerrorbar": "0",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}",
                    "x": "value${x_interval}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value}",
            "color": "",
            "anchorradius": "8",
            "anchorbgcolor": "#1aaf5d",
            "data": [
                {
                    "y": "value${value}",
                    "x": "value${x_interval}",
                    "verticalErrorValue": "5000"
                }
            ]
        }
    ]
}

chart_input["errorscatter"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    x_interval: {
        type: "increase_number",
        label: "x_interval",
        val_type: "number",
        value: "20"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};


// inversemsarea
chart_json["inversemsarea"] = {
    "chart": {
        "caption": "Daily bounce rate",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "Percentage",
        "numberSuffix": "%",
        "plotFillAlpha": "50",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
}

chart_input["inversemsarea"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// inversemscolumn2d
chart_json["inversemscolumn2d"] = {
    "chart": {
        "caption": "Average Page Load Time (hsm.com)",
        "subCaption": "Last Week",
        "yAxisName": "label${label}",
        "numberSuffix": "$",
        "xAxisLineThickness": "1",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value}",
            "allowDrag": "0",
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["inversemscolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};
// inversemsline
chart_json["inversemsline"] = {
    "chart": {
        "caption": "Average Page Load Time (hsm.com)",
        "subCaption": "Last Week",
        "showBorder": "0",
        "yAxisName": "label${label}",
        "numberSuffix": "$",
        "xAxisLineThickness": "1",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value}",
            "allowDrag": "0",
            "data": [
                {
                    "value": "value${value}"
                }
            ]
        }
    ]
}

chart_input["inversemsline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value: {
        type: "data",
        label: "value",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    }
};


// dragcolumn2d
chart_json["dragcolumn2d"] = {
    "chart": {
        "caption": "Inventory status - Bakersfield Central",
        "subCaption": "Top 5 Food items",
        "xAxisName": "Food Item",
        "yAxisName": "No. of Units",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "allowDrag": "0",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "dashed": "1",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
};

chart_input["dragcolumn2d"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// dragline
chart_json["dragline"] = {
    "chart": {
        "caption": "Quarterly Sales Projections",
        "subCaption": "iPhone vs Samsung Galaxy",
        "xAxisName": "Quarter",
        "yAxisName": "No. of Units",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "valuePosition": "ABOVE",
            "allowDrag": "1",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "dashed": "1",
            "allowDrag": "1",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
};

chart_input["dragline"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};
// dragarea
chart_json["dragarea"] = {
    "chart": {
        "caption": "Quarterly Sales Projections",
        "subCaption": "iPhone vs Samsung Galaxy",
        "xAxisName": "Quarter",
        "yAxisName": "No. of Units",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "value${label}"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "label${value1}",
            "valuePosition": "ABOVE",
            "allowDrag": "1",
            "data": [
                {
                    "value": "value${value1}"
                }
            ]
        },
        {
            "seriesname": "label${value2}",
            "dashed": "1",
            "allowDrag": "1",
            "data": [
                {
                    "value": "value${value2}"
                }
            ]
        }
    ]
};

chart_input["dragarea"] = {
    label: {
        type: "data",
        label: "label",
        val_type: "string",
        value: "ACCOUNTANT"
    },
    value1: {
        type: "data",
        label: "value(1st)",
        val_type: "number",
        value: "YTD_EXPENDITURES"
    },
    value2: {
        type: "data",
        label: "value(2nd)",
        val_type: "number",
        value: "ORIGINAL_CONTRACT_AMOUNT"
    }
};

// treemap
chart_json["treemap"] = {
    "chart": {
        "animation": "0",
        "hideTitle": "1",
        "plotToolText": "<div><b>$label</b><br/> <b>Sale: </b>$$value<br/><b>Growth: </b>$svalue%</div>",
        "horizontalPadding": "1",
        "verticalPadding": "1",
        "plotborderthickness": ".5",
        "plotbordercolor": "666666",
        "legendpadding": "0",
        "legendItemFontSize": "10",
        "legendItemFontBold": "1",
        "showLegend": "1",
        "legenditemfontcolor": "3d5c5c",
        "algorithm": "squarified",
        "caption": "Harry's SuperMart: Sales Team Performance Analysis",
        "legendScaleLineThickness": "0",
        "legendCaptionFontSize": "10",
        "subcaption": "Year Till Date",
        "legendCaption": "Growth in sales - Compared to previous year",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "USA",
            "fillcolor": "8c8c8c",
            "value": "8635000",
            "data": [
                {
                    "label": "Northern Region",
                    "value": "4140000",
                    "data": [
                        {
                            "label": "Carol Francis",
                            "value": "84000",
                            "sValue": "15"
                        },
                        {
                            "label": "Otis Newman",
                            "value": "60000",
                            "sValue": "10"
                        },
                        {
                            "label": "Darlene Alvarez",
                            "value": "50000",
                            "sValue": "11"
                        },
                        {
                            "label": "Lucas Cannon",
                            "value": "58000",
                            "sValue": "5"
                        },
                        {
                            "label": "Rosalie Huff",
                            "value": "36000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Jerome Vargas",
                            "value": "72000",
                            "sValue": "14"
                        },
                        {
                            "label": "Becky Barton",
                            "value": "18000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Ben Rios",
                            "value": "14000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Donnie Patton",
                            "value": "37000",
                            "sValue": "2"
                        },
                        {
                            "label": "Dana Freeman",
                            "value": "41000",
                            "sValue": "5"
                        },
                        {
                            "label": "Darren Barrett",
                            "value": "54000",
                            "sValue": "7"
                        },
                        {
                            "label": "Steve Vaughn",
                            "value": "35000",
                            "sValue": "12"
                        },
                        {
                            "label": "Roosevelt Rhodes",
                            "value": "48000",
                            "sValue": "15"
                        },
                        {
                            "label": "Moses Sparks",
                            "value": "38000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Hope Cox",
                            "value": "32000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Hector Lowe",
                            "value": "66000",
                            "sValue": "15"
                        },
                        {
                            "label": "Lori Christensen",
                            "value": "47000",
                            "sValue": "10"
                        },
                        {
                            "label": "Roman Aguilar",
                            "value": "14000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Brittany Chandler",
                            "value": "21000",
                            "sValue": "-12"
                        },
                        {
                            "label": "Tiffaney Battle",
                            "value": "60000",
                            "sValue": "10"
                        },
                        {
                            "label": "Elin Stamps",
                            "value": "54000",
                            "sValue": "5"
                        },
                        {
                            "label": "Donnetta Coley",
                            "value": "59000",
                            "sValue": "+14"
                        },
                        {
                            "label": "Emmaline Halcomb",
                            "value": "34000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Natosha Hammett",
                            "value": "39000",
                            "sValue": "-7"
                        },
                        {
                            "label": "Kimi Stegall",
                            "value": "15000",
                            "sValue": "-19"
                        },
                        {
                            "label": "Norberto Kirk",
                            "value": "46000",
                            "sValue": "2"
                        },
                        {
                            "label": "Noma Martindale",
                            "value": "52000",
                            "sValue": "12"
                        },
                        {
                            "label": "Coreen Numbers",
                            "value": "30000",
                            "sValue": "-1"
                        },
                        {
                            "label": "Chas Irvin",
                            "value": "26000",
                            "sValue": "-17"
                        },
                        {
                            "label": "Carlo Tobin",
                            "value": "31000",
                            "sValue": "-14"
                        },
                        {
                            "label": "Ayanna Mclain",
                            "value": "29000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Rolland Turney",
                            "value": "42000",
                            "sValue": "+5"
                        },
                        {
                            "label": "Ona Roden",
                            "value": "64000",
                            "sValue": "+20"
                        },
                        {
                            "label": "Drew Clarkson",
                            "value": "24000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Samuel Adler",
                            "value": "29000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Adrian Steen",
                            "value": "51000",
                            "sValue": "2"
                        },
                        {
                            "label": "Xiao Batson",
                            "value": "35000",
                            "sValue": "-2"
                        },
                        {
                            "label": "Britney Hammonds",
                            "value": "45000",
                            "sValue": "3"
                        },
                        {
                            "label": "Roslyn Wilhelm",
                            "value": "28000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Alva Puente",
                            "value": "26000",
                            "sValue": "-8"
                        },
                        {
                            "label": "Daina Horvath",
                            "value": "49000",
                            "sValue": "9"
                        },
                        {
                            "label": "Louie Chaney",
                            "value": "54000",
                            "sValue": "15"
                        },
                        {
                            "label": "Olympia Mcmullen",
                            "value": "71000",
                            "sValue": "14"
                        },
                        {
                            "label": "Nichol Leclair",
                            "value": "38000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Marylou Messenger",
                            "value": "41000",
                            "sValue": "5"
                        },
                        {
                            "label": "Christoper Crowley",
                            "value": "34000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Neville Venable",
                            "value": "37000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Brock Rowell",
                            "value": "35000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Gisele Pelletier",
                            "value": "32000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Thelma Caldwell",
                            "value": "35000",
                            "sValue": "5"
                        },
                        {
                            "label": "Shyla Plunkett",
                            "value": "84000",
                            "sValue": "15"
                        },
                        {
                            "label": "Joie Dickson",
                            "value": "60000",
                            "sValue": "10"
                        },
                        {
                            "label": "Shana Nabors",
                            "value": "50000",
                            "sValue": "11"
                        },
                        {
                            "label": "Catina Burris",
                            "value": "58000",
                            "sValue": "5"
                        },
                        {
                            "label": "Man Spearman",
                            "value": "36000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Shaunna Hamby",
                            "value": "72000",
                            "sValue": "14"
                        },
                        {
                            "label": "Stormy Read",
                            "value": "18000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Wen Coe",
                            "value": "14000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Elizebeth Poston",
                            "value": "37000",
                            "sValue": "2"
                        },
                        {
                            "label": "Breanna Stringer",
                            "value": "41000",
                            "sValue": "5"
                        },
                        {
                            "label": "Allyn Holly",
                            "value": "54000",
                            "sValue": "7"
                        },
                        {
                            "label": "Lera Gaylord",
                            "value": "35000",
                            "sValue": "12"
                        },
                        {
                            "label": "Lashunda Dowd",
                            "value": "48000",
                            "sValue": "15"
                        },
                        {
                            "label": "Kiesha Tyner",
                            "value": "38000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Lamont Allman",
                            "value": "32000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Sun Switzer",
                            "value": "66000",
                            "sValue": "15"
                        },
                        {
                            "label": "Dorene Small",
                            "value": "47000",
                            "sValue": "10"
                        },
                        {
                            "label": "Cherlyn Bozeman",
                            "value": "14000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Stephani Contreras",
                            "value": "21000",
                            "sValue": "-12"
                        },
                        {
                            "label": "Bebe Holcomb",
                            "value": "60000",
                            "sValue": "10"
                        },
                        {
                            "label": "Shenika Barham",
                            "value": "54000",
                            "sValue": "5"
                        },
                        {
                            "label": "Troy Hobbs",
                            "value": "59000",
                            "sValue": "+14"
                        },
                        {
                            "label": "Thomas Tom",
                            "value": "34000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Sunshine Libby",
                            "value": "39000",
                            "sValue": "-7"
                        },
                        {
                            "label": "Tambra Patten",
                            "value": "15000",
                            "sValue": "-19"
                        },
                        {
                            "label": "Marlyn Cato",
                            "value": "46000",
                            "sValue": "2"
                        },
                        {
                            "label": "Jeanelle Ham",
                            "value": "52000",
                            "sValue": "12"
                        },
                        {
                            "label": "Armanda Kimble",
                            "value": "30000",
                            "sValue": "-1"
                        },
                        {
                            "label": "Danna Fitzpatrick",
                            "value": "26000",
                            "sValue": "-17"
                        },
                        {
                            "label": "Elmira Nagle",
                            "value": "31000",
                            "sValue": "-14"
                        },
                        {
                            "label": "Bella Marx",
                            "value": "29000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Vania Meeks",
                            "value": "42000",
                            "sValue": "+5"
                        },
                        {
                            "label": "Florencio Heffner",
                            "value": "64000",
                            "sValue": "+20"
                        },
                        {
                            "label": "Amie Peoples",
                            "value": "24000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Chrystal Downs",
                            "value": "29000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Glennis Chisholm",
                            "value": "51000",
                            "sValue": "2"
                        },
                        {
                            "label": "Sydney Castaneda",
                            "value": "35000",
                            "sValue": "-2"
                        },
                        {
                            "label": "Gregory Drummond",
                            "value": "45000",
                            "sValue": "3"
                        },
                        {
                            "label": "Birdie Neely",
                            "value": "28000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Ciera Mcafee",
                            "value": "26000",
                            "sValue": "-8"
                        },
                        {
                            "label": "Martin Larose",
                            "value": "49000",
                            "sValue": "9"
                        },
                        {
                            "label": "Bobette Dutton",
                            "value": "54000",
                            "sValue": "15"
                        },
                        {
                            "label": "Numbers Yarbrough",
                            "value": "71000",
                            "sValue": "14"
                        },
                        {
                            "label": "Sanjuanita Croteau",
                            "value": "38000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Alysha Aguirre",
                            "value": "41000",
                            "sValue": "5"
                        },
                        {
                            "label": "Beau Welker",
                            "value": "34000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Yuri Brannon",
                            "value": "37000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Breana Marion",
                            "value": "35000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Bernardina Fennell",
                            "value": "32000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Bridgette Gould",
                            "value": "35000",
                            "sValue": "5"
                        }
                    ]
                },
                {
                    "label": "Eastern Region",
                    "value": "1110000",
                    "data": [
                        {
                            "label": "Lee Miles",
                            "value": "18000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Eduardo Day",
                            "value": "21000",
                            "sValue": "5"
                        },
                        {
                            "label": "Darrell Schultz",
                            "value": "29500",
                            "sValue": "10"
                        },
                        {
                            "label": "Troy Patrick",
                            "value": "25500",
                            "sValue": "12"
                        },
                        {
                            "label": "Kerry Smith",
                            "value": "30000",
                            "sValue": "15"
                        },
                        {
                            "label": "Franklin Walker",
                            "value": "18500",
                            "sValue": "-5"
                        },
                        {
                            "label": "Toby Brady",
                            "value": "28500",
                            "sValue": "-2"
                        },
                        {
                            "label": "Kenneth Wilkerson",
                            "value": "25000",
                            "sValue": "5"
                        },
                        {
                            "label": "Ralph Goodman",
                            "value": "36000",
                            "sValue": "10"
                        },
                        {
                            "label": "Lela Glover",
                            "value": "15500",
                            "sValue": "-14"
                        },
                        {
                            "label": "Warren Gordon",
                            "value": "25500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Gladys Ruiz",
                            "value": "33000",
                            "sValue": "15"
                        },
                        {
                            "label": "Mabel Norris",
                            "value": "14000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Darrel Rodgers",
                            "value": "17500",
                            "sValue": "-15"
                        },
                        {
                            "label": "Barry Larson",
                            "value": "20000",
                            "sValue": "2"
                        },
                        {
                            "label": "Alma Houston",
                            "value": "31000",
                            "sValue": "-3"
                        },
                        {
                            "label": "Rochelle Burke",
                            "value": "12500",
                            "sValue": "5"
                        },
                        {
                            "label": "Orville Garza",
                            "value": "34500",
                            "sValue": "-7"
                        },
                        {
                            "label": "Rex Nichols",
                            "value": "14500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Jenna Burton",
                            "value": "18500",
                            "sValue": "8"
                        },
                        {
                            "label": "Jordan Little",
                            "value": "21000",
                            "sValue": "3"
                        },
                        {
                            "label": "Rodolfo Dawson",
                            "value": "28500",
                            "sValue": "10"
                        },
                        {
                            "label": "Darryl Bowen",
                            "value": "15500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Marsha Foster",
                            "value": "12500",
                            "sValue": "-18"
                        },
                        {
                            "label": "Sandra Curtis",
                            "value": "32000",
                            "sValue": "19"
                        },
                        {
                            "label": "Alexis Robinson",
                            "value": "19500",
                            "sValue": "-4"
                        },
                        {
                            "label": "Courtney Stokes",
                            "value": "27500",
                            "sValue": "10"
                        },
                        {
                            "label": "Kelli Miller",
                            "value": "34500",
                            "sValue": "14"
                        },
                        {
                            "label": "Cathy Davis",
                            "value": "14500",
                            "sValue": "-16"
                        },
                        {
                            "label": "Gaynell Mcafee",
                            "value": "14000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Trinidad Iverson",
                            "value": "24500",
                            "sValue": "5"
                        },
                        {
                            "label": "Anjelica Kilpatrick",
                            "value": "27000",
                            "sValue": "15"
                        },
                        {
                            "label": "Cheryle Hearn",
                            "value": "17500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Rosamond Gass",
                            "value": "21000",
                            "sValue": "5"
                        },
                        {
                            "label": "Katharine Perrin",
                            "value": "12500",
                            "sValue": "-20"
                        },
                        {
                            "label": "Heide Matteson",
                            "value": "32000",
                            "sValue": "20"
                        },
                        {
                            "label": "Amparo Fortin",
                            "value": "25500",
                            "sValue": "10"
                        },
                        {
                            "label": "Charlena Bills",
                            "value": "19500",
                            "sValue": "-2"
                        },
                        {
                            "label": "Ronna Irizarry",
                            "value": "30000",
                            "sValue": "15"
                        },
                        {
                            "label": "Fidelia Hummel",
                            "value": "28000",
                            "sValue": "5"
                        },
                        {
                            "label": "Darlena Maher",
                            "value": "14500",
                            "sValue": "-7"
                        },
                        {
                            "label": "Isa Browning",
                            "value": "17000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Dalene Baron",
                            "value": "22500",
                            "sValue": "10"
                        },
                        {
                            "label": "Ghislaine Loy",
                            "value": "12000",
                            "sValue": "-18"
                        },
                        {
                            "label": "Alexander Eldridge",
                            "value": "18500",
                            "sValue": "-2"
                        },
                        {
                            "label": "Brett Clemmons",
                            "value": "13000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Mellie Hackney",
                            "value": "13000",
                            "sValue": "-18"
                        },
                        {
                            "label": "Gerry Felder",
                            "value": "35500",
                            "sValue": "15"
                        },
                        {
                            "label": "Librada Creighton",
                            "value": "17500",
                            "sValue": "-7"
                        },
                        {
                            "label": "Florence Pierce",
                            "value": "21000",
                            "sValue": "5"
                        }
                    ]
                },
                {
                    "label": "Southern Region",
                    "value": "1555000",
                    "data": [
                        {
                            "label": "Derek Sandoval",
                            "value": "12000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Bertha Bishop",
                            "value": "55000",
                            "sValue": "10"
                        },
                        {
                            "label": "Dominick Price",
                            "value": "24500",
                            "sValue": "10"
                        },
                        {
                            "label": "Sylvia Rodriquez",
                            "value": "15000",
                            "sValue": "-2"
                        },
                        {
                            "label": "Leland Jennings",
                            "value": "63000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Dean Collins",
                            "value": "56000",
                            "sValue": "3"
                        },
                        {
                            "label": "Jamie Cohen",
                            "value": "19500",
                            "sValue": "4"
                        },
                        {
                            "label": "Elias Hammond",
                            "value": "29500",
                            "sValue": "12"
                        },
                        {
                            "label": "Kristy Stone",
                            "value": "24500",
                            "sValue": "5"
                        },
                        {
                            "label": "Jeanette Wood",
                            "value": "17500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Salvador Colon",
                            "value": "75000",
                            "sValue": "18"
                        },
                        {
                            "label": "Victor Ferguson",
                            "value": "60000",
                            "sValue": "10"
                        },
                        {
                            "label": "Marion Hernandez",
                            "value": "14500",
                            "sValue": "-18"
                        },
                        {
                            "label": "Javier Erickson",
                            "value": "18000",
                            "sValue": "-19"
                        },
                        {
                            "label": "Stephanie Matthews",
                            "value": "16500",
                            "sValue": "5"
                        },
                        {
                            "label": "Deanna Russell",
                            "value": "25500",
                            "sValue": "1"
                        },
                        {
                            "label": "Nettie Holt",
                            "value": "32500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Lynne Mack",
                            "value": "50000",
                            "sValue": "8"
                        },
                        {
                            "label": "Carrie Stevens",
                            "value": "47000",
                            "sValue": "14"
                        },
                        {
                            "label": "Janyce Hildebrand",
                            "value": "29000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Emery Underhill",
                            "value": "67000",
                            "sValue": "20"
                        },
                        {
                            "label": "Priscila Coy",
                            "value": "72000",
                            "sValue": "15"
                        },
                        {
                            "label": "Dede Moffett",
                            "value": "12500",
                            "sValue": "-15"
                        },
                        {
                            "label": "Sydney Merchant",
                            "value": "65500",
                            "sValue": "10"
                        },
                        {
                            "label": "Daryl Farrar",
                            "value": "65000",
                            "sValue": "5"
                        },
                        {
                            "label": "Nella Nickerson",
                            "value": "27000",
                            "sValue": "14"
                        },
                        {
                            "label": "Octavia Mccorkle",
                            "value": "17500",
                            "sValue": "-2"
                        },
                        {
                            "label": "Lynsey Boren",
                            "value": "22500",
                            "sValue": "5"
                        },
                        {
                            "label": "Argentina Ireland",
                            "value": "15500",
                            "sValue": "-8"
                        },
                        {
                            "label": "Tonda Ricks",
                            "value": "14500",
                            "sValue": "-10"
                        },
                        {
                            "label": "Shira Laporte",
                            "value": "25500",
                            "sValue": "-5"
                        },
                        {
                            "label": "Reuben Upshaw",
                            "value": "12000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Angelia Mcalister",
                            "value": "23500",
                            "sValue": "15"
                        },
                        {
                            "label": "Ludivina Teel",
                            "value": "19000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Darcel Scarbrough",
                            "value": "13000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Chantelle Carl",
                            "value": "14000",
                            "sValue": "2"
                        },
                        {
                            "label": "Young Chestnut",
                            "value": "14500",
                            "sValue": "-7"
                        },
                        {
                            "label": "Janetta Gilman",
                            "value": "17000",
                            "sValue": "-8"
                        },
                        {
                            "label": "Otto Pfeifer",
                            "value": "29500",
                            "sValue": "10"
                        },
                        {
                            "label": "Queen Trudeau",
                            "value": "70000",
                            "sValue": "15"
                        },
                        {
                            "label": "Candie Vang",
                            "value": "17000",
                            "sValue": "-12"
                        },
                        {
                            "label": "Tia Burgos",
                            "value": "21000",
                            "sValue": "12"
                        },
                        {
                            "label": "Teresita Sprague",
                            "value": "46500",
                            "sValue": "18"
                        },
                        {
                            "label": "Tomoko Shull",
                            "value": "17000",
                            "sValue": "-4"
                        },
                        {
                            "label": "Yahaira Snider",
                            "value": "24500",
                            "sValue": "8"
                        },
                        {
                            "label": "Zina Espinoza",
                            "value": "51000",
                            "sValue": "5"
                        },
                        {
                            "label": "Jamal Crespo",
                            "value": "12000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Ariel Jorgensen",
                            "value": "16000",
                            "sValue": "5"
                        },
                        {
                            "label": "Fredda Tuttle",
                            "value": "14000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Gerardo Carter",
                            "value": "34500",
                            "sValue": "-16"
                        }
                    ]
                },
                {
                    "label": "Western Region",
                    "value": "1830000",
                    "data": [
                        {
                            "label": "Sadie Wells",
                            "value": "30000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Jacqueline Griffith",
                            "value": "45000",
                            "sValue": "2"
                        },
                        {
                            "label": "Malcolm Lee",
                            "value": "55000",
                            "sValue": "18"
                        },
                        {
                            "label": "Martin Hudson",
                            "value": "59000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Carlos Hart",
                            "value": "64000",
                            "sValue": "18"
                        },
                        {
                            "label": "Alison Luna",
                            "value": "35000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Pablo Paul",
                            "value": "72000",
                            "sValue": "20"
                        },
                        {
                            "label": "Arlene Fox",
                            "value": "33000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Lillian Young",
                            "value": "39000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Annie Ford",
                            "value": "66000",
                            "sValue": "10"
                        },
                        {
                            "label": "Manuel Delgado",
                            "value": "46000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Arthur Pope",
                            "value": "28000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Antonia Marshall",
                            "value": "24000",
                            "sValue": "-17"
                        },
                        {
                            "label": "Glen Alexander",
                            "value": "29000",
                            "sValue": "15"
                        },
                        {
                            "label": "Myrtle Bass",
                            "value": "40000",
                            "sValue": "10"
                        },
                        {
                            "label": "Garry Palmer",
                            "value": "27000",
                            "sValue": "-18"
                        },
                        {
                            "label": "Dianne Blair",
                            "value": "35000",
                            "sValue": "-1"
                        },
                        {
                            "label": "Melba Page",
                            "value": "36000",
                            "sValue": "5"
                        },
                        {
                            "label": "Darla Nelson",
                            "value": "60000",
                            "sValue": "14"
                        },
                        {
                            "label": "Winston Brewer",
                            "value": "43000",
                            "sValue": "17"
                        },
                        {
                            "label": "Drew Osborne",
                            "value": "21000",
                            "sValue": "-12"
                        },
                        {
                            "label": "Jesus Sullivan",
                            "value": "46000",
                            "sValue": "18"
                        },
                        {
                            "label": "Jeremiah Flowers",
                            "value": "15000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Suzanne Richardson",
                            "value": "24000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Nicholas Mathis",
                            "value": "71000",
                            "sValue": "20"
                        },
                        {
                            "label": "Della King",
                            "value": "28000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Beth Boone",
                            "value": "40000",
                            "sValue": "15"
                        },
                        {
                            "label": "Ruben Powell",
                            "value": "35000",
                            "sValue": "6"
                        },
                        {
                            "label": "Marlon Harrington",
                            "value": "14000",
                            "sValue": "-7"
                        },
                        {
                            "label": "Sharice Kang",
                            "value": "25000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Lizette Stout",
                            "value": "55000",
                            "sValue": "15"
                        },
                        {
                            "label": "Jimmy Cho",
                            "value": "41000",
                            "sValue": "10"
                        },
                        {
                            "label": "Weston Alcorn",
                            "value": "21000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Omer Whitfield",
                            "value": "18000",
                            "sValue": "-10"
                        },
                        {
                            "label": "Delora Downs",
                            "value": "35000",
                            "sValue": "2"
                        },
                        {
                            "label": "Rea Booker",
                            "value": "22000",
                            "sValue": "12"
                        },
                        {
                            "label": "Jon Blue",
                            "value": "73000",
                            "sValue": "20"
                        },
                        {
                            "label": "Haley Cameron",
                            "value": "17000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Jani Fortune",
                            "value": "23000",
                            "sValue": "-15"
                        },
                        {
                            "label": "Theressa Talbot",
                            "value": "26000",
                            "sValue": "8"
                        },
                        {
                            "label": "Tashia Crane",
                            "value": "38000",
                            "sValue": "-2"
                        },
                        {
                            "label": "Latonya Grey",
                            "value": "19000",
                            "sValue": "-20"
                        },
                        {
                            "label": "Lyndsey Song",
                            "value": "40000",
                            "sValue": "15"
                        },
                        {
                            "label": "Lan Bean",
                            "value": "48000",
                            "sValue": "5"
                        },
                        {
                            "label": "Ethelene Haas",
                            "value": "52000",
                            "sValue": "10"
                        },
                        {
                            "label": "Lauran Dunaway",
                            "value": "29000",
                            "sValue": "8"
                        },
                        {
                            "label": "Williams Hodge",
                            "value": "14000",
                            "sValue": "-18"
                        },
                        {
                            "label": "Elwanda Archuleta",
                            "value": "24000",
                            "sValue": "-5"
                        },
                        {
                            "label": "Florida Andersen",
                            "value": "30000",
                            "sValue": "5"
                        },
                        {
                            "label": "Scott Perry",
                            "value": "20000",
                            "sValue": "2"
                        }
                    ]
                }
            ]
        }
    ],
    "colorrange": {
        "mapbypercent": "1",
        "gradient": "1",
        "minvalue": "-25",
        "code": "e24b1a",
        "startlabel": "Decline",
        "endlabel": "Rise",
        "color": [
            {
                "code": "ffffff",
                "maxvalue": "0",
                "label": "Static"
            },
            {
                "code": "6da81e",
                "maxvalue": "25",
                "label": "AVERAGE"
            }
        ]
    }
}

chart_input["treemap"] = {
};
// radar
chart_json["radar"] = {
    "chart": {
        "caption": "Budget analysis",
        "subCaption": "Current month",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Marketing"
                },
                {
                    "label": "Product Management"
                },
                {
                    "label": "Customer Service"
                },
                {
                    "label": "Human Resource"
                },
                {
                    "label": "Sales & Distribution"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Allocated Budget",
            "data": [
                {
                    "value": "19000"
                },
                {
                    "value": "16500"
                },
                {
                    "value": "14300"
                },
                {
                    "value": "10000"
                },
                {
                    "value": "9800"
                }
            ]
        },
        {
            "seriesname": "Actual Cost",
            "data": [
                {
                    "value": "6000"
                },
                {
                    "value": "9500"
                },
                {
                    "value": "11900"
                },
                {
                    "value": "8000"
                },
                {
                    "value": "9700"
                }
            ]
        }
    ]
}

chart_input["radar"] = {
};
// heatmap
chart_json["heatmap"] = {
    "chart": {
        "caption": "Top Smartphone Ratings",
        "subcaption": "By Features",
        "xAxisName": "Features",
        "yAxisName": "Model",
        "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
        "theme": "fusion"
    },
    "rows": {
        "row": [
            {
                "id": "SGS5",
                "label": "Samsung Galaxy S5"
            },
            {
                "id": "HTC1M8",
                "label": "HTC One (M8)"
            },
            {
                "id": "IPHONES5",
                "label": "Apple iPhone 5S"
            },
            {
                "id": "LUMIA",
                "label": "Nokia Lumia 1520"
            }
        ]
    },
    "columns": {
        "column": [
            {
                "id": "processor",
                "label": "Processor"
            },
            {
                "id": "screen",
                "label": "Screen Size"
            },
            {
                "id": "price",
                "label": "Price"
            },
            {
                "id": "backup",
                "label": "Battery Backup"
            },
            {
                "id": "cam",
                "label": "Camera"
            }
        ]
    },
    "dataset": [
        {
            "data": [
                {
                    "rowid": "SGS5",
                    "columnid": "processor",
                    "value": "8.7",
                    "tllabel": "Quad Core 2.5 GHz",
                    "trlabel": "OS : Android 4.4 Kitkat"
                },
                {
                    "rowid": "SGS5",
                    "columnid": "screen",
                    "value": "8.5",
                    "tllabel": "5.1 inch",
                    "trlabel": "AMOLED screen"
                },
                {
                    "rowid": "SGS5",
                    "columnid": "price",
                    "value": "9.3",
                    "tllabel": "$600"
                },
                {
                    "rowid": "SGS5",
                    "columnid": "backup",
                    "value": "9.7",
                    "tllabel": "29 Hrs",
                    "trlabel": "Battery : 2800 MAH"
                },
                {
                    "rowid": "SGS5",
                    "columnid": "cam",
                    "value": "8",
                    "tllabel": "16 MP",
                    "trlabel": "Front Camera : 2.1 MP"
                },
                {
                    "rowid": "HTC1M8",
                    "columnid": "processor",
                    "value": "9.2",
                    "tllabel": "Quad Core 2.3 GHz",
                    "trlabel": "OS : Android 4.4 Kitkat"
                },
                {
                    "rowid": "HTC1M8",
                    "columnid": "screen",
                    "value": "8.3",
                    "tllabel": "5 inch",
                    "trlabel": "LCD screen"
                },
                {
                    "rowid": "HTC1M8",
                    "columnid": "price",
                    "value": "7.3",
                    "tllabel": "$600"
                },
                {
                    "rowid": "HTC1M8",
                    "columnid": "backup",
                    "value": "8.8",
                    "tllabel": "20 Hrs",
                    "trlabel": "Battery : 2600 MAH"
                },
                {
                    "rowid": "HTC1M8",
                    "columnid": "cam",
                    "value": "8.7",
                    "tllabel": "4 MP",
                    "trlabel": "Front Camera : 5 MP"
                },
                {
                    "rowid": "IPHONES5",
                    "columnid": "processor",
                    "value": "9.1",
                    "tllabel": "Dual Core",
                    "trlabel": "OS : iOS 7"
                },
                {
                    "rowid": "IPHONES5",
                    "columnid": "screen",
                    "value": "8.6",
                    "tllabel": "4 inch",
                    "trlabel": "Retina LCD screen"
                },
                {
                    "rowid": "IPHONES5",
                    "columnid": "price",
                    "value": "7.2",
                    "tllabel": "$649"
                },
                {
                    "rowid": "IPHONES5",
                    "columnid": "backup",
                    "value": "8.4",
                    "tllabel": "10 Hrs",
                    "trlabel": "Battery : 1560 MAH"
                },
                {
                    "rowid": "IPHONES5",
                    "columnid": "cam",
                    "value": "9.5",
                    "tllabel": "8 MP",
                    "trlabel": "Front Camera : 1.2 MP"
                },
                {
                    "rowid": "LUMIA",
                    "columnid": "processor",
                    "value": "8.8",
                    "tllabel": "Quad Core 2.2 GHz",
                    "trlabel": "OS: Windows Phone 8"
                },
                {
                    "rowid": "LUMIA",
                    "columnid": "screen",
                    "value": "9.1",
                    "tllabel": "6 inch",
                    "trlabel": "LCD screen"
                },
                {
                    "rowid": "LUMIA",
                    "columnid": "price",
                    "value": "9.7",
                    "tllabel": "$470"
                },
                {
                    "rowid": "LUMIA",
                    "columnid": "backup",
                    "value": "9.2",
                    "tllabel": "27 Hrs",
                    "trlabel": "Battery : 3400 MAH"
                },
                {
                    "rowid": "LUMIA",
                    "columnid": "cam",
                    "value": "8.1",
                    "tllabel": "20MP",
                    "trlabel": "Front Camera : 1.2 MP"
                }
            ]
        }
    ],
    "colorrange": {
        "gradient": "0",
        "minvalue": "0",
        "code": "E24B1A",
        "startlabel": "Poor",
        "endlabel": "Good",
        "color": [
            {
                "code": "E24B1A",
                "minvalue": "1",
                "maxvalue": "5",
                "label": "Bad"
            },
            {
                "code": "F6BC33",
                "minvalue": "5",
                "maxvalue": "8.5",
                "label": "Average"
            },
            {
                "code": "6DA81E",
                "minvalue": "8.5",
                "maxvalue": "10",
                "label": "Good"
            }
        ]
    }
}

chart_input["heatmap"] = {
};
// boxandwhisker2d
chart_json["boxandwhisker2d"] = {
    "chart": {
        "caption": "Distribution of annual salaries",
        "subcaption": "By Gender",
        "xAxisName": "Pay Grades",
        "YAxisName": "Salaries (In USD)",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Grade 1"
                },
                {
                    "label": "Grade 2"
                },
                {
                    "label": "Grade 3"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Male",
            "lowerboxcolor": "#0075c2",
            "upperboxcolor": "#1aaf5d",
            "data": [
                {
                    "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000"
                },
                {
                    "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500"
                },
                {
                    "value": "15000,19000,25000,32000,50000,65000"
                }
            ]
        },
        {
            "seriesname": "Female",
            "lowerboxcolor": "#f45b00",
            "upperboxcolor": "#f2c500",
            "data": [
                {
                    "value": "1900,2100,2300,2350,2400,2550,3000,3500,4000, 6000, 6500, 9000"
                },
                {
                    "value": "7000,8000,8300,8700,9500,11000,15000, 17000, 21000"
                },
                {
                    "value": "24000,32000,35000,37000,39000, 58000"
                }
            ]
        }
    ]
}

chart_input["boxandwhisker2d"] = {
};
// candlestick
chart_json["candlestick"] = {
    "chart": {
        "caption": "Daily Stock Price HRYS",
        "subCaption": "Last 2 months",
        "numberprefix": "$",
        "vNumberPrefix": " ",
        "pyaxisname": "Price",
        "vyaxisname": "Volume (In Millions)",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "2 month ago",
                    "x": "1"
                },
                {
                    "label": "1 month ago",
                    "x": "31"
                },
                {
                    "label": "Today",
                    "x": "60"
                }
            ]
        }
    ],
    "dataset": [
        {
            "data": [
                {
                    "open": "18.74",
                    "high": "19.16",
                    "low": "18.67 ",
                    "close": "18.99",
                    "x": "1",
                    "volume": "4991285"
                },
                {
                    "open": "18.74",
                    "high": "19.06",
                    "low": "18.54",
                    "close": "18.82",
                    "x": "2",
                    "volume": "3615889"
                },
                {
                    "open": "19.21",
                    "high": "19.3",
                    "low": "18.59 ",
                    "close": "18.65",
                    "x": "3",
                    "volume": "4749586"
                },
                {
                    "open": "19.85",
                    "high": "19.86",
                    "low": "19.12",
                    "close": "19.4",
                    "x": "4",
                    "volume": "4366740"
                },
                {
                    "open": "20.19",
                    "high": "20.21",
                    "low": "19.57",
                    "close": "19.92",
                    "x": "5",
                    "volume": "3982709"
                },
                {
                    "open": "20.47",
                    "high": "20.64",
                    "low": "20.15",
                    "close": "20.16",
                    "x": "6",
                    "volume": "2289403"
                },
                {
                    "open": "20.36",
                    "high": "20.52",
                    "low": "20.29",
                    "close": "20.48",
                    "x": "7",
                    "volume": "1950919"
                },
                {
                    "open": "20.21",
                    "high": "20.25",
                    "low": "19.91",
                    "close": "20.15",
                    "x": "8",
                    "volume": "2391070"
                },
                {
                    "open": "19.46",
                    "high": "20.54",
                    "low": "19.46",
                    "close": "20.22",
                    "x": "9",
                    "volume": "4548422"
                },
                {
                    "open": "19.24",
                    "high": "19.5",
                    "low": "19.13",
                    "close": "19.44",
                    "x": "10",
                    "volume": "1889811"
                },
                {
                    "open": "19.25",
                    "high": "19.41",
                    "low": "18.99",
                    "close": "19.22",
                    "x": "11",
                    "volume": "2543355"
                },
                {
                    "open": "18.85",
                    "high": "19.45",
                    "low": "18.8",
                    "close": "19.24",
                    "x": "12",
                    "volume": "2134393"
                },
                {
                    "open": "18.97",
                    "high": "19.01",
                    "low": "18.68",
                    "close": "18.95",
                    "x": "13",
                    "volume": "1740852"
                },
                {
                    "open": "18.69",
                    "high": "19",
                    "low": "18.35",
                    "close": "18.97",
                    "x": "14",
                    "volume": "2701392"
                },
                {
                    "open": "19.02",
                    "high": "19.1",
                    "low": "18.68",
                    "close": "18.7",
                    "x": "15",
                    "volume": "2198755"
                },
                {
                    "open": "19.29",
                    "high": "19.38",
                    "low": "18.88",
                    "close": "19.05",
                    "x": "16",
                    "volume": "2464958"
                },
                {
                    "open": "18.64",
                    "high": "19.35",
                    "low": "18.53",
                    "close": "19.33",
                    "x": "17",
                    "volume": "2962994"
                },
                {
                    "open": "18.14",
                    "high": "18.58",
                    "low": "18.08",
                    "close": "18.52",
                    "x": "18",
                    "volume": "1964932"
                },
                {
                    "open": "18.49",
                    "high": "18.92",
                    "low": "18.19",
                    "close": "18.26",
                    "x": "19",
                    "volume": "3013102"
                },
                {
                    "open": "18.71",
                    "high": "18.84",
                    "low": "18",
                    "close": "18.51",
                    "x": "20",
                    "volume": "4435894"
                },
                {
                    "open": "19.17",
                    "high": "19.35",
                    "low": "18.61",
                    "close": "18.66",
                    "x": "21",
                    "volume": "3245851"
                },
                {
                    "open": "19.12",
                    "high": "19.41",
                    "low": "18.92",
                    "close": "19.2",
                    "x": "22",
                    "volume": "2259792"
                },
                {
                    "open": "19.43",
                    "high": "19.58",
                    "low": "19.16",
                    "close": "19.33",
                    "x": "23",
                    "volume": "3531327"
                },
                {
                    "open": "19.72",
                    "high": "19.81",
                    "low": "19.04",
                    "close": "19.27",
                    "x": "24",
                    "volume": "5834733"
                },
                {
                    "open": "19.7",
                    "high": "19.94",
                    "low": "19.49",
                    "close": "19.77",
                    "x": "25",
                    "volume": "2009987"
                },
                {
                    "open": "19.84",
                    "high": "19.98",
                    "low": "19.39",
                    "close": "19.88",
                    "x": "26",
                    "volume": "2767592"
                },
                {
                    "open": "20.71",
                    "high": "20.73",
                    "low": "19.16",
                    "close": "19.63",
                    "x": "27",
                    "volume": "673358"
                },
                {
                    "open": "21.14",
                    "high": "21.14",
                    "low": "20.55",
                    "close": "20.65",
                    "x": "28",
                    "volume": "3164006"
                },
                {
                    "open": "21.5",
                    "high": "21.86",
                    "low": "21.2",
                    "close": "21.33",
                    "x": "29",
                    "volume": "7986466"
                },
                {
                    "open": "20.45",
                    "high": "21.08",
                    "low": "20.1",
                    "close": "20.56",
                    "x": "30",
                    "volume": "5813040"
                },
                {
                    "open": "20.07",
                    "high": "20.69",
                    "low": "20.04",
                    "close": "20.36",
                    "x": "31",
                    "volume": "3440002"
                },
                {
                    "open": "19.88",
                    "high": "20.11",
                    "low": "19.51",
                    "close": "20.03",
                    "x": "32",
                    "volume": "2779171"
                },
                {
                    "open": "19.76",
                    "high": "20.13",
                    "low": "19.65",
                    "close": "19.88",
                    "x": "33",
                    "volume": "2918115"
                },
                {
                    "open": "19.77",
                    "high": "19.97",
                    "low": "19.27",
                    "close": "19.9",
                    "x": "34",
                    "volume": "3850357"
                },
                {
                    "open": "19.43",
                    "high": "19.72",
                    "low": "18.88",
                    "close": "19.5",
                    "x": "35",
                    "volume": "5047378"
                },
                {
                    "open": "19.69",
                    "high": "19.84",
                    "low": "19.17",
                    "close": "19.43",
                    "x": "36",
                    "volume": "3479017"
                },
                {
                    "open": "19.59",
                    "high": "20.02",
                    "low": "19.02",
                    "close": "19.41",
                    "x": "37",
                    "volume": "5749874"
                },
                {
                    "open": "20.95",
                    "high": "21.09",
                    "low": "19.64",
                    "close": "19.83",
                    "x": "38",
                    "volume": "6319111"
                },
                {
                    "open": "20.52",
                    "high": "21.03",
                    "low": "20.45",
                    "close": "21",
                    "x": "39",
                    "volume": "4412413"
                },
                {
                    "open": "20.36",
                    "high": "20.96",
                    "low": "20.2",
                    "close": "20.44",
                    "x": "40",
                    "volume": "5948318"
                },
                {
                    "open": "21.45",
                    "high": "21.48",
                    "low": "19.63",
                    "close": "20.3",
                    "x": "41",
                    "volume": "11935440"
                },
                {
                    "open": "23.49",
                    "high": "23.57",
                    "low": "21.12",
                    "close": "21.63",
                    "x": "42",
                    "volume": "10523910"
                },
                {
                    "open": "24.04",
                    "high": "24.21",
                    "low": "23.04",
                    "close": "23.28",
                    "x": "43",
                    "volume": "3843797"
                },
                {
                    "open": "23.6",
                    "high": "24.065",
                    "low": "23.51",
                    "close": "23.94",
                    "x": "44",
                    "volume": "3691404"
                },
                {
                    "open": "22.87",
                    "high": "23.49",
                    "low": "22.86",
                    "close": "23.48",
                    "x": "45",
                    "volume": "3387393"
                },
                {
                    "open": "22.35",
                    "high": "22.89",
                    "low": "22.35",
                    "close": "22.74",
                    "x": "46",
                    "volume": "3737330"
                },
                {
                    "open": "22.11",
                    "high": "22.5",
                    "low": "21.9",
                    "close": "22.24",
                    "x": "47",
                    "volume": "4630397"
                },
                {
                    "open": "22.58",
                    "high": "22.80",
                    "low": "22.25",
                    "close": "22.42",
                    "x": "48",
                    "volume": "3024711"
                },
                {
                    "open": "23.54",
                    "high": "23.76",
                    "low": "22.6",
                    "close": "22.68",
                    "x": "49",
                    "volume": "3984508"
                },
                {
                    "open": "23.66",
                    "high": "24.09",
                    "low": "23.09",
                    "close": "23.46",
                    "x": "50",
                    "volume": "3420204"
                },
                {
                    "open": "24.36",
                    "high": "24.42",
                    "low": "22.90",
                    "close": "23.6",
                    "x": "51",
                    "volume": "5151096"
                },
                {
                    "open": "24.34",
                    "high": "24.6",
                    "low": "23.73",
                    "close": "24.15",
                    "x": "52",
                    "volume": "5999654"
                },
                {
                    "open": "23.38",
                    "high": "24.8",
                    "low": "23.36",
                    "close": "24.1",
                    "x": "53",
                    "volume": "5382049"
                },
                {
                    "open": "23.76",
                    "high": "23.84",
                    "low": "23.23",
                    "close": "23.47",
                    "x": "54",
                    "volume": "3508510"
                },
                {
                    "open": "23.64",
                    "high": "23.94",
                    "low": "23.48",
                    "close": "23.76",
                    "x": "55",
                    "volume": "2718428"
                },
                {
                    "open": "23.99",
                    "high": "24.18",
                    "low": "23.59",
                    "close": "23.66",
                    "x": "56",
                    "volume": "2859391"
                },
                {
                    "open": "23.32",
                    "high": "24.26",
                    "low": "23.32",
                    "close": "23.79",
                    "x": "57",
                    "volume": "4138618"
                },
                {
                    "open": "24.08",
                    "high": "24.4",
                    "low": "23.26",
                    "close": "23.39",
                    "x": "58",
                    "volume": "4477478"
                },
                {
                    "open": "22.84",
                    "high": "23.96",
                    "low": "22.83",
                    "close": "23.88",
                    "x": "59",
                    "volume": "4822378"
                },
                {
                    "open": "23.38",
                    "high": "23.78",
                    "low": "22.94",
                    "close": "23.01",
                    "x": "60",
                    "volume": "4037312"
                },
                {
                    "open": "23.97",
                    "high": "23.99",
                    "low": "23.14",
                    "close": "23.32",
                    "x": "61",
                    "volume": "4879546"
                }
            ]
        }
    ]
}

chart_input["candlestick"] = {
};
// dragnode
chart_json["dragnode"] = {
    "chart": {
        "caption": "Project Plan for Construction of a Store (time duration in weeks)",
        "arrowatstart": "0",
        "arrowatend": "1",
        "viewMode": "1",
        "connectorToolText": "$label Weeks",
        "theme": "fusion"
    },
    "dataset": [
        {
            "id": "1",
            "seriesname": "DS1",
            "data": [
                {
                    "id": "2",
                    "x": "15",
                    "y": "56",
                    "name": "A",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "A. Excavate"
                },
                {
                    "id": "3",
                    "x": "28",
                    "y": "56",
                    "name": "B",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "B. Foundation"
                },
                {
                    "id": "4",
                    "x": "42",
                    "y": "56",
                    "name": "C",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "C. Rough Wall"
                },
                {
                    "id": "5",
                    "x": "45",
                    "y": "28",
                    "name": "D",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "D. Roof"
                },
                {
                    "id": "6",
                    "x": "56",
                    "y": "56",
                    "name": "E",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "E. Exterior Plumbing"
                },
                {
                    "id": "7",
                    "x": "64",
                    "y": "71",
                    "name": "F",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "F. Interior Plumbing"
                },
                {
                    "id": "8",
                    "x": "59",
                    "y": "28",
                    "name": "G",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "G. Exterior Siding"
                },
                {
                    "id": "9",
                    "x": "70",
                    "y": "28",
                    "name": "H",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "H. Exterior Painting"
                },
                {
                    "id": "10",
                    "x": "82",
                    "y": "40",
                    "name": "M",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "M. Exterior Fixtures"
                },
                {
                    "id": "11",
                    "x": "44",
                    "y": "81",
                    "name": "I",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "I. Electrical Work"
                },
                {
                    "id": "12",
                    "x": "70",
                    "y": "82",
                    "name": "J",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "J. Wallboard"
                },
                {
                    "id": "13",
                    "x": "79",
                    "y": "94",
                    "name": "L",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "L. Interior Painting"
                },
                {
                    "id": "14",
                    "x": "87",
                    "y": "82",
                    "name": "N",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "N. Interior Fixtures"
                },
                {
                    "id": "15",
                    "x": "80",
                    "y": "70",
                    "name": "K",
                    "radius": "20",
                    "shape": "CIRCLE",
                    "tooltext": "K. Flooring"
                },
                {
                    "id": "1",
                    "x": "4",
                    "y": "57",
                    "name": "Start",
                    "height": "15",
                    "width": "40",
                    "shape": "RECTANGLE",
                    "tooltext": "Start of Construction"
                },
                {
                    "id": "16",
                    "x": "95",
                    "y": "59",
                    "name": "Finish",
                    "height": "15",
                    "width": "40",
                    "shape": "RECTANGLE",
                    "tooltext": "End Of Construction"
                }
            ]
        }
    ],
    "connectors": [
        {
            "stdthickness": "2",
            "connector": [
                {
                    "from": "2",
                    "to": "3",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "3",
                    "to": "4",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "10"
                },
                {
                    "from": "4",
                    "to": "5",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "6"
                },
                {
                    "from": "4",
                    "to": "6",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "4",
                    "to": "11",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "7"
                },
                {
                    "from": "5",
                    "to": "8",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "7"
                },
                {
                    "from": "6",
                    "to": "9",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "9"
                },
                {
                    "from": "9",
                    "to": "10",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "2"
                },
                {
                    "from": "6",
                    "to": "7",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "5"
                },
                {
                    "from": "11",
                    "to": "12",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "8"
                },
                {
                    "from": "7",
                    "to": "12",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "12",
                    "to": "13",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "5"
                },
                {
                    "from": "12",
                    "to": "15",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "4"
                },
                {
                    "from": "13",
                    "to": "14",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "6"
                },
                {
                    "from": "15",
                    "to": "14",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "1",
                    "to": "2",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": "2"
                },
                {
                    "from": "8",
                    "to": "9",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "14",
                    "to": "16",
                    "color": "#1aaf5d",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                },
                {
                    "from": "10",
                    "to": "16",
                    "color": "#f2c500",
                    "strength": "1",
                    "arrowatstart": "0",
                    "alpha": "100",
                    "label": ""
                }
            ]
        }
    ],
    "annotations": {
        "origw": "400",
        "origh": "300",
        "autoscale": "1",
        "groups": [
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 54",
                "items": [
                    {
                        "id": "anno-A",
                        "type": "text",
                        "label": "A. Excavate",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-B",
                        "type": "text",
                        "label": "B. Foundation",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-C",
                        "type": "text",
                        "label": "C. Rough Wall",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-D",
                        "type": "text",
                        "label": "D. Roof",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 42",
                "items": [
                    {
                        "id": "anno-E",
                        "type": "text",
                        "label": "E. Exterior Plumbing",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-F",
                        "type": "text",
                        "label": "F. Interior Plumbing",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-G",
                        "type": "text",
                        "label": "G. Exterior Siding",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-H",
                        "type": "text",
                        "label": "H. Exterior Painting",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 30",
                "items": [
                    {
                        "id": "anno-I",
                        "type": "text",
                        "label": "I. Electrical Work",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-J",
                        "type": "text",
                        "label": "J. Wallboard",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    },
                    {
                        "id": "anno-K",
                        "type": "text",
                        "label": "K. Flooring",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 224"
                    },
                    {
                        "id": "anno-L",
                        "type": "text",
                        "label": "L. Interior Painting",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 315"
                    }
                ]
            },
            {
                "color": "#0075c2",
                "fontSize": "12",
                "y": "$chartEndY - $chartBottomMargin - 18",
                "items": [
                    {
                        "id": "anno-M",
                        "type": "text",
                        "label": "M. Exterior Fixtures",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 24"
                    },
                    {
                        "id": "anno-N",
                        "type": "text",
                        "label": "N. Interior Fixtures",
                        "align": "Left",
                        "verticalAlign": "top",
                        "bold": "1",
                        "x": "$chartStartX + $chartLeftMargin + 124"
                    }
                ]
            }
        ]
    }
}

chart_input["dragnode"] = {
};
// msstepLine
chart_json["msstepLine"] = {
    "chart": {
        "caption": "Revenue Vs Expense",
        "subCaption": "Last year",
        "xaxisname": "Month",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "useforwardsteps": "0",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Jan"
                },
                {
                    "label": "Feb"
                },
                {
                    "label": "Mar"
                },
                {
                    "label": "Apr"
                },
                {
                    "label": "May"
                },
                {
                    "label": "Jun"
                },
                {
                    "label": "Jul"
                },
                {
                    "label": "Aug"
                },
                {
                    "label": "Sep"
                },
                {
                    "label": "Oct"
                },
                {
                    "label": "Nov"
                },
                {
                    "label": "Dec"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Revenue",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [
                {
                    "value": "374000"
                },
                {
                    "value": "350000"
                },
                {
                    "value": "380000"
                },
                {
                    "value": "340000"
                },
                {
                    "value": "398000"
                },
                {
                    "value": "326000"
                },
                {
                    "value": "448000"
                },
                {
                    "value": "379000"
                },
                {
                    "value": "355000"
                },
                {
                    "value": "374000"
                },
                {
                    "value": "348000"
                },
                {
                    "value": "402000"
                }
            ]
        },
        {
            "seriesname": "Expense",
            "linethickness": "3",
            "anchorradius": "3",
            "data": [
                {
                    "value": "100000"
                },
                {
                    "value": "115000"
                },
                {
                    "value": "135000"
                },
                {
                    "value": "150000"
                },
                {
                    "value": "110000"
                },
                {
                    "value": "98000"
                },
                {
                    "value": "118000"
                },
                {
                    "value": "197000"
                },
                {
                    "value": "228000"
                },
                {
                    "value": "249000"
                },
                {
                    "value": "229000"
                },
                {
                    "value": "208000"
                }
            ]
        }
    ]
}

chart_input["msstepLine"] = {
};
// multiaxisline
chart_json["multiaxisline"] = {
    "chart": {
        "caption": "CPU Usage",
        "subcaption": "(Last 10 Hours)",
        "xaxisname": "Time",
        "numvdivlines": "4",
        "vdivlinealpha": "0",
        "alternatevgridalpha": "5",
        "labeldisplay": "ROTATE",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "10:00"
                },
                {
                    "label": "11:00"
                },
                {
                    "label": "12:00"
                },
                {
                    "label": "13:00"
                },
                {
                    "label": "14:00"
                },
                {
                    "label": "15:00"
                },
                {
                    "label": "16:00"
                },
                {
                    "label": "17:00"
                },
                {
                    "label": "18:00"
                },
                {
                    "label": "19:00"
                }
            ]
        }
    ],
    "axis": [
        {
            "title": "CPU Usage",
            "tickwidth": "10",
            "divlineDashed": "1",
            "numbersuffix": "%",
            "dataset": [
                {
                    "seriesname": "CPU 1",
                    "linethickness": "3",
                    "color": "CC0000",
                    "data": [
                        {
                            "value": "16"
                        },
                        {
                            "value": "19"
                        },
                        {
                            "value": "16"
                        },
                        {
                            "value": "17"
                        },
                        {
                            "value": "23"
                        },
                        {
                            "value": "23"
                        },
                        {
                            "value": "15"
                        },
                        {
                            "value": "14"
                        },
                        {
                            "value": "19"
                        },
                        {
                            "value": "21"
                        }
                    ]
                },
                {
                    "seriesname": "CPU 2",
                    "linethickness": "3",
                    "color": "0372AB",
                    "data": [
                        {
                            "value": "12"
                        },
                        {
                            "value": "12"
                        },
                        {
                            "value": "9"
                        },
                        {
                            "value": "9"
                        },
                        {
                            "value": "11"
                        },
                        {
                            "value": "13"
                        },
                        {
                            "value": "16"
                        },
                        {
                            "value": "14"
                        },
                        {
                            "value": "16"
                        },
                        {
                            "value": "11"
                        }
                    ]
                }
            ]
        },
        {
            "title": "PF Usage",
            "axisonleft": "0",
            "numdivlines": "4",
            "tickwidth": "10",
            "divlineDashed": "1",
            "formatnumberscale": "1",
            "defaultnumberscale": " MB",
            "numberscaleunit": "GB",
            "numberscalevalue": "1024",
            "dataset": [
                {
                    "seriesname": "PF Usage",
                    "data": [
                        {
                            "value": "696"
                        },
                        {
                            "value": "711"
                        },
                        {
                            "value": "636"
                        },
                        {
                            "value": "671"
                        },
                        {
                            "value": "1293"
                        },
                        {
                            "value": "789"
                        },
                        {
                            "value": "793"
                        },
                        {
                            "value": "993"
                        },
                        {
                            "value": "657"
                        },
                        {
                            "value": "693"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Processes",
            "axisonleft": "0",
            "numdivlines": "5",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [
                {
                    "seriesname": "Processes",
                    "data": [
                        {
                            "value": "543"
                        },
                        {
                            "value": "511"
                        },
                        {
                            "value": "536"
                        },
                        {
                            "value": "449"
                        },
                        {
                            "value": "668"
                        },
                        {
                            "value": "588"
                        },
                        {
                            "value": "511"
                        },
                        {
                            "value": "536"
                        },
                        {
                            "value": "449"
                        },
                        {
                            "value": "668"
                        }
                    ]
                }
            ]
        }
    ]
}

chart_input["multiaxisline"] = {
};
// multilevelpie
chart_json["multilevelpie"] = {
    "chart": {
        "caption": "Split of Top Products Sold",
        "subCaption": "Last Quarter",
        "basefontsize": "9",
        "pieFillAlpha": "60",
        "pieBorderThickness": "2",
        "hoverFillColor": "#cccccc",
        "pieBorderColor": "#ffffff",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "plotTooltext": "$label, $$valueK, $percentValue",
        "theme": "fusion"
    },
    "category": [
        {
            "label": "Sales by category",
            "color": "#ffffff",
            "value": "150",
            "category": [
                {
                    "label": "Food & {br}Beverages",
                    "color": "#f8bd19",
                    "value": "55.5",
                    "category": [
                        {
                            "label": "Breads",
                            "color": "#f8bd19",
                            "value": "11.1"
                        },
                        {
                            "label": "Juice",
                            "color": "#f8bd19",
                            "value": "27.75"
                        },
                        {
                            "label": "Noodles",
                            "color": "#f8bd19",
                            "value": "9.99"
                        },
                        {
                            "label": "Seafood",
                            "color": "#f8bd19",
                            "value": "6.66"
                        }
                    ]
                },
                {
                    "label": "Apparel &{br}Accessories",
                    "color": "#e44a00",
                    "value": "42",
                    "category": [
                        {
                            "label": "Sun Glasses",
                            "color": "#e44a00",
                            "value": "10.08"
                        },
                        {
                            "label": "Clothing",
                            "color": "#e44a00",
                            "value": "18.9"
                        },
                        {
                            "label": "Handbags",
                            "color": "#e44a00",
                            "value": "6.3"
                        },
                        {
                            "label": "Shoes",
                            "color": "#e44a00",
                            "value": "6.72"
                        }
                    ]
                },
                {
                    "label": "Baby {br}Products",
                    "color": "#008ee4",
                    "value": "22.5",
                    "category": [
                        {
                            "label": "Bath &{br}Grooming",
                            "color": "#008ee4",
                            "value": "9.45"
                        },
                        {
                            "label": "Feeding",
                            "color": "#008ee4",
                            "value": "6.3"
                        },
                        {
                            "label": "Diapers",
                            "color": "#008ee4",
                            "value": "6.75"
                        }
                    ]
                },
                {
                    "label": "Electronics",
                    "color": "#33bdda",
                    "value": "30",
                    "category": [
                        {
                            "label": "Laptops",
                            "color": "#33bdda",
                            "value": "8.1"
                        },
                        {
                            "label": "Televisions",
                            "color": "#33bdda",
                            "value": "10.5"
                        },
                        {
                            "label": "SmartPhones",
                            "color": "#33bdda",
                            "value": "11.4"
                        }
                    ]
                }
            ]
        }
    ]
}

chart_input["multilevelpie"] = {
};
// selectscatter
chart_json["selectscatter"] = {
    "chart": {
        "caption": "Products Sold vs Price points",
        "subcaption": "This Week at Harry's SuperMart",
        "yaxisname": "Quantity Sold",
        "xaxisname": "Price(In US $)",
        "xaxismaxvalue": "1000",
        "xaxisminvalue": "100",
        "yaxismaxvalue": "200",
        "xnumberprefix": "$",
        "ynumbersuffix": " units",
        "showcanvasborder": "1",
        "canvasborderthickness": "0.5",
        "canvasborderalpha": "50",
        "theme": "fusion"
    },
    "categories": [
        {
            "verticallinecolor": "666666",
            "verticallinethickness": "1",
            "alpha": "40",
            "category": [
                {
                    "label": "$100",
                    "x": "100",
                    "showverticalline": "0"
                },
                {
                    "label": "$200",
                    "x": "200",
                    "showverticalline": "1"
                },
                {
                    "label": "$300",
                    "x": "300",
                    "showverticalline": "1"
                },
                {
                    "label": "$400",
                    "x": "400",
                    "showverticalline": "1"
                },
                {
                    "label": "$500",
                    "x": "500",
                    "showverticalline": "1"
                },
                {
                    "label": "$600",
                    "x": "600",
                    "showverticalline": "1"
                },
                {
                    "label": "$700",
                    "x": "700",
                    "showverticalline": "1"
                },
                {
                    "label": "$800",
                    "x": "800",
                    "showverticalline": "1"
                },
                {
                    "label": "$900",
                    "x": "900",
                    "showverticalline": "1"
                },
                {
                    "label": "$1000",
                    "x": "1000",
                    "showverticalline": "0"
                }
            ]
        }
    ],
    "dataset": [
        {
            "drawline": "0",
            "seriesname": "Televisions",
            "color": "#6baa01",
            "anchorsides": "3",
            "anchorradius": "4",
            "anchorbgcolor": "#6baa01",
            "anchorbordercolor": "#6baa01",
            "data": [
                {
                    "id": "TV_1",
                    "y": "559",
                    "x": "714"
                },
                {
                    "id": "TV_2",
                    "y": "293",
                    "x": "988"
                },
                {
                    "id": "TV_3",
                    "y": "231",
                    "x": "970"
                },
                {
                    "id": "TV_4",
                    "y": "528",
                    "x": "142"
                },
                {
                    "id": "TV_5",
                    "y": "95",
                    "x": "800"
                },
                {
                    "id": "TV_6",
                    "y": "515",
                    "x": "813"
                },
                {
                    "id": "TV_7",
                    "y": "444",
                    "x": "928"
                },
                {
                    "id": "TV_8",
                    "y": "592",
                    "x": "238"
                },
                {
                    "id": "TV_9",
                    "y": "229",
                    "x": "959"
                },
                {
                    "id": "TV_10",
                    "y": "238",
                    "x": "521"
                },
                {
                    "id": "TV_11",
                    "y": "285",
                    "x": "222"
                },
                {
                    "id": "TV_12",
                    "y": "524",
                    "x": "863"
                },
                {
                    "id": "TV_13",
                    "y": "422",
                    "x": "820"
                },
                {
                    "id": "TV_14",
                    "y": "344",
                    "x": "894"
                },
                {
                    "id": "TV_15",
                    "y": "510",
                    "x": "800"
                },
                {
                    "id": "TV_16",
                    "y": "132",
                    "x": "785"
                },
                {
                    "id": "TV_17",
                    "y": "381",
                    "x": "214"
                },
                {
                    "id": "TV_18",
                    "y": "210",
                    "x": "961"
                },
                {
                    "id": "TV_19",
                    "y": "496",
                    "x": "575"
                },
                {
                    "id": "TV_20",
                    "y": "330",
                    "x": "847"
                },
                {
                    "id": "TV_21",
                    "y": "436",
                    "x": "893"
                },
                {
                    "id": "TV_22",
                    "y": "406",
                    "x": "157"
                },
                {
                    "id": "TV_23",
                    "y": "125",
                    "x": "349"
                },
                {
                    "id": "TV_24",
                    "y": "450",
                    "x": "818"
                },
                {
                    "id": "TV_25",
                    "y": "455",
                    "x": "615"
                },
                {
                    "id": "TV_26",
                    "y": "328",
                    "x": "256"
                },
                {
                    "id": "TV_27",
                    "y": "188",
                    "x": "460"
                },
                {
                    "id": "TV_28",
                    "y": "565",
                    "x": "350"
                },
                {
                    "id": "TV_29",
                    "y": "149",
                    "x": "582"
                },
                {
                    "id": "TV_30",
                    "y": "425",
                    "x": "970"
                }
            ]
        },
        {
            "seriesname": "Cell Phones",
            "color": "#f8bd19",
            "anchorsides": "4",
            "anchorradius": "4",
            "anchorbgcolor": "#f8bd19",
            "anchorbordercolor": "#f8bd19",
            "data": [
                {
                    "id": "Mob_1",
                    "y": "335",
                    "x": "156"
                },
                {
                    "id": "Mob_2",
                    "y": "339",
                    "x": "927"
                },
                {
                    "id": "Mob_3",
                    "y": "328",
                    "x": "847"
                },
                {
                    "id": "Mob_4",
                    "y": "1",
                    "x": "177"
                },
                {
                    "id": "Mob_5",
                    "y": "246",
                    "x": "175"
                },
                {
                    "id": "Mob_6",
                    "y": "368",
                    "x": "441"
                },
                {
                    "id": "Mob_7",
                    "y": "146",
                    "x": "200"
                },
                {
                    "id": "Mob_8",
                    "y": "347",
                    "x": "482"
                },
                {
                    "id": "Mob_9",
                    "y": "1",
                    "x": "463"
                },
                {
                    "id": "Mob_10",
                    "y": "63",
                    "x": "440"
                },
                {
                    "id": "Mob_11",
                    "y": "77",
                    "x": "211"
                },
                {
                    "id": "Mob_12",
                    "y": "108",
                    "x": "824"
                },
                {
                    "id": "Mob_13",
                    "y": "44",
                    "x": "850"
                },
                {
                    "id": "Mob_14",
                    "y": "77",
                    "x": "712"
                },
                {
                    "id": "Mob_15",
                    "y": "15",
                    "x": "199"
                },
                {
                    "id": "Mob_16",
                    "y": "333",
                    "x": "836"
                },
                {
                    "id": "Mob_17",
                    "y": "31",
                    "x": "482"
                },
                {
                    "id": "Mob_18",
                    "y": "90",
                    "x": "604"
                },
                {
                    "id": "Mob_19",
                    "y": "294",
                    "x": "716"
                },
                {
                    "id": "Mob_20",
                    "y": "241",
                    "x": "870"
                },
                {
                    "id": "Mob_21",
                    "y": "258",
                    "x": "421"
                },
                {
                    "id": "Mob_22",
                    "y": "186",
                    "x": "456"
                },
                {
                    "id": "Mob_23",
                    "y": "255",
                    "x": "327"
                },
                {
                    "id": "Mob_24",
                    "y": "203",
                    "x": "995"
                },
                {
                    "id": "Mob_25",
                    "y": "35",
                    "x": "792"
                }
            ]
        }
    ]
}
chart_input["selectscatter"] = {
};
// waterfall2d
chart_json["waterfall2d"] = {
    "chart": {
        "caption": "Total Profit Calculation",
        "subcaption": "Last month",
        "yAxisname": "Amount (In USD)",
        "numberprefix": "$",
        "connectordashed": "1",
        "sumlabel": "Total {br} Profit",
        "positiveColor": "#6baa01",
        "negativeColor": "#e44a00",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Online sales",
            "value": "420000"
        },
        {
            "label": "Store Sales",
            "value": "710000"
        },
        {
            "label": "Total Sales",
            "issum": "1"
        },
        {
            "label": "Fixed Costs",
            "value": "-250000"
        },
        {
            "label": "Variable Costs",
            "value": "-156000"
        },
        {
            "label": "COGS",
            "value": "-310000"
        },
        {
            "label": "Promotion Costs",
            "value": "-86000"
        },
        {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }
    ]
}

chart_input["waterfall2d"] = {
};
// kagi
chart_json["kagi"] = {
    "chart": {
        "caption": "Stock Price HRYS",
        "subCaption": "Last 2 months",
        "numberPrefix": "$",
        "xAxisName": "Day",
        "yAxisName": "Amount (In USD)",
        "reversalPercentage": "5",
        "rallythickness": "3",
        "declinethickness": "3",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Day 60",
            "value": "18.99"
        },
        {
            "label": "Day 59",
            "value": "18.82"
        },
        {
            "label": "Day 58",
            "value": "18.65"
        },
        {
            "label": "Day 57",
            "value": "19.4"
        },
        {
            "label": "Day 56",
            "value": "19.92"
        },
        {
            "label": "Day 55",
            "value": "20.16"
        },
        {
            "label": "Day 54",
            "value": "20.48"
        },
        {
            "label": "Day 53",
            "value": "20.15"
        },
        {
            "label": "Day 52",
            "value": "20.22"
        },
        {
            "label": "Day 51",
            "value": "19.44"
        },
        {
            "label": "Day 50",
            "value": "19.22"
        },
        {
            "label": "Day 49",
            "value": "19.24"
        },
        {
            "label": "Day 48",
            "value": "18.95"
        },
        {
            "label": "Day 47",
            "value": "18.97"
        },
        {
            "label": "Day 46",
            "value": "18.7"
        },
        {
            "label": "Day 45",
            "value": "19.05"
        },
        {
            "label": "Day 44",
            "value": "19.33"
        },
        {
            "label": "Day 43",
            "value": "18.52"
        },
        {
            "label": "Day 42",
            "value": "18.26"
        },
        {
            "label": "Day 41",
            "value": "18.51"
        },
        {
            "label": "Day 40",
            "value": "18.66"
        },
        {
            "label": "Day 39",
            "value": "19.2"
        },
        {
            "label": "Day 38",
            "value": "19.33"
        },
        {
            "label": "Day 37",
            "value": "19.27"
        },
        {
            "label": "Day 36",
            "value": "19.77"
        },
        {
            "label": "Day 35",
            "value": "19.88"
        },
        {
            "label": "Day 34",
            "value": "19.63"
        },
        {
            "label": "Day 33",
            "value": "20.65"
        },
        {
            "label": "Day 32",
            "value": "21.33"
        },
        {
            "label": "Day 31",
            "value": "20.56"
        },
        {
            "label": "Day 30",
            "value": "20.36"
        },
        {
            "label": "Day 29",
            "value": "20.03"
        },
        {
            "label": "Day 28",
            "value": "19.88"
        },
        {
            "label": "Day 27",
            "value": "19.9"
        },
        {
            "label": "Day 26",
            "value": "19.5"
        },
        {
            "label": "Day 25",
            "value": "19.43"
        },
        {
            "label": "Day 24",
            "value": "19.41"
        },
        {
            "label": "Day 23",
            "value": "19.83"
        },
        {
            "label": "Day 22",
            "value": "21"
        },
        {
            "label": "Day 21",
            "value": "20.44"
        },
        {
            "label": "Day 20",
            "value": "20.3"
        },
        {
            "label": "Day 19",
            "value": "21.63"
        },
        {
            "label": "Day 18",
            "value": "23.28"
        },
        {
            "label": "Day 17",
            "value": "23.94"
        },
        {
            "label": "Day 16",
            "value": "23.48"
        },
        {
            "label": "Day 15",
            "value": "22.74"
        },
        {
            "label": "Day 14",
            "value": "22.24"
        },
        {
            "label": "Day 13",
            "value": "22.42"
        },
        {
            "label": "Day 12",
            "value": "22.68"
        },
        {
            "label": "Day 11",
            "value": "23.46"
        },
        {
            "label": "Day 10",
            "value": "23.6"
        },
        {
            "label": "Day 9",
            "value": "24.15"
        },
        {
            "label": "Day 8",
            "value": "24.1"
        },
        {
            "label": "Day 7",
            "value": "23.47"
        },
        {
            "label": "Day 6",
            "value": "23.76"
        },
        {
            "label": "Day 55",
            "value": "23.66"
        },
        {
            "label": "Day 5",
            "value": "23.79"
        },
        {
            "label": "Day 4",
            "value": "23.39"
        },
        {
            "label": "Day 3",
            "value": "23.88"
        },
        {
            "label": "Day 2",
            "value": "23.01"
        },
        {
            "label": "Yesterday",
            "value": "23.32"
        }
    ]
}

chart_input["kagi"] = {
};