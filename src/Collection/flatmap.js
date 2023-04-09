const und = require('underscore');
const lod = require('lodash');

/**
 * flatMap - Создает сглаженный массив значений, пропуская каждый элемент в коллекции через итерацию и сглаживая сопоставленные результаты.
 */

// lodash
console.log("lod.flatMap([1, 2], n => [n, n])", lod.flatMap([1, 2], n => [n, n]));
console.log("lod.flatMap([1, [2]], n => n)", lod.flatMap([1, [2]], n => n**2));
console.log("lod.flatMap([1, [2, [3]]], n => n)", lod.flatMap([1, [2, [3]]], n => n));

// es6
function flatMap(arr, fn) {
	return arr.map(fn).flat(1);
}

console.log("flatMap([1, 2], n => [n, n])", flatMap([1, 2], n => [n, n]));
console.log("flatMap([1, [2]], n => n)", flatMap([1, [2]], n => n**2));
console.log("flatMap([1, [2, [3]]], n => n)", flatMap([1, [2, [3]]], n => n));