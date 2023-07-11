const und = require('underscore');
const lod = require('lodash');

/**
 * omitBy - Противоположность _.pickBy; этот метод создает объект, состоящий из собственных и унаследованных перечисляемых строковых свойств с ключом объекта, для которого предикат не возвращает истинности.
 */

var object = { 'a': 1, 'b': '2', 'c': 3 };

// underscore
console.log("und.omit(object, (value, key, obj) => ['a', 'c'].includes(key))", und.omit(object, (value, key, obj) => ['a', 'c'].includes(key)));

// lodash
console.log("lod.omitBy(object, (value, key, obj) => ['a', 'c'].includes(key))", lod.omitBy(object, (value, key, obj) => ['a', 'c'].includes(key)));

// es6
function omitBy(obj, fn) {
	let newObj = {};
	for (let prop in obj) {
		if (!fn(obj[prop], prop, obj) && obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

console.log("omitBy(object, (value, key, obj) => ['a', 'c'].includes(key))", omitBy(object, (value, key, obj) => ['a', 'c'].includes(key)));