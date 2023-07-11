const und = require('underscore');
const lod = require('lodash');

/**
 * lowerFirst - Преобразует первый символ строки в нижний регистр.
 */

// lodash
console.log("lod.lowerFirst('Fred')", lod.lowerFirst('Fred'));
console.log("lod.lowerFirst('FRED')", lod.lowerFirst('FRED'));

// es6
function lowerFirst(match) {
  return match.toLowerCase();
}

console.log("'Fred'.replace(/(\\w)/, lowerFirst)", 'Fred'.replace(/(\w)/, lowerFirst));
console.log("'FRED'.replace(/(\\w)/, lowerFirst)", 'FRED'.replace(/(\w)/, lowerFirst));