const und = require('underscore');
const lod = require('lodash');

/**
 * isSet - проверяет является ли значение объектом Set
*/

// underscore
console.log("und.isSet(new Set)", und.isSet(new Set));
console.log("und.isSet(new WeakSet)", und.isSet(new WeakSet));

// lodash
console.log("lod.isSet(new Set)", lod.isSet(new Set));
console.log("lod.isSet(new WeakSet)", lod.isSet(new WeakSet));

// es6
function isSet(value) {
	if(Object.prototype.toString.call(value) === '[object Set]') return true;
	return false;
}

console.log("isSet(new Set)", isSet(new Set));
console.log("isSet(new WeakSet)", isSet(new WeakSet));
