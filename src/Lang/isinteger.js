const und = require('underscore');
const lod = require('lodash');

/**
 * isInteger - Проверяет, является ли значение целым числом.
 */

// lodash
console.log("lod.isInteger(3)", lod.isInteger(3));
console.log("lod.isInteger(Number.MIN_VALUE)", lod.isInteger(Number.MIN_VALUE));
console.log("lod.isInteger(Infinity)", lod.isInteger(Infinity));
console.log("lod.isInteger('3')", lod.isInteger('3'));

// es6
console.log("parseInt(3) === 3", parseInt(3) === 3);
console.log("parseInt(Number.MIN_VALUE) === Number.MIN_VALUE", parseInt(Number.MIN_VALUE) === Number.MIN_VALUE);
console.log("parseInt(Infinity) === Infinity", parseInt(Infinity) === Infinity);
console.log("parseInt('3') === '3'", parseInt('3') === '3');

console.log("Number.isInteger(3)", Number.isInteger(3));
console.log("Number.isInteger(Number.MIN_VALUE)", Number.isInteger(Number.MIN_VALUE));
console.log("Number.isInteger(Infinity)", Number.isInteger(Infinity));
console.log("Number.isInteger('3')", Number.isInteger('3'));