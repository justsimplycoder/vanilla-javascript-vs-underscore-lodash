const und = require('underscore');
const lod = require('lodash');

/**
 * isArray - Проверяет, классифицируется ли значение как объект Array.
 */

// underscore
console.log("und.isArray([1, 2, 3])", und.isArray([1, 2, 3]));
console.log("und.isArray('abc')", und.isArray('abc'));

// lodash
console.log("lod.isArray([1, 2, 3])", lod.isArray([1, 2, 3]));
console.log("lod.isArray('abc')", lod.isArray('abc'));

// es6
console.log("Array.isArray([1, 2, 3])", Array.isArray([1, 2, 3]));
console.log("Array.isArray('abc')", Array.isArray('abc'));
