const und = require('underscore');
const lod = require('lodash');

/**
 * before - Создает функцию, которая вызывает func, с привязкой this и аргументами созданной функции, хотя она вызывается менее n раз.
 */

// lodash
const lodStep =  lod.before(3, () => {
	console.log('lodash before')
	return 'return lodash before'
});

console.log(lodStep());
console.log(lodStep());
console.log(lodStep());
console.log(lodStep());

console.log('-----------------------------------------');

// Underscore
const undStep =  und.before(3, () => {
	console.log('underscore before')
	return 'return underscore before'
});

console.log(undStep());
console.log(undStep());
console.log(undStep());
console.log(undStep());

console.log('-----------------------------------------');

// es6
function before(funCallLength = 1, callback) {
	let callLength = 1;
	let result = undefined;

	return function (){
		if(callLength !== funCallLength) {
			callLength++;
			result = callback();
		}
		return result;
	};
}

const myStep = before(3, () => {
	console.log('my before');
	return 'return my before';
});

console.log(myStep());
console.log(myStep());
console.log(myStep());
console.log(myStep());
