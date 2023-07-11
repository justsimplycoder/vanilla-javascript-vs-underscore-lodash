const und = require('underscore');
const lod = require('lodash');

/**
 * drop - Создает срез массива с n элементами, отброшенными с самого начала.
 */

const arr = [5, 4, 3, 2, 1];

// lodash
console.log("lod.drop(arr)", lod.drop(arr));
console.log("lod.drop(arr, 2)", lod.drop(arr, 2));
console.log("lod.drop(arr, 5)", lod.drop(arr, 5));
console.log("lod.drop(arr, 0)", lod.drop(arr, 0));

// underscore
console.log("und.drop(arr)", und.drop(arr));
console.log("und.drop(arr, 2)", und.drop(arr, 2));
console.log("und.drop(arr, 5)", und.drop(arr, 5));
console.log("und.drop(arr, 0)", und.drop(arr, 0));
console.log("und.rest(arr)", und.rest(arr)); // alias
console.log("und.tail(arr)", und.tail(arr)); // alias

// es6
console.log("arr.slice(1)", arr.slice(1));
console.log("arr.slice(2)", arr.slice(2));
console.log("arr.slice(5)", arr.slice(5));
console.log("arr.slice()", arr.slice());