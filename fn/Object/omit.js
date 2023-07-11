const und = require('underscore');
const lod = require('lodash');

/**
 * omit - Противоположность _.pick; этот метод создает объект, состоящий из собственных и унаследованных перечисляемых путей свойств объекта, которые не опущены.
 */

var object = { 'a': 1, 'b': '2', 'c': 3 };

// underscore
console.log("und.omit(object, 'a', 'c')", und.omit(object, 'a', 'c'));
console.log("und.omit(object, ['a', 'c'])", und.omit(object, ['a', 'c']));

// lodash
console.log("lod.omit(object, ['a', 'c'])", lod.omit(object, ['a', 'c']));

// es6
function omit(obj, arr) {
	let newObj = {};
	for (let prop in obj) {
		if (!arr.includes(prop) && obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

console.log("omit(object, ['a', 'c'])", omit(object, ['a', 'c']));