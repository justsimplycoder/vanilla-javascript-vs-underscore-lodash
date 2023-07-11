const und = require('underscore');
const lod = require('lodash');

/**
 * ary - Создает функцию, которая вызывает func с аргументами до n, игнорируя любые дополнительные аргументы.
 */

function numberSquare(...args) {
	return args.reduce((acc, cur) => {
		acc.push(cur**2);
		return acc;
	}, []);
}

console.log('numberSquare(1, 2, 3, 4)', numberSquare(1, 2, 3, 4));

// lodash
const fAry = lod.ary(numberSquare, 2);

console.log('fAry(1, 2, 3, 4)', fAry(1, 2, 3, 4))

// es6
function ary(fn, len) {
	return function(){
		let arg = Array.prototype.slice.call(arguments, 0, len);
		return fn(...arg);
	};
}

var myFAry = ary(numberSquare, 2);

console.log("myFAry(1, 2, 3, 4)", myFAry(1, 2, 3, 4));
