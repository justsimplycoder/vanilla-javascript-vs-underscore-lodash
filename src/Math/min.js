const und = require('underscore');
const lod = require('lodash');

/**
 * min - минимальное значение массива
 */

// underscore
console.log("und.min([4, 2, 8, 6])", und.min([4, 2, 8, 6]));

// lodash
console.log("lod.min([4, 2, 8, 6])", lod.min([4, 2, 8, 6]));

// es6
console.log("Math.min(...[4, 2, 8, 6])", Math.min(...[4, 2, 8, 6]));