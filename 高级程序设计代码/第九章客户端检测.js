/*
 * @Author: xuanjidd 
 * @Date: 2018-07-18 16:08:26 
 * @Last Modified by: xaunjidd
 * @Last Modified time: 2018-07-18 17:13:38
 * 第九章 客户端检测
 * 
 */

//9.1 能力检测( 兼容代码)

//获取元素ID的兼容代码
function getElement(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) { //ie
        return document.all[id];
    } else {
        throw new Error("NO way TO RETRIEVE ELEMENT!")
    }
}

//9.1.1更靠谱的能力检测

function isHostMethod(object, property) {
    var t = typeof object[property];
    return t == 'function' || (!!(t == 'object' && object[property])) || t == 'unknown';
}

//9.2 怪癖检测(BUG)
var hasDontEnumQuirk = function () {
    var o = {
        toString: function () {}
    };
    for (var prop in o) {
        if (prop == "toString") {
            return false;
        }
    }
    return true;
}(); //

var hasDontEnumQuirk = function () {
    var o = {
        toString: function () {}
    };
    var count = 0;
    for (var prop in o) {
        if (prop == "toString") {
            count++;
        }
    }
    return (count > 1);
}();//Safari 