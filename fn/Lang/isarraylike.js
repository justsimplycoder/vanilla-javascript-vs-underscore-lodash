const und = require('underscore');
const lod = require('lodash');

/**
 * isArrayLike - Проверяет, является ли значение массивоподобным.
 */

// lodash
console.log("lod.isArrayLike([1, 2, 3])", lod.isArrayLike([1, 2, 3]));
// console.log("lod.isArrayLike(document.body.children)", lod.isArrayLike(document.body.children));
console.log("lod.isArrayLike('abc')", lod.isArrayLike('abc'));
console.log("lod.isArrayLike(_.noop)", lod.isArrayLike(lod.noop));
console.log("lod.isArrayLike(function(a, b){})", lod.isArrayLike(function(a, b){}));

// es6
function isArrayLike(value) {
	if((value).length === undefined || typeof value === 'function') return false;
	return true;
}

console.log("isArrayLike([1, 2, 3])", isArrayLike([1, 2, 3]));
// console.log("isArrayLike(document.body.children)", isArrayLike(document.body.children));
console.log("isArrayLike('abc')", isArrayLike('abc'));
console.log("isArrayLike(_.noop)", isArrayLike(lod.noop));
console.log("isArrayLike(function(a, b){})", isArrayLike(function(a, b){}));
