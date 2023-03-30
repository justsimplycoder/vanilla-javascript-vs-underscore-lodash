const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndexBy - Этот метод подобен _.sortedIndex, за исключением того, что он принимает итерацию, которая вызывается для значения и каждого элемента массива для вычисления их ранжирования сортировки.
 */

// lodash
console.log("lod.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x')", lod.sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x'));

// es6
function sortedIndexBy(arr, value, prop) {
	return arr.findIndex(elem => elem[prop] == value[prop]);
}

console.log("sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x')", sortedIndexBy([{'x': 3}, {'x': 4}, {'x': 5}], {'x': 4}, 'x'));