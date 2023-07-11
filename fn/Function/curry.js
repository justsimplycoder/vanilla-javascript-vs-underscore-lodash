const und = require('underscore');
const lod = require('lodash');

/**
 * curry - каррирование
 */

// lodash
const abc = function (a, b, c) {
	return [a, b, c];
};

const curried = lod.curry(abc);
console.log("curried(1)(2)(3)", curried(1)(2)(3));
console.log("curried(1, 2)(3)", curried(1, 2)(3));
console.log("curried(1, 2, 3)", curried(1, 2, 3));

// es6
function curry(func) {
	return function curried(...args) {
		if(args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}

const curried2 = curry(abc);
console.log("curried2(1)(2)(3)", curried2(1)(2)(3));
console.log("curried2(1, 2)(3)", curried2(1, 2)(3));
console.log("curried2(1, 2, 3)", curried2(1, 2, 3));
