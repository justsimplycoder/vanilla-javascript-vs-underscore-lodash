const und = require('underscore');
const lod = require('lodash');

/**
 * isFinite - Проверяет, является ли значение конечным примитивным числом.
 */

// underscore
console.log("und.isFinite(3)", und.isFinite(3));
console.log("und.isFinite(Number.MIN_VALUE)", und.isFinite(Number.MIN_VALUE));
console.log("und.isFinite(Infinity)", und.isFinite(Infinity));
console.log("und.isFinite('3')", und.isFinite('3'));

// lodash
console.log("lod.isFinite(3)", lod.isFinite(3));
console.log("lod.isFinite(Number.MIN_VALUE)", lod.isFinite(Number.MIN_VALUE));
console.log("lod.isFinite(Infinity)", lod.isFinite(Infinity));
console.log("lod.isFinite('3')", lod.isFinite('3'));

// es6
function isFiniteValue(value) {
	return isFinite(value) && typeof value !== 'string';
}

console.log("isFiniteValue(3)", isFiniteValue(3));
console.log("isFiniteValue(Number.MIN_VALUE)", isFiniteValue(Number.MIN_VALUE));
console.log("isFiniteValue(Infinity)", isFiniteValue(Infinity));
console.log("isFiniteValue('3')", isFiniteValue('3'));
