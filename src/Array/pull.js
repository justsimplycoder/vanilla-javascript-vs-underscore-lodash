const und = require('underscore');
const lod = require('lodash');

/**
 * pull - Удаляет все заданные значения из массива
 */

const arr = ['a', 'b', 'c', 'a', 'b', 'c'];

// lodash
console.log("lod.pull(arr, 'a', 'c')", lod.pull(arr, 'a', 'c'));

// es6
function pull(arr, ...value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
}

console.log("pull(arr, 'a', 'c')", pull(arr, 'a', 'c'));