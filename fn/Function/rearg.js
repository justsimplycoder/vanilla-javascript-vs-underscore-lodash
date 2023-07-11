const und = require('underscore');
const lod = require('lodash');

/**
 * rearg - Создает функцию, которая вызывает func с аргументами, расположенными в соответствии с указанными индексами, где значение аргумента по первому индексу предоставляется в качестве первого аргумента, значение аргумента по второму индексу предоставляется в качестве второго аргумента и так далее.
 */

// lodash
const rearged = lod.rearg(function(a, b, c) {
	return [a, b, c];
}, [2, 0, 1]);

console.log("rearged('b', 'c', 'a')", rearged('b', 'c', 'a'));

// es6
function rearg(callback, order) {
	return function(...arg) {
		const reargArg = [];
		order.forEach((i) => {
			reargArg.push(arg[i]);
		});
		return callback(...reargArg);
	};
}

const rearged1 = rearg(function(a, b, c) {
	return [a, b, c];
}, [2, 0, 1]);

console.log("rearged1('b', 'c', 'a')", rearged1('b', 'c', 'a'));