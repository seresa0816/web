$(document).ready(function() {
    jsonReader = new JsonReader();
    jsonReader.init();
});

function JsonReader() {
    var main = this;
    main.config_name = "config.json";
    main.chart_name = "chart.json";
    main.config = {};
    main.chart = {};
    main.init = function() {
        main.readConfigFile();
        main.readChartFile();
    }
    main.readConfigFile = function() {
        $.ajax({
            url: "data /" + main.config_name,
            dataType: "json",
            success: function(data) {
                main.config = data;
            }
        });
    }
    main.readChartFile = function() {
        $.ajax({
            url: "data /" + main.chart_name,
            dataType: "json",
            success: function(data) {
                main.chart = data;
                console.log(main.chart);

            }
        });
    }
}