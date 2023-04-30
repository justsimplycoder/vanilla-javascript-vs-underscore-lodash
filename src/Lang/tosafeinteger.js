const und = require('underscore');
const lod = require('lodash');

/**
 * toSafeIntege - Преобразует значение в безопасное целое число.
 */

// lodash
console.log("lod.toSafeInteger(3.2)", lod.toSafeInteger(3.2));
console.log("lod.toSafeInteger(Number.MIN_VALUE)", lod.toSafeInteger(Number.MIN_VALUE));
console.log("lod.toSafeInteger(Infinity)", lod.toSafeInteger(Infinity));
console.log("lod.toSafeInteger(-Infinity)", lod.toSafeInteger(-Infinity));
console.log("lod.toSafeInteger('3.2')", lod.toSafeInteger('3.2'));
console.log("lod.toSafeInteger(NaN)", lod.toSafeInteger(NaN));

// es6
if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}

function toSafeInteger(value) {
	if(value === Infinity) {
		return Number.MAX_SAFE_INTEGER;
	}
	if(value === -Infinity) {
		return -Number.MAX_SAFE_INTEGER;
	}
	value = Math.trunc(value);
	if(Number.isSafeInteger(value)) {
		return value;
	}
	return 0;
}

console.log("toSafeInteger(3.2)", toSafeInteger(3.2));
console.log("toSafeInteger(Number.MIN_VALUE)", toSafeInteger(Number.MIN_VALUE));
console.log("toSafeInteger(Infinity)", toSafeInteger(Infinity));
console.log("toSafeInteger(-Infinity)", toSafeInteger(-Infinity));
console.log("toSafeInteger('3.2')", toSafeInteger('3.2'));
console.log("toSafeInteger(NaN)", toSafeInteger(NaN));

