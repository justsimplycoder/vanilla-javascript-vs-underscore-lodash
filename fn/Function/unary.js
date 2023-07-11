const und = require('underscore');
const lod = require('lodash');

/**
 * unary - Создает функцию, которая принимает до одного аргумента, игнорируя любые дополнительные аргументы.
 */

// lodash
function argumArray(a, b, c) {
	return [...arguments];
}

const unaryArg = lod.unary(argumArray);
console.log("unaryArg(1, 2, 3)", unaryArg(1, 2, 3));

// es6
function unary(fn) {
	return function(...args) {
		return fn(args[0]);
	};
}

const unaryArg2 = unary(argumArray);
console.log("unaryArg2(1, 2, 3)", unaryArg2(1, 2, 3));