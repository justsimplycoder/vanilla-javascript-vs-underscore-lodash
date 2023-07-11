const und = require('underscore');
const lod = require('lodash');

/**
 * pick - Создает объект, состоящий из выбранных свойств объекта.
 */

var object = { 'a': 1, 'b': '2', 'c': 3 };

// underscore
console.log("und.pick(object, 'a', 'c')", und.pick(object, 'a', 'c'));
console.log("und.pick(object, ['a', 'c'])", und.pick(object, ['a', 'c']));

// lodash
console.log("lod.pick(object, ['a', 'c'])", lod.pick(object, ['a', 'c']));

// es6
function pick(obj, arr) {
	let newObj = {};
	for (let prop in obj) {
		if (arr.includes(prop) && obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

console.log("pick(object, ['a', 'c'])", pick(object, ['a', 'c']));