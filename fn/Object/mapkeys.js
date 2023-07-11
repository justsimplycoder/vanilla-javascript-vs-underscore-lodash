const und = require('underscore');
const lod = require('lodash');

/**
 * mapKeys - возвращает изменённый объект с новыми значениями свойств
 */


// lodash
console.log(`
lod.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
})\n`,
lod.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
}));

// es6
function mapKeys(obj, callback) {
	let objKey = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			objKey[callback(obj[prop], prop)] = obj[prop];
		}
	}
	return objKey;
}

console.log(`
mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
})\n`,
mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
})
);