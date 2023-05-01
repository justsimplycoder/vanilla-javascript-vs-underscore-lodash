const und = require('underscore');
const lod = require('lodash');

/**
 * isSafeInteger - проверяет является ли выражение безопасным целым числом
 */

// lodash
console.log("lod.isSafeInteger(3)", lod.isSafeInteger(3));
console.log("lod.isSafeInteger(Number.MIN_VALUE)", lod.isSafeInteger(Number.MIN_VALUE));
console.log("lod.isSafeInteger(Infinity)", lod.isSafeInteger(Infinity));
console.log("lod.isSafeInteger('3')", lod.isSafeInteger('3'));

// es6
console.log("Number.isSafeInteger(3)", Number.isSafeInteger(3));
console.log("Number.isSafeInteger(Number.MIN_VALUE)", Number.isSafeInteger(Number.MIN_VALUE));
console.log("Number.isSafeInteger(Infinity)", Number.isSafeInteger(Infinity));
console.log("Number.isSafeInteger('3')", Number.isSafeInteger('3'));