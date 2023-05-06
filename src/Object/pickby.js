const und = require('underscore');
const lod = require('lodash');

/**
 * pickBy - создаёт объект удовлетворяющим свойствам переданной функции
 */

var object = { 'a': 1, 'b': '2', 'c': 3 };

// underscore
console.log("und.pick(object, (value, key, obj) => ['a', 'c'].includes(key))", und.pick(object, (value, key, obj) => ['a', 'c'].includes(key)));

// lodash
console.log("lod.pickBy(object, (value, key, obj) => ['a', 'c'].includes(key))", lod.pickBy(object, (value, key, obj) => ['a', 'c'].includes(key)));

// es6
function pickBy(obj, fn) {
	let newObj = {};
	for (let prop in obj) {
		if (fn(obj[prop], prop, obj) && obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

console.log("pickBy(object, (value, key, obj) => ['a', 'c'].includes(key))", pickBy(object, (value, key, obj) => ['a', 'c'].includes(key)));