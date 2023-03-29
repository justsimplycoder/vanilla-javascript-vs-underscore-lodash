const und = require('underscore');
const lod = require('lodash');

/**
 * pullAll - Этот метод подобен _.pullAll, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента массива и значений для создания критерия, по которому они сравниваются.
 */

// lodash
var arr = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

console.log(
	`lod.pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')`,
	lod.pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')
);

// es6
function pullAllBy(arr, value, comprator) {
	return arr.filter(function(elem) {
		return !value.find(function(item) {
			return item[comprator] === elem[comprator];
		});
	});
}

console.log(`
	pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')`,
	pullAllBy(arr, [{ 'x': 1 }, { 'x': 3 }], 'x')
);
