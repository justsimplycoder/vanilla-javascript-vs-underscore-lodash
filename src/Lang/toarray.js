const und = require('underscore');
const lod = require('lodash');

/**
 * toArray - конвертирует выражение в массив
 */

// lodash
console.log("lod.toArray({ 'a': 1, 'b': 2 })", lod.toArray({ 'a': 1, 'b': 2 }));
console.log("lod.toArray('abc')", lod.toArray('abc'));
console.log("lod.toArray(1)", lod.toArray(1));
console.log("lod.toArray(null)", lod.toArray(null));

// es6
function toArray(value) {
	if(value === null || value === undefined) return [];
	return Array.from(value);
}

console.log("toArray({ 'a': 1, 'b': 2 })", toArray({ 'a': 1, 'b': 2 }));
console.log("toArray('abc')", toArray('abc'));
console.log("toArray(1)", toArray(1));
console.log("toArray(null)", toArray(null));