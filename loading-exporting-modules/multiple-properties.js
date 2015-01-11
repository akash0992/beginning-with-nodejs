//multiple-properties.js
/**
 * Created by deepak.m.shrma@gmail.com on 11/1/15.
 */
function fun1() {
    console.log('this is func 1');
}
function fun2() {
    console.log('this is func 2');
}
function fun3() {
    console.log('this is func 3');
}
module.exports.fun1 = fun1;
module.exports.fun2 = fun2;
module.exports.fun3 = fun3;
module.exports.val = 'some_value';
