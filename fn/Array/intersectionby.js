const und = require('underscore');
const lod = require('lodash');

/**
 * intersectionBy - Этот метод подобен _.intersection, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому они сравниваются.
 */

// lodash
console.log("lod.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')", lod.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
console.log("lod.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)", lod.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// es6
function intersectionBy(arr, value, comprator) {
	return arr.filter(function(elem) {
		return value.find(function(item) {
			if (typeof comprator === 'string') {
				return item[comprator] === elem[comprator];
			} else if (typeof comprator === 'function') {
				return comprator(elem) === comprator(item);
			} else {
				return false;
			}
		});
	});
}

console.log("intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')", intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
console.log("intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)", intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));