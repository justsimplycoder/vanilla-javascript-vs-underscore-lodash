const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndexOf - Этот метод похож на _.lastIndexOf, за исключением того, что он выполняет двоичный поиск в отсортированном массиве.
 */

// lodash
console.log("lod.sortedLastIndexOf([4, 5, 5, 5, 6], 5)", lod.sortedLastIndexOf([4, 5, 5, 5, 6], 5));

// es6
console.log("[4, 5, 5, 5, 6].lastIndexOf(5)", [4, 5, 5, 5, 6].lastIndexOf(5));