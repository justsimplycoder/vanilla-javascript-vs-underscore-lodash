const und = require('underscore');
const lod = require('lodash');

/**
 * unionWith - Этот метод подобен _.union, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому вычисляется уникальность.
 */

// lodash
console.log(
	"lod.unionBy([2.1], [1.2, 2.3], Math.floor)",
	lod.unionBy([2.1], [1.2, 2.3], Math.floor)
);
console.log(
	"lod.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')",
	lod.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
);

// es6
function unionBy(arr1, arr2, comparator) {
	const result = [...arr1];

		if(typeof comparator === 'function') {
			arr2.forEach(el => {
				if( comparator(el) !== comparator(arr1[0]) ) {
					result.push(el);
				}
			});
		} else if (typeof comparator === 'string') {
			arr2.forEach(el => {
				if( el[comparator] !== arr1[0][comparator]) {
					result.push(el);
				}
			});
		}

	return result;
}

console.log(
	"unionBy([2.1], [1.2, 2.3], Math.floor)",
	unionBy([2.1], [1.2, 2.3], Math.floor)
);
console.log(
	"unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')",
	unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')
);