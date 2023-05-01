const und = require('underscore');
const lod = require('lodash');

/**
 * toLength - Преобразует значение в целое число, подходящее для использования в качестве длины объекта, подобного массиву.
 */

// lodash
console.log("lod.toLength(3.2)", lod.toLength(3.2));
console.log("lod.toLength(Number.MIN_VALUE)", lod.toLength(Number.MIN_VALUE));
console.log("lod.toLength(Infinity)", lod.toLength(Infinity));
console.log("lod.toLength('3.2')", lod.toLength('3.2'));

// es6
if (!Math.trunc) {
	Math.trunc = function(v) {
		v = +v;
		return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
	};
}

function toLength(value) {
	if(Math.abs(value) === Infinity) return 4294967295;
	return Math.trunc(value);
}

console.log("toLength(3.2)", toLength(3.2));
console.log("toLength(Number.MIN_VALUE)", toLength(Number.MIN_VALUE));
console.log("toLength(Infinity)", toLength(Infinity));
console.log("toLength('3.2')", toLength('3.2'));