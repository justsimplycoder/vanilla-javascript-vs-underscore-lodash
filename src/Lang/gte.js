const und = require('underscore');
const lod = require('lodash');

/**
 * gte - проверяет является ли первый параметр больше или равен второму
*/

// lodash
console.log("lod.gte(1, 3)", lod.gte(1, 3));
console.log("lod.gte(3, 3)", lod.gte(3, 3));
console.log("lod.gte(3, 1)", lod.gte(3, 1));

// es6
function gte(el1, el2) {
	return el1 >= el2;
}

console.log("gte(1, 3)", gte(1, 3));
console.log("gte(3, 3)", gte(3, 3));
console.log("gte(3, 1)", gte(3, 1));
