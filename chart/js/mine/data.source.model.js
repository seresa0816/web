var DataSource = function () {
    var main = this;
    var parent = appObj;
    main.dataSource = {};
    main.datacount = parent.data.chart.length;

    main.get = function (type) {
        if (default_limit > 0 && default_limit < main.datacount) main.datacount = default_limit;
        main.dataSource = main.getDataSource(chart_json[type], chart_input[type]);
        return main.dataSource;
    }
    main.getDataSource = function (template, variables, index) {
        let target = {};
        for (var key in template) {
            if (typeof (template[key]) == "object") {
                if (Array.isArray(template[key])) {
                    target[key] = [];
                    if (main.checkMultiArray(template[key])) {
                        target[key] = main.getMultiArrayData(template[key], variables);
                    } else {
                        target[key] = main.getArrayData(template[key], variables);
                    }
                } else {
                    target[key] = main.getDataSource(template[key], variables, index);
                }
            } else {
                target[key] = main.getValue(template[key], variables, index)
            }
        }
        return target;
    };
    main.getArrayData = function (template, variables) {
        let target = [];
        for (var key in template) {
            if (typeof (template[key]) == "object") {
                if (Array.isArray(template[key])) {
                    target[key] = main.getArrayData(template[key], variables);
                } else {
                    target[key] = main.getDataSource(template[key], variables);
                }
            } else {
                target[key] = main.getValue(template[key], variables);
            }
        }
        return target;
    }

    main.checkMultiArray = function (template) {
        try {
            if (!Array.isArray(template)) {
                return false;
            }
            if (typeof (template[0]) == "object") {
                for (var key in template[0]) {
                    valueCheck = /^value\$\{(.*)\}$/;
                    if (typeof(template[0][key]) == "string" && valueCheck.test(template[0][key])) {
                        return true;
                    }
                }
            }
            return false;
        }catch(ex){
            console.log(ex);
            return false;
        }
    }

    main.getMultiArrayData = function (template, variables) {
        let target = [];
        for (index = 0; index < main.datacount; index++) {
            if (typeof (template[0]) == "object") {
                target[index] = main.getDataSource(template[0], variables, index);
            } else {
                target[index] = main.getValue(template[0], variables, index);
            }
        }
        return target;
    }

    main.getValue = function (value, variables, index) {
        valueCheck = /^value\$\{(.*)\}$/;
        labelCheck = /^label\$\{(.*)\}$/;
        if (labelCheck.test(value)) {
            valkey = value.slice(7, value.length - 1);

            val = variables[valkey];
            if (val.value == "") {
                return "";
            }

            if (val.type == "data") {
                return parent.data.config[val.value].caption;
            } else {
                return "";
            }
        } else if (valueCheck.test(value)) {
            valkey = value.slice(7, value.length - 1);

            val = variables[valkey];
            if (val.value == "") {
                return "";
            }
            if (val.type == "data") {
                return parent.data.chart[index][val.value];
            } else {
                return val.value;
            }
        } else {
            return value;
        }
    }
}
