const und = require('underscore');
const lod = require('lodash');

/**
 * isWeakMap - проверяет является ли выражение WeakMap
 */

// underscore
console.log("und.isWeakMap(new WeakMap)", und.isWeakMap(new WeakMap));
console.log("und.isWeakMap(new Map)", und.isWeakMap(new Map));

// lodash
console.log("lod.isWeakMap(new WeakMap)", lod.isWeakMap(new WeakMap));
console.log("lod.isWeakMap(new Map)", lod.isWeakMap(new Map));

// es6
function isWeakMap(value) {
	if(Object.prototype.toString.call(value) === '[object WeakMap]') return true;
	return false;
}

console.log("isWeakMap(new WeakMap)", isWeakMap(new WeakMap));
console.log("isWeakMap(new Map)", isWeakMap(new Map));
