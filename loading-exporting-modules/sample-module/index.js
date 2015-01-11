/**
 * Created by deepak.m.shrma@gmail.com on 11/1/15.
 */
console.log('module sample-module initializing...');
function sayHi() {
    console.log('saying hi from module..');
}
module.exports.sayHi = sayHi;
console.log('sample-module initialized.');
