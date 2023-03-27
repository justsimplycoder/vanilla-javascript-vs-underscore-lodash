const und = require('underscore');
const lod = require('lodash');

/**
 * flattenDepth - Рекурсивно сгладить массив до установленного уровня.
 */

const arr = [1, [2, [3, [4]], 5]];

// lodash
console.log("lod.flattenDepth(arr)", lod.flattenDepth(arr));
console.log("lod.flattenDepth(arr, 1)", lod.flattenDepth(arr, 1));
console.log("lod.flattenDepth(arr, 2)", lod.flattenDepth(arr, 2));

// underscore
console.log("und.flatten(arr, true)", und.flatten(arr, true));
console.log("und.flatten(arr, 1)", und.flatten(arr, 1));
console.log("und.flatten(arr, 2)", und.flatten(arr, 2));

// es6
console.log("arr.flat()", arr.flat());
console.log("arr.flat(1)", arr.flat(1));
console.log("arr.flat(2)", arr.flat(2));
