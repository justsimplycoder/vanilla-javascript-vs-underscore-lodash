const und = require('underscore');
const lod = require('lodash');

/**
 * gt - проверяет является ли первый параметр больше второго
*/

// lodash
console.log("lod.gt(1, 3)", lod.gt(1, 3));
console.log("lod.gt(3, 3)", lod.gt(3, 3));
console.log("lod.gt(3, 1)", lod.gt(3, 1));

// es6
function gt(el1, el2) {
	return el1 > el2;
}

console.log("gt(1, 3)", gt(1, 3));
console.log("gt(3, 3)", gt(3, 3));
console.log("gt(3, 1)", gt(3, 1));
