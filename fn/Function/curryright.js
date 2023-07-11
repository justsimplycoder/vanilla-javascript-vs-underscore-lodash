const und = require('underscore');
const lod = require('lodash');

/**
 * curryRight - каррирование, меняется порядок аргументов на обратный
 */

// lodash
const abc = function (a, b, c) {
	return [a, b, c];
};

const curried = lod.curryRight(abc);

console.log("curried(1)(2)(3)", curried(1)(2)(3));
console.log("curried(1)(2, 3)", curried(1)(2, 3));
console.log("curried(1, 2, 3)", curried(1, 2, 3));

// es6
function curryRight(func) {
	return function curried(...args) {
		if(args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				args.unshift(...args2);
				return curried.apply(this, args);
			};
		}
	};
}

const curried2 = curryRight(abc);
console.log("curried2(1)(2)(3)", curried2(1)(2)(3));
console.log("curried2(1)(2, 3)", curried2(1)(2, 3));
console.log("curried2(1, 2, 3)", curried2(1, 2, 3));
