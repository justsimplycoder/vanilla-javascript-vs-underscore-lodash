const und = require('underscore');
const lod = require('lodash');

/**
 * mean - среднее значение массива
 */

const arr = [4, 2, 8, 6];

// lodash
console.log("lod.mean(arr)", lod.mean(arr));

// es6
console.log("arr.reduce((sum, current) => sum + current) / arr.length", arr.reduce((sum, current) => sum + current) / arr.length);