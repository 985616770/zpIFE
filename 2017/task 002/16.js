function my$(ID) {
    return document.getElementById(ID);
}
var city = my$("aqi-city-input");
var valu = my$("aqi-value-input");
var table = my$("aqi-table");
var aqiData = {};


function addAqiData() {
    var citys = city.value.trim();
    var values = valu.value.trim();
    if (!citys.match(/^[A-Za-z\u4e00-\u9fa5]+$/)) {
        alert("输入错误,请输入中文和英文");
        return;
    }
    if (values.match(/^[/d]+$/)) {
        alert("输入错误,请输入数字");
        return;
    }
    aqiData[citys] = values;
}

function renderAqiList() {
    var tr = '<tr>' + '<td>' + '城市' + '</td>' + '<td>' + '空气质量' + '</td>' + '<td>' + '操作' + '</td>' + '</tr>';
    var i = 0;
    for (var x in aqiData) {
        tr += '<tr>' + '<td>' + x + '</td>' + '<td>' + aqiData[x] + '</td>' + '<td>' + "<button onclick='delBtnHandle(\"" + x + "\")'>" + '删除' + '</button>' + '</td>' + '</tr>';
    }
    table.innerHTML = tr;

}


function addBtnHandle() {
    addAqiData();
    renderAqiList();
}


function delBtnHandle(citys) {

    delete aqiData[citys];
    renderAqiList();
}

function init() {
    my$("add-btn").onclick = addBtnHandle;
}

init();