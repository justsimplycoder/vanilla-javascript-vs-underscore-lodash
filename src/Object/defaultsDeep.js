const und = require('underscore');
const lod = require('lodash');

/**
 * defaultsDeep - Этот метод похож на _.defaults, за исключением того, что он рекурсивно присваивает свойства по умолчанию.
 */

// lodash
console.log(
	"lod.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })\n",
	lod.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
);

// es6
function defaultsDeep(object, ...objects) {
	objects.forEach(obj => {
		for (let prop in obj) {
			if(
				Object.prototype.toString.call(obj[prop]) === "[object Object]" &&
				obj[prop] !== null
			) {
				object[prop] = Object.assign(obj[prop], object[prop]);
			} else {
				object[prop] = obj[prop];
			}
		}
	});
	return object;
}

console.log(
	"defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })\n",
	defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })
);
