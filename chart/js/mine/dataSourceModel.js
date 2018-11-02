var DataSourceModel = function() {
    var main = this;
    var parent = appObj;
    main.dataSource = {};
    main.getDataSource = function(type, config) {
        // if (true) {
        //     return dataSource;
        // }

        main.dataSource["chart"] = {
            caption: (config.caption == "") ? parent.chart.subTypes[type].supeTitle : config.caption,
            subCaption: (config.subCaption == "") ? parent.chart.subTypes[type].title : config.subCaption,
            theme: "fusion"
        };

        // optional =>start
        if (config.xAxisName) main.dataSource["chart"].xAxisName = config.xAxisName;
        if (config.yAxisName) main.dataSource["chart"].yAxisName = config.yAxisName;
        if (config.numberPrefix) main.dataSource["chart"].numberPrefix = config.numberPrefix;
        if (config.xNumberSuffix) main.dataSource["chart"].xNumberSuffix = config.xNumberSuffix;
        if (config.yNumberPrefix) main.dataSource["chart"].yNumberPrefix = config.yNumberPrefix;
        if (config.plotFillAlpha) main.dataSource["chart"].plotFillAlpha = config.plotFillAlpha;
        if (config.baseFont) main.dataSource["chart"].baseFont = config.baseFont;
        if (config.xAxisMinValue) main.dataSource["chart"].xAxisMinValue = config.xAxisMinValue;
        if (config.showvalues) main.dataSource["chart"].showvalues = config.showvalues;
        if (config.labeldisplay) main.dataSource["chart"].labeldisplay = config.labeldisplay;
        if (config.linethickness) main.dataSource["chart"].linethickness = config.linethickness;
        if (config.numVisiblePlot) main.dataSource["chart"].numVisiblePlot = config.numVisiblePlot;
        if (config.scrollheight) main.dataSource["chart"].scrollheight = config.scrollheight;
        if (config.flatScrollBars) main.dataSource["chart"].flatScrollBars = config.flatScrollBars;
        if (config.scrollShowButtons) main.dataSource["chart"].scrollShowButtons = config.scrollShowButtons;
        if (config.scrollColor) main.dataSource["chart"].scrollColor = config.scrollColor;
        if (config.sYAxisName) main.dataSource["chart"].sYAxisName = config.sYAxisName;
        if (config.sNumberSuffix) main.dataSource["chart"].sNumberSuffix = config.sNumberSuffix;
        if (config.sYAxisMaxValue) main.dataSource["chart"].sYAxisMaxValue = config.sYAxisMaxValue;
        // optional =>end

        length = (config.limit) ? config.limit : parent.data.chart.length();

        // init
        // categories
        if (config.category) {
            if (typeof(config.category) == "string") {
                main.dataSource.categories = [{ category: [] }];
                category = [];
                for (var i = 0; i < length; i++) {
                    element = parent.data.chart[i];
                    category.push({
                        label: element[config.category]
                    });
                }
                main.dataSource.categories[0].category = category;
            } else {
                if (config.category) main.dataSource.category = config.category;
            }
        }
        // data (IN SINGLE)
        if (config.data) {
            main.dataSource.data = [];
            for (var i = 0; i < length; i++) {
                element = parent.data.chart[i];
                main.dataSource.data.push({
                    "label": element[config.data.label],
                    "value": element[config.data.value]
                });
            }
        }
        // dataset
        if (config.dataset) {
            main.dataSource.dataset = [];
            config.dataset.forEach(item => {
                dataitem = {};
                // optional. =>start
                if (item.seriesName) dataitem.seriesName = item.seriesName;
                if (item.showValues) dataitem.showValues = item.showValues;
                if (item.renderAs) dataitem.renderAs = item.renderAs;
                if (item.showregressionline) dataitem.showregressionline = item.showregressionline;
                // optional. =>end

                if (item.data) {
                    dataitem.data = [];
                    for (var i = 0; i < length; i++) {
                        element = parent.data.chart[i];
                        itemObj = {};
                        item.data.forEach(datasetitem => {
                            itemObj[datasetitem.key] = element[datasetitem.value]
                        });
                        dataitem.data.push(itemObj);
                    }
                }
                main.dataSource.dataset.push(dataitem);
            });
        }
        //

        if (config.trendlines) main.dataSource.trendlines = config.trendlines;
        if (config.vtrendlines) main.dataSource.vtrendlines = config.vtrendlines;
        //
        return main.dataSource;
    }
}

var dataSource = {
    "chart": {
        "caption": "Product-wise break-up of quarterly revenue in last year",
        "subcaption": "Harry's SuperMart",
        "xaxisname": "Quarter",
        "yaxisname": "Sales (In USD)",
        "numberPrefix": "$",
        "numbersuffix": "M",
        "theme": "fusion"
    },
    "categories": [{
        "category": [{
                "label": "Q1"
            },
            {
                "label": "Q2"
            },
            {
                "label": "Q3"
            },
            {
                "label": "Q4"
            }
        ]
    }],
    "dataset": [{
            "dataset": [{
                    "seriesname": "Processed Food",
                    "data": [{
                            "value": "30"
                        },
                        {
                            "value": "26"
                        },
                        {
                            "value": "29"
                        },
                        {
                            "value": "31"
                        }
                    ]
                },
                {
                    "seriesname": "Un-Processed Food",
                    "data": [{
                            "value": "21"
                        },
                        {
                            "value": "28"
                        },
                        {
                            "value": "39"
                        },
                        {
                            "value": "41"
                        }
                    ]
                }
            ]
        },
        {
            "dataset": [{
                    "seriesname": "Electronics",
                    "data": [{
                            "value": "27"
                        },
                        {
                            "value": "25"
                        },
                        {
                            "value": "28"
                        },
                        {
                            "value": "26"
                        }
                    ]
                },
                {
                    "seriesname": "Apparels",
                    "data": [{
                            "value": "17"
                        },
                        {
                            "value": "15"
                        },
                        {
                            "value": "18"
                        },
                        {
                            "value": "16"
                        }
                    ]
                },
                {
                    "seriesname": "Others",
                    "data": [{
                            "value": "12"
                        },
                        {
                            "value": "17"
                        },
                        {
                            "value": "16"
                        },
                        {
                            "value": "15"
                        }
                    ]
                }
            ]
        }
    ]
};