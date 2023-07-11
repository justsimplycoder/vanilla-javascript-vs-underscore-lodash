const und = require('underscore');
const lod = require('lodash');

/**
 * overArgs - Создает функцию, которая вызывает func с преобразованными аргументами.
 */

// lodash
function doubled(n) {
	return n * 2;
}

function square(n) {
	return n * n;
}

const func = lod.overArgs((x, y) => [x, y], [square, doubled]);

console.log("func(9, 3)", func(9, 3));
console.log("func(10, 5)", func(10, 5));

// es6
function overArgs(fn, arrFn) {
	return function(...arg){
		let newArg = arg.map((el, index) => {
			return arrFn[index](el);
		});
		return fn(...newArg);
	};
}

const func1 = overArgs((x, y) => [x, y], [square, doubled]);

console.log("func1(9, 3)", func1(9, 3));
console.log("func1(10, 5)", func1(10, 5));