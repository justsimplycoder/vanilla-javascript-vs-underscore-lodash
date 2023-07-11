const und = require('underscore');
const lod = require('lodash');

/**
 * sample - Получает случайный элемент из коллекции.
 */

// lodash
console.log("lod.sample([1, 2, 3, 4])", lod.sample([1, 2, 3, 4]));

// es6
function sample(arr) {
	let randomIndex =	Math.floor( Math.random( ) * (arr.length) );
	return arr[randomIndex];
}
console.log("sample([1, 2, 3, 4])", sample([1, 2, 3, 4]));