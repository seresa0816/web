var appObj = null;

jQuery(document).ready(function() {
    appObj = new initEnv();
    appObj.init();
});

var initEnv = function() {
    var main = this;

    main.data = null;
    main.chart = null;

    main.init = function() {
        main.chart = new fusionChart();
        main.chart.init();
        main.initData();
        main.initEvent();
    };

    main.initData = function(index) {
        main.data = {
            config: null,
            chart: null
        };
        $.getJSON("config.json", function(data) {
            main.data.config = data;
        });
        $.getJSON("chart.json", function(data) {
            main.data.chart = data;
        });
        main.drawLeftArea();
    };

    main.drawLeftArea = function() {
        $leftArea = $("#left_area");
        $leftArea.html("");
        active_flag = false;
        for (var sk in main.chart.superTypes) {
            element = main.chart.superTypes[sk];
            if (active_flag) {
                $section = $("<section class='active'></section>");
                active_flag = false;
            } else {
                $section = $("<section></section>");
            }
            $section.append($("<h3>" + element.title + "</h3>"));
            $chartlist = $("<dl></dl>");
            for (var bk in main.chart.chartType[element.branch].series) {
                subelement = main.chart.chartType[element.branch].series[bk];
                $chart = $("<dd type='" + subelement.type + "'>" + subelement.title + "</dd>");
                $chartlist.append($chart);
            }
            $chartlist.append($('<dd class="clear_both"></dd>'));
            $section.append($chartlist);
            $leftArea.append($section);
        }
    }

    main.initEvent = function() {
        $("#left_area").on("click", "section h3", function() {
            var active_obj = $("#left_area .active");

            if ($(this).hasClass("disable"))
                return;

            active_obj.animate({ height: "50px" }, 500, function() {
                $(this).removeClass("active");
            });

            $(this).parent().animate({ height: $(this).parent().find("dl").height() + 80 + "px" }, 500, function() {
                $(this).addClass("active");
            })
        });

        $("#left_area").on("click", "dd", function() {
            if (main.showDefaultChart($(this).attr("type"))) {
                $("#left_area").find(".sel:not(.append)").removeClass("sel");
                $(this).addClass("sel");
            } else {
                alert("dataSource is not ready.");
            }
        });
    }
    main.showDefaultChart = function(type) {
        try {
            return main.showChart(type, main.chart.subTypes[type].defaultConfig);
        } catch (ex) {
            console.log(ex);
            return false;
        }
    }
    main.showChart = function(type, config) {
        try {
            dataSource = new DataSourceModel().getDataSource(type, config);
            dataSource = JSON.stringify(dataSource, false, 4);
            console.log(dataSource);
            main.chart.showChart(type, dataSource);
        } catch (ex) {
            console.log(ex);
            return false;
        }
        return true;
    }
}