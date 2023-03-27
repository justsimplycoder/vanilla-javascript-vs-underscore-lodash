const und = require('underscore');
const lod = require('lodash');

/**
 * flattenDeep - Рекурсивно сглаживает массив.
 */

const arr = [1, [2, [3, [4]], 5]];

// lodash
console.log("lod.flattenDeep(arr)", lod.flattenDeep(arr));

// underscore
console.log("und.flatten(arr)", und.flatten(arr));

// es6
console.log("arr.flat(Infinity)", arr.flat(Infinity));
