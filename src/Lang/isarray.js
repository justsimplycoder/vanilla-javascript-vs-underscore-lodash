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
function isArray(value) {
  return Array.isArray(value);
}

console.log("isArray([1, 2, 3])", isArray([1, 2, 3]));
console.log("isArray('abc')", isArray('abc'));
