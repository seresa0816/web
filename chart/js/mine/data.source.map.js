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

// 