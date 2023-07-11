const und = require('underscore');
const lod = require('lodash');

/**
 * flatMapDepth - Этот метод подобен _.flatMap, за исключением того, что он рекурсивно сглаживает сопоставленные результаты до глубины времени.
 */

// lodash
console.log("lod.flatMapDepth([1, 2], n => [[[n, n]]], 2)", lod.flatMapDepth([1, 2], n => [[[n, n]]], 2));

// es6
function flatMapDepth(arr, fn, depth) {
	return arr.map(fn).flat(depth);
}

console.log("flatMapDepth([1, 2], n => [[[n, n]]], 2)", flatMapDepth([1, 2], n => [[[n, n]]], 2));
