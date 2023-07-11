const und = require('underscore');
const lod = require('lodash');

/**
 * zipObjectDeep - Этот метод похож на _.zip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать сгруппированные значения.
 */

// lodash
const zip = lod.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
console.log('zip', zip);

// es6

function zipWith(...args) {
	const callback = args.splice(-1, 1)[0];
	return args.reduce(callback)
}

const zip2 = zipWith([1, 2], [10, 20], [100, 200], (acc, cur) => {
	acc[0] += cur[0];
	acc[1] += cur[1];
	return acc;
});
console.log('zip2', zip2);