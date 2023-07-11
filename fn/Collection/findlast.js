const und = require('underscore');
const lod = require('lodash');

/**
 * findLast - Этот метод похож на _.find, за исключением того, что он перебирает элементы коллекции справа налево.
 */

console.log(
	"lod.findLast([1, 2, 3, 4], (n) => n % 2 == 1)",
	lod.findLast([1, 2, 3, 4], (n) => n % 2 == 1)
);

// es6
function findLast(arr, callback) {
	for (let i = arr.length - 1; i >= 0; --i) {
		if(callback(arr[i])) return arr[i]
	}
}

console.log(
	"findLast([1, 2, 3, 4], (n) => n % 2 === 1)",
	findLast([1, 2, 3, 4], (n) => n % 2 === 1)
);

