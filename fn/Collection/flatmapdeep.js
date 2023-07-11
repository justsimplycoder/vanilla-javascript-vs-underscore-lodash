const und = require('underscore');
const lod = require('lodash');

/**
 * flatMapDeep - Этот метод подобен _.flatMap, за исключением того, что он рекурсивно сглаживает сопоставленные результаты.
 */

// lodash
console.log("lod.flatMapDeep([1, 2], n => [n, n])", lod.flatMapDeep([1, 2], n => [n, n]));
console.log("lod.flatMapDeep([1, [2]], n => n)", lod.flatMapDeep([1, [2]], n => n));
console.log("lod.flatMapDeep([1, [2, [3]]], n => n)", lod.flatMapDeep([1, [2, [3]]], n => n));

// es6
function flatMapDeep(arr, fn) {
	return arr.map(fn).flat(Infinity);
}
console.log("flatMapDeep([1, 2], n => [n, n])", flatMapDeep([1, 2], n => [n, n]));
console.log("flatMapDeep([1, [2]], n => n)", flatMapDeep([1, [2]], n => n));
console.log("flatMapDeep([1, [2, [3]]], n => n)", flatMapDeep([1, [2, [3]]], n => n));