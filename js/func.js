"use strict";
// es5函数声明方式
// 函数声明
// function run (){
// }
// 匿名函数
// var run1 = function(){
// }
// 1、ts声明函数
function runs() {
    return '123';
}
// 匿名函数
var run2 = function () {
    return '123';
};
run2();
console.log(run2());
//2、ts中定义方法入参
function getInfo(name, age) {
    return name + "-----" + age;
}
console.log(getInfo('zhang', 15));
// 3、---方法的可选参数
// es5实参形参可以不一样  ts中必须一样  如果不一样要配置可选参数(用？配置)
// 可选参数必须放在参数最后面
function getInfo1(name, age) {
    if (age) {
        return name + "-----" + age;
    }
    else {
        return name + "-----";
    }
}
console.log(getInfo1('zhang'));
//4、 ----默认参数  es5和ts都可以哟默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "-----" + age;
    }
    else {
        return name + "-----";
    }
}
console.log(getInfo2('zhang', 30));
// 5、剩余参数
function sum(name, age) {
    if (age === void 0) { age = 20; }
    return name + age;
}
console.log(sum(20, 30));
// 三点运算符  接受剩余新参传过来的值
function sum1(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum1(20, 30));
function getInfo3(str) {
    if (typeof str === 'string') {
        return '我的名字' + str;
    }
    else {
        return '我的年龄' + str;
    }
}
console.log(getInfo3(20));
