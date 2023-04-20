const und = require('underscore');
const lod = require('lodash');

/**
 * upperFirst - Преобразует первый символ строки в верхний регистр.
 */

// lodash
console.log("lod.upperFirst('fred')", lod.upperFirst('fred'));
console.log("lod.upperFirst('FRED')", lod.upperFirst('FRED'));

// es6
function upperFirst(match) {
  return match.toUpperCase();
}

console.log("'fred'.replace(/(\\w)/, upperFirst)", 'fred'.replace(/(\w)/, upperFirst));
console.log("'FRED'.replace(/(\\w)/, upperFirst)", 'FRED'.replace(/(\w)/, upperFirst));