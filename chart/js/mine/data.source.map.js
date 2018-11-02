var default_config = {
    // single_series
    singleConfig: {
        caption: "",
        subCaption: "",
        xAxisName: "",
        yAxisName: "",
        numberPrefix: "$",
        data: {
            label: "ACCOUNTANT", // chart.json
            value: "ORIGINAL_CONTRACT_AMOUNT", // chart.json
        },
        trendlines: [{
            "line": [{
                "startvalue": "700000",
                "valueOnRight": "1",
                "displayvalue": "Monthly Target"
            }]
        }],
        limit: 10
    },
    // multi_series
    multiConfig: {
        caption: "",
        subCaption: "",
        xAxisName: "",
        yAxisName: "Amount (In USD)",
        numberPrefix: "$",
        plotFillAlpha: "80",
        category: "ACCOUNTANT", // chart.json
        dataset: [{
                data: [{
                    key: "value",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }]
            },
            {
                data: [{
                    key: "value",
                    value: "YTD_EXPENDITURES" // chart.json
                }]
            }
        ],
        trendlines: [{
            "line": [{
                    "startvalue": "122500",
                    "color": "#0075c2",
                    "displayvalue": "Previous{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Previous year quarterly target  : $13.5K"
                },
                {
                    "startvalue": "259500",
                    "color": "#1aaf5d",
                    "displayvalue": "Current{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Current year quarterly target  : $23K"
                }
            ]
        }],
        limit: 10
    },
    //stacked
    stackedConfig: {
        caption: "",
        subCaption: "",
        xAxisName: "",
        yAxisName: "Amount (In USD)",
        numberPrefix: "$",
        plotFillAlpha: "80",
        category: "ACCOUNTANT", // chart.json
        dataset: [{
                data: [{
                    key: "value",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }]
            },
            {
                data: [{
                    key: "value",
                    value: "YTD_EXPENDITURES" // chart.json
                }]
            }
        ],
        trendlines: [{
            "line": [{
                    "startvalue": "122500",
                    "color": "#0075c2",
                    "displayvalue": "Previous{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Previous year quarterly target  : $13.5K"
                },
                {
                    "startvalue": "259500",
                    "color": "#1aaf5d",
                    "displayvalue": "Current{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Current year quarterly target  : $23K"
                }
            ]
        }],
        limit: 10
    },
    //combination
    combinedConfig: {
        caption: "",
        subCaption: "",
        xAxisName: "",
        yAxisName: "Amount (In USD)",
        numberPrefix: "$",
        category: "ACCOUNTANT", // chart.json
        dataset: [{
                showValues: "1",
                data: [{
                    key: "value",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }]
            },
            {
                renderAs: "line",
                data: [{
                    key: "value",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }]
            },
            {
                renderAs: "area",
                data: [{
                    key: "value",
                    value: "YTD_EXPENDITURES" // chart.json
                }]
            },
        ],
        limit: 10
    },
    //xy-plot
    xyPlotConfig: {
        caption: "",
        subCaption: "",
        baseFont: "Helvetica Neue,Arial",
        xAxisName: "",
        yAxisName: "Amount (In USD)",
        "xAxisMinValue": "23",
        "xAxisMaxValue": "95",
        "yNumberPrefix": "$",
        "xNumberSuffix": "&deg; F",

        label: "ACCOUNTANT",
        dataset: [{
                showregressionline: "1",
                data: [{
                    key: "x",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }, {
                    key: "y",
                    value: "YTD_EXPENDITURES" // chart.json
                }]
            },
            {
                showregressionline: "1",
                data: [{
                    key: "x",
                    value: "YTD_EXPENDITURES" // chart.json
                }, {
                    key: "y",
                    value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
                }]
            },
        ],
        limit: 10
    },
    //scroll
    scrollConfig: {
        caption: "",
        subCaption: "",
        numberprefix: "$",
        category: "ACCOUNTANT", // chart.json
        "xaxisname": "Month",
        "yaxisname": "Revenue",
        "showvalues": "1",
        "labeldisplay": "WRAP",
        "linethickness": "3",
        "numVisiblePlot": "12",
        "scrollheight": "10",
        "flatScrollBars": "1",
        "scrollShowButtons": "0",
        "scrollColor": "#cccccc",

        label: "ACCOUNTANT",
        dataset: [{
            data: [{
                key: "value",
                value: "ORIGINAL_CONTRACT_AMOUNT" // chart.json
            }]
        }],
        limit: 50
    }
};