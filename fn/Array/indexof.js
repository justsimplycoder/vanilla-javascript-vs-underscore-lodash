const und = require('underscore');
const lod = require('lodash');

/**
 * indexOf - Получает индекс, по которому первое вхождение значения находится в массиве.
 */

const arr = [1, 2, 1, 3, 2];

// lodash
console.log("lod.indexOf(arr, 2)", lod.indexOf(arr, 2));
console.log("lod.indexOf(arr, 2, 2)", lod.indexOf(arr, 2, 2));
console.log("lod.indexOf(arr, 4)", lod.indexOf(arr, 4));

// underscore
console.log("und.indexOf(arr, 2)", und.indexOf(arr, 2));
console.log("und.indexOf(arr, 2, 2)", und.indexOf(arr, 2, 2));
console.log("und.indexOf(arr, 4)", und.indexOf(arr, 4));

// es6
console.log("arr.indexOf(2)", arr.indexOf(2));
console.log("arr.indexOf(2, 2)", arr.indexOf(2, 2));
console.log("arr.indexOf(4)", arr.indexOf(4));
