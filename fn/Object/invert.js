const und = require('underscore');
const lod = require('lodash');

/**
 * invert - Создает объект, состоящий из инвертированных ключей и значений объекта.
 */

// underscore
console.log("und.invert({ 'a': 1, 'b': 2, 'c': 1 })", und.invert({ 'a': 1, 'b': 2, 'c': 1 }));

// lodash
console.log("lod.invert({ 'a': 1, 'b': 2, 'c': 1 })", lod.invert({ 'a': 1, 'b': 2, 'c': 1 }));

// es6
function invert(obj) {
	let newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			newObj[obj[prop]] = prop;
		}
	}
	return newObj;
}

console.log("invert({ 'a': 1, 'b': 2, 'c': 1 })", invert({ 'a': 1, 'b': 2, 'c': 1 }));