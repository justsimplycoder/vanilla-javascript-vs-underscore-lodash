const und = require('underscore');
const lod = require('lodash');

/**
 * isArrayLikeObject - Этот метод похож на _.isArrayLike, за исключением того, что он также проверяет, является ли значение объектом.
 */

// lodash
console.log("lod.isArrayLikeObject([1, 2, 3])", lod.isArrayLikeObject([1, 2, 3]));
// console.log("_.isArrayLikeObject(document.body.children)", _.isArrayLikeObject(document.body.children));
console.log("lod.isArrayLikeObject(new Map())", lod.isArrayLikeObject(new Map()));
console.log("lod.isArrayLikeObject({})", lod.isArrayLikeObject({}));
console.log("lod.isArrayLikeObject('abc')", lod.isArrayLikeObject('abc'));
console.log("lod.isArrayLikeObject(_.noop)", lod.isArrayLikeObject(lod.noop));
console.log("lod.isArrayLikeObject(function(a, b){})", lod.isArrayLikeObject(function(a, b){}));
console.log("lod.isArrayLikeObject(null)", lod.isArrayLikeObject(null));
console.log("lod.isArrayLikeObject(undefined)", lod.isArrayLikeObject(undefined));

// es6
function isArrayLikeObject(value) {
	if(
		value == null ||
		(value).length === undefined ||
		typeof value === 'function'
	) {
		return false;
	}
	if(typeof value === 'object') return true;
	return false;
}

console.log("isArrayLikeObject([1, 2, 3])", isArrayLikeObject([1, 2, 3]));
// console.log("isArrayLikeObject(document.body.children)", isArrayLikeObject(document.body.children));
console.log("isArrayLikeObject(new Map())", isArrayLikeObject(new Map()));
console.log("isArrayLikeObject({})", isArrayLikeObject({}));
console.log("isArrayLikeObject('abc')", isArrayLikeObject('abc'));
console.log("isArrayLikeObject(_.noop)", isArrayLikeObject(lod.noop));
console.log("isArrayLikeObject(function(a, b){})", isArrayLikeObject(function(a, b){}));
console.log("isArrayLikeObject(null)", isArrayLikeObject(null));
console.log("isArrayLikeObject(undefined)", isArrayLikeObject(undefined));
