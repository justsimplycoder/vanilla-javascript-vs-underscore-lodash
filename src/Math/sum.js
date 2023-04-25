const und = require('underscore');
const lod = require('lodash');

/**
 * sum - сумма всех элементов массива
 */

// lodash
console.log("lod.sum([4, 2, 8, 6])", lod.sum([4, 2, 8, 6]));

// es6
console.log("[4, 2, 8, 6].reduce((sum, current) => sum + current)", [4, 2, 8, 6].reduce((sum, current) => sum + current));