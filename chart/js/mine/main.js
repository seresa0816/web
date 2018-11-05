var appObj = null;

jQuery(document).ready(function () {
    appObj = new initEnv();
    appObj.init();
});

var initEnv = function () {
    var main = this;

    main.data = null;
    main.chart = null;

    main.init = function () {
        main.chart = new fusionChart();
        main.chart.init();
        main.initData();
        main.initEvent();
    };

    main.initData = function (index) {
        main.data = {
            config: null,
            chart: null
        };
        $.getJSON("config.json", function (data) {
            main.data.config = data;
        });
        $.getJSON("chart.json", function (data) {
            main.data.chart = data;
        });
        main.drawLeftArea();
    };

    main.drawLeftArea = function () {
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

    main.initEvent = function () {
        $("#left_area").on("click", "section h3", function () {
            var active_obj = $("#left_area .active");

            if ($(this).hasClass("disable"))
                return;

            active_obj.animate({ height: "50px" }, 500, function () {
                $(this).removeClass("active");
            });

            $(this).parent().animate({ height: $(this).parent().find("dl").height() + 80 + "px" }, 500, function () {
                $(this).addClass("active");
            })
        });

        $("#left_area").on("click", "dd", function () {
            if (main.showDefaultChart($(this).attr("type"))) {
                $("#left_area").find(".sel:not(.append)").removeClass("sel");
                $(this).addClass("sel");
            } else {
                alert("dataSource is not ready.");
            }
        });
    }
    main.showDefaultChart = function (type) {
        try {
            return main.showChart(type);
        } catch (ex) {
            console.log(ex);
            return false;
        }
    }
    main.showChart = function (type) {
        try {
            dataSource = new DataSource().get(type);
            dataSource = JSON.stringify(dataSource, false, 4);
            console.log(type);
            console.log(dataSource);
            main.chart.showChart(type, dataSource);
        } catch (ex) {
            console.log(ex);
            return false;
        }
        main.resetInputArea(type);
        return true;
    }
    main.resetInputArea = function (type) {
        $("#input_area").html("");
        $("#input_area").attr("type", type);
        var chart_config = chart_input[type];
        for (const key in chart_config) {
            var var_name = key;
            var data_type = chart_config[key].type;
            var var_label = chart_config[key].label;
            var val_type = chart_config[key].val_type;
            var value = chart_config[key].value;
            $input_item = $("<div class='input_item' id='" + var_name + "'></div>");
            $label = $("<div class='label'>" + var_label + "<div>");
            $input_item.append($label);
            $input = $("<div class='input'></div>");
            if (data_type == "data") {
                $select_input = $("<select name='" + var_name + "' datatype='" + data_type + "_" + val_type + "'></select>");
                $option_input = $("<option value=''></option>");
                $select_input.append($option_input);
                for (const confKey in main.data.config) {
                    var subConfig = main.data.config[confKey];
                    if (subConfig.type == val_type) {
                        $option_input = $("<option value='" + confKey + "'>" + subConfig.caption + "</option>");
                        $select_input.append($option_input);
                    }
                }
                $select_input.val(value);
                $input.append($select_input);
            } else {
                $input.append($("<input name='" + var_name + "' value='" + value + "'/>"));
            }
            $input_item.append($input);
            $("#input_area").append($input_item);
        }
        $button_area = $("<div class='button'></div>");
        $button_area.append($("<button id='drawBtn'>Draw</button>"));
        $("#input_area").append($button_area);

        $("#input_area select").change(function () {
            var $sameSel = $("#input_area select[datatype='" + $(this).attr("datatype") + "']");
            for (var i = 0; i < $sameSel.length; i++) {
                if (($($sameSel[i]).attr("name") != $(this).attr("name")) && ($($sameSel[i]).val() == $(this).val())) {
                    $($sameSel[i]).val("");
                }
            }
        });
        $("#drawBtn").click(function () {
            var type = $("#input_area").attr("type");
            var chart_config = chart_input[type];
            var $sels = $("#input_area select, #input_area input");
            for (var i = 0; i < $sels.length; i++) {
                if ($($sels[i]).val() == "") {
                    alert("please fill all the selections.");
                    return false;
                }
                chart_config[$($sels[i]).attr("name")].value = $($sels[i]).val();
            }
            main.showChart(type);
        });
    }
}