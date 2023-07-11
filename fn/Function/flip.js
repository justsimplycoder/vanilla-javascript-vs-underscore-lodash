const und = require('underscore');
const lod = require('lodash');

/**
 * flip - Создает функцию, которая вызывает func с перевернутыми аргументами.
 */

// lodash
const flipped = lod.flip(function () {
	return lod.toArray(arguments);
});

console.log("flipped('a', 'b', 'c', 'd')", flipped('a', 'b', 'c', 'd'));

// es6
function flip(callback) {
	return function () {
		arguments = [].reverse.apply(arguments);
		return callback(...arguments);
	};
}

const flipped2 = flip(function () {
	return [...arguments];
});

console.log("flipped2('a', 'b', 'c', 'd')", flipped2('a', 'b', 'c', 'd'));