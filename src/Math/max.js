const und = require('underscore');
const lod = require('lodash');

/**
 * max - максимальное значение массива
 */

// underscore
console.log("und.max([4, 2, 8, 6])", und.max([4, 2, 8, 6]));

// lodash
console.log("lod.max([4, 2, 8, 6])", lod.max([4, 2, 8, 6]));

// es6
console.log("Math.max(...[4, 2, 8, 6])", Math.max(...[4, 2, 8, 6]));