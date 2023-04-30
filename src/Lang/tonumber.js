const und = require('underscore');
const lod = require('lodash');

/**
 * toNumber - конвертирует значение в число
 */

// lodash
console.log("lod.toNumber(3.2)", lod.toNumber(3.2));
console.log("lod.toNumber(Number.MIN_VALUE)", lod.toNumber(Number.MIN_VALUE));
console.log("lod.toNumber(Infinity)", lod.toNumber(Infinity));
console.log("lod.toNumber('3.2')", lod.toNumber('3.2'));

// es6
console.log("parseFloat(3.2)", parseFloat(3.2));
console.log("parseFloat(Number.MIN_VALUE)", parseFloat(Number.MIN_VALUE));
console.log("parseFloat(Infinity)", parseFloat(Infinity));
console.log("parseFloat('3.2')", parseFloat('3.2'));

