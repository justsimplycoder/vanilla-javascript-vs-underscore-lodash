const und = require('underscore');
const lod = require('lodash');

/**
 * lte - проверяет является ли первый параметр меньше или равен второму
*/

// lodash
console.log("lod.lte(1, 3)", lod.lte(1, 3));
console.log("lod.lte(3, 3)", lod.lte(3, 3));
console.log("lod.lte(3, 1)", lod.lte(3, 1));

// es6
function lte(el1, el2) {
	return el1 <= el2;
}

console.log("lte(1, 3)", lte(1, 3));
console.log("lte(3, 3)", lte(3, 3));
console.log("lte(3, 1)", lte(3, 1));
