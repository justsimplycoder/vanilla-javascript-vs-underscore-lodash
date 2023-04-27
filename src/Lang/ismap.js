const und = require('underscore');
const lod = require('lodash');

/**
 * isMap - Проверяет, классифицируется ли значение как объект Map.
 */

// underscore
console.log("und.isMap(new Map)", und.isMap(new Map));
console.log("und.isMap(new WeakMap)", und.isMap(new WeakMap));

// lodash
console.log("lod.isMap(new Map)", lod.isMap(new Map));
console.log("lod.isMap(new WeakMap)", lod.isMap(new WeakMap));

// es6
function isMap(value) {
	if(Object.prototype.toString.call(value) === '[object Map]') return true;
	return false;
}

console.log("isMap(new Map)", isMap(new Map));
console.log("isMap(WeakMap)", isMap(WeakMap));