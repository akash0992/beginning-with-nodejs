/**
 * Created by deepak.m.shrma@gmail.com on 11/1/15.
 */
// Node loading module

/*
 Loading a module:
 In node you can load module either using the path to the module or giving name  of the module. require keyword is used to load  module in node. Its look for the file in given path to load module if the require module is not core node module. You can install third party module using NPM(Node Package Manger). It downloads from the global repository to your local machine.
 */
/**
 *
 * @type {import}
 */
var module = require('./multiple-properties');


var myModule2 = require('./multiple-properties');
myModule2.fun1(); // -> this is func 1
myModule2.fun2(); // -> this is func 2
console.log(myModule2.val); // -> some_value

/*
 Loading a core module:
 Node has several modules with its binary distribution. You can load those module by its name. You dont have to specify the path for it.
 For example, If you want to load node’s core http module. You can do that by
 */


var http = require('http');

if (http)
    console.log('http module has been loaded.. :-)');

//var myModule = require('/home/deepak/my_modules/my_module');

/*Or you can provide a path relative to the current file:*/
//var myModule = require('../my_modules/my_module');
//var myModule2 = require('./lib/my_module_2');

var sample = require('./sample-module')
var sample2 = require('/home/intelligrape/projects/angularjs-tabs-and-lazy-data-loading/beginning-with-nodejs/loading-exporting-modules/sample-module')
if (sample)
    console.log('sample module has been loaded.. :-)');

//var myModule = require('sample-module.js');

var buggyModule = require('./buggy-module.js')
buggyModule.sayHi();
