const und = require('underscore');
const lod = require('lodash');

/**
 * isString - Проверяет, является ли значение примитивом типа String или объектом String.
 */

// underscore
console.log("und.isString('abc')", und.isString('abc'));
console.log("und.isString(new String('abc'))", und.isString(new String('abc')));
console.log("und.isString(1)", und.isString(1));

// lodash
console.log("lod.isString('abc')", lod.isString('abc'));
console.log("lod.isString(new String('abc'))", lod.isString(new String('abc')));
console.log("lod.isString(1)", lod.isString(1));

// es6
function isString(value) {
  if(Object.prototype.toString.call(value) === '[object String]') return true;
  return false
}

console.log("isString('abc')", isString('abc'));
console.log("isString(new String('abc'))", isString(new String('abc')));
console.log("isString(1)", isString(1));
