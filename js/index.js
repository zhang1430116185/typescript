"use strict";
console.log('hello ts');
var str = 'hello world';
// boolean
var flag = true;
console.log(flag);
// string
var str = '123';
console.log(str);
// number
var number = 123;
console.log(number);
// array
// 方法一
var arr = [1, 2]; //es5
var arr1 = [1, 2, 3, 9];
console.log(arr1);
// 方法二
var arr2 = [1, 2, 3];
console.log(arr2);
// 元组类型（tuple）数组类型的一种
var arr3 = [1, '2', '3'];
console.log(arr3);
// 枚举类型（enum）
// enum Flag {success = 1,error = 0};
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
; //没有赋值  默认下标
var s = Flag.success;
console.log(s);
// 任意类型（any）类似es5语法
var num = '123';
num = true;
console.log(num);
// null undefined  其他（never）类型的子类型
var num1;
// 一个元素设置多个类型
// var num2:number| undefined;
console.log(num1); //不加类型报错
// void类型：ts中表示没有任何类型 一般用于定义方法的时候没有返回值
function run() {
    console.log('run');
}
run();
function run1() {
    console.log('run');
    return 12;
}
run1();
// never类型 其他类型 表示从来不会出现的值
// 表明never类型声明的变量只能被never类型所赋值
var un;
un = undefined;
