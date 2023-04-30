const und = require('underscore');
const lod = require('lodash');

/**
 * lt - проверяет является ли первый параметр меньше второго
*/

// lodash
console.log("lod.lt(1, 3)", lod.lt(1, 3));
console.log("lod.lt(3, 3)", lod.lt(3, 3));
console.log("lod.lt(3, 1)", lod.lt(3, 1));

// es6
function lt(el1, el2) {
	return el1 < el2;
}

console.log("lt(1, 3)", lt(1, 3));
console.log("lt(3, 3)", lt(3, 3));
console.log("lt(3, 1)", lt(3, 1));
