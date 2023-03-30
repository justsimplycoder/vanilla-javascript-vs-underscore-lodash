const und = require('underscore');
const lod = require('lodash');

/**
 * sortedLastIndex - Этот метод похож на _.sortedLastIndex, за исключением того, что он принимает итерацию, которая вызывается для значения и каждого элемента массива для вычисления их ранжирования сортировки.
 */

// lodash
var objects = [{ 'x': 4 }, { 'x': 5 }, { 'x': 5 }, { 'x': 6 }];

console.log(
	`lod.sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; })`,
	lod.sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; })
);
console.log(
	`lod.sortedLastIndexBy(objects, { 'x': 5 }, 'x')`,
	lod.sortedLastIndexBy(objects, { 'x': 5 }, 'x')
);

// es6
function sortedLastIndexBy(arr, value, comparator) {
	if (typeof comparator === 'function') {
		return 1 + arr.findLastIndex(el => comparator(el) === comparator(value))
	} else if (typeof comparator === 'string') {
		return 1 + arr.findLastIndex(el => value[comparator] === el[comparator])
	} else {
		return false;
	}
}

console.log(
	`sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; })`,
	sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; })
);
console.log(
	`sortedLastIndexBy(objects, { 'x': 5 }, 'x')`,
	sortedLastIndexBy(objects, { 'x': 5 }, 'x')
);
