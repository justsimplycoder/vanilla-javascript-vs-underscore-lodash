const und = require('underscore');
const lod = require('lodash');

/**
 * last - Получает последний элемент массива.
 */

const arr = [5, 4, 3, 2, 1];

// lodash
console.log("lod.last(arr)", lod.last(arr));

// underscore
console.log("und.last(arr)", und.last(arr));
console.log("und.last(arr, 2)", und.last(arr, 2)); // -> [2, 1]

// es6
console.log("arr[arr.length - 1]", arr[arr.length - 1]);
console.log("arr.slice(-1)[0]", arr.slice(-1)[0]);
console.log("arr.slice(-2)", arr.slice(-2)); // und.last(arr, 2))
