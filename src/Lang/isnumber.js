const und = require('underscore');
const lod = require('lodash');

/**
 * isNumber - Проверяет, классифицируется ли значение как числовой примитив или объект.
 */

// underscore
console.log("und.isNumber(3)", und.isNumber(3));
console.log("und.isNumber(Number.MIN_VALUE)", und.isNumber(Number.MIN_VALUE));
console.log("und.isNumber(Infinity)", und.isNumber(Infinity));
console.log("und.isNumber('3')", und.isNumber('3'));
console.log("lod.isNumber({})", lod.isNumber({}));

// lodash
console.log("lod.isNumber(3)", lod.isNumber(3));
console.log("lod.isNumber(Number.MIN_VALUE)", lod.isNumber(Number.MIN_VALUE));
console.log("lod.isNumber(Infinity)", lod.isNumber(Infinity));
console.log("lod.isNumber('3')", lod.isNumber('3'));
console.log("lod.isNumber({})", lod.isNumber({}));

// es6
function isNumber(n){
	return Number(n) === n;
}

console.log("isNumber(3)", isNumber(3));
console.log("isNumber(Number.MIN_VALUE)", isNumber(Number.MIN_VALUE));
console.log("isNumber(Infinity)", isNumber(Infinity));
console.log("isNumber('3')", isNumber('3'));
console.log("isNumber({})", isNumber({}));
