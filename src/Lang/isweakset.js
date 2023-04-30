const und = require('underscore');
const lod = require('lodash');

/**
 * isWeakSet - проверяет является ли выражение WeakSet
*/

// underscore
console.log("und.isWeakSet(new WeakSet)", und.isWeakSet(new WeakSet));
console.log("und.isWeakSet(new Set)", und.isWeakSet(new Set));

// lodash
console.log("lod.isWeakSet(new WeakSet)", lod.isWeakSet(new WeakSet));
console.log("lod.isWeakSet(new Set)", lod.isWeakSet(new Set));

// es6
function isWeakSet(value) {
	if(Object.prototype.toString.call(value) === '[object WeakSet]') return true;
	return false;
}

console.log("isWeakSet(new WeakSet)", isWeakSet(new WeakSet));
console.log("isWeakSet(new Set)", isWeakSet(new Set));
