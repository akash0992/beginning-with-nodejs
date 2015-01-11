/**
 * Created by deepak.m.shrma@gmail.com on 11/1/15.
 */
console.log('module buggy-module initializing...');
module.exports = {
    sayHi: function () {
        console.log('i am stupid');
    }
}


exports.sayHi = function () {
    console.log('hi');
}
console.log('buggy-module initialized.');
