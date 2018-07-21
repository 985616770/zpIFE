/*
 * @Author: xuanjidd 
 * @Date: 2018-07-20 08:50:10 
 * @Last Modified by: xaunjidd
 * @Last Modified time: 2018-07-21 16:16:15
 * 
 *第十章Dom
 */

//10.1 节点层次
//NODE类型 节点关系
var firstChild = someNode.childNodes[0]; //方括号
var secondChild = someNode.childNodes.item(1); //item
var count = someNode.childNodes.length; //length 类数组

//转换类数组为数组

var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);

function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //针对非IE浏览器
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

if (someNode.nextSibling === null) {
    alert("Last node in the parent's childNodes list.");
} else if (someNode.previousSilbling === null) {
    alert("First node in the parent's childNodes list.");
}
//10.1.2 document
//外部html
//10.1.3 element
if (Element.tagName.toLowerCase() == "div") { //适合各种文档 

}

//attributes
function outputAttributes(element) {
    var paires = new Array(),
        attrName,
        attrValue,
        i,
        len;
    for (i = 0, len = element.attributes.length; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        paires.push(attrName + "+\"" + attrValue + "\"");
    }
    return paires.join(" ");
}

//创建元素的兼容代码(ie7)
if (client.brower.ie && client.brower.ie <= 7) {
    //创建一个带NAme的特性的iframe元素
    var iframe = document.createElement("<iframe name=\"myName\"></iframe>");
    //创建input元素
    var input = document.createElement("<input type=\"checkbox\">")
    //创建button元素
    var button = document.createElement("<button type =\"reset\">");
    //创建单选按钮
    var radio1 = document.createElement("<input type = \"radio\" name = \"chioce\" value =\"1\" >");
    var radio2 = document.createElement("<input type =\"ridio\" name = \"choice\" value= \"2\" >");
}

//元素的子节点
for (var i = 0, len = element.childNodes.length; i < len; i++) {
    if (element.childNodes[i].nodeType == 1) {
        //执行某些操作
    }
}
var ul = document.getElementById("mylist");
var items = document.getElementsByTagName("li");




//TEXT 类型

//创建文本节点
var element = document.createElement("div");
element.className = "message";

var textNode = document.createTextNode("hello world");
element.appendChild(textNode);
document.body.appendChild(element);