const und = require('underscore');
const lod = require('lodash');

/**
 * invertBy - меняет местами ключи и значения, значение ключа можно изменить с помощью переданной функции
 */

// lodash
var object = { 'a': 1, 'b': 2, 'c': 1};

console.log("lod.invertBy(object)", lod.invertBy(object));
console.log("lod.invertBy(object, value => 'group' + value)", lod.invertBy(object, value => 'group' + value));

// es6
function invertBy(obj, fn = (value) => value) {
	let newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(!Array.isArray(newObj[fn(obj[prop])]))
				newObj[fn(obj[prop])] = [];
			newObj[fn(obj[prop])].push(prop)
		}
	}
	return newObj;
}

console.log("invertBy(object)", invertBy(object));
console.log("invertBy(object, value => 'group' + value)", invertBy(object, value => 'group' + value));