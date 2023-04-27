const und = require('underscore');
const lod = require('lodash');

/**
 * castArray - Преобразует значение в виде массива, если это не так.
 */

// lodash
console.log("lod.castArray(1)", lod.castArray(1));
console.log("lod.castArray({ 'a': 1 })", lod.castArray({ 'a': 1 }));
console.log("lod.castArray('abc')", lod.castArray('abc'));
console.log("lod.castArray(null)", lod.castArray(null));
console.log("lod.castArray(undefined)", lod.castArray(undefined));
console.log("lod.castArray()", lod.castArray());
console.log("lod.castArray([1, 2, 3])", lod.castArray([1, 2, 3]));

// es6
function castArray(prop) {
	if(arguments.length === 0) return [];
	if(Array.isArray(prop)) return prop;
	return [prop]
}

console.log("castArray(1)", castArray(1));
console.log("castArray({ 'a': 1 })", castArray({ 'a': 1 }));
console.log("castArray('abc')", castArray('abc'));
console.log("castArray(null)", castArray(null));
console.log("castArray(undefined)", castArray(undefined));
console.log("castArray()", castArray());
console.log("castArray([1, 2, 3])", castArray([1, 2, 3]));
