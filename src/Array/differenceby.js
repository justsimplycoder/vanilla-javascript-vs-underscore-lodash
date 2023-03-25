const und = require('underscore');
const lod = require('lodash');

/**
 * differenceBy - Этот метод подобен _.difference, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента массива и значений для создания критерия, по которому они сравниваются.
 */

// lodash
console.log("lod.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)", lod.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log("lod.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", lod.differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));

// es6
function differenceBy(arr, value, comprator) {
	return arr.filter(function(elem) {
		return !value.find(function(item) {
			if(typeof comprator === 'function') {
				return comprator(item) === comprator(elem);
			} if (typeof comprator === 'string') {
				return item[comprator] === elem[comprator];
			} else {
				return false;
			}
		});
	});
}

console.log("differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)", differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log("differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x')", differenceBy([{'x' : 2}, {'x': 1}], [{'x': 1}], 'x'));
