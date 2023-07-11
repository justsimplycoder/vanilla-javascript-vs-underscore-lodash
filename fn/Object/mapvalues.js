const und = require('underscore');
const lod = require('lodash');

/**
 * mapValues - создаёт объект с теми же ключами, но с изменёнными значениями
 */

// lodash
var users = {
	'fred':    { 'user': 'fred',    'age': 40 },
	'pebbles': { 'user': 'pebbles', 'age': 1 }
};

console.log("lod.mapValues(users, function(o) { return o.age; })", lod.mapValues(users, function(o) { return o.age; }));
console.log("lod.mapValues(users, 'age')", lod.mapValues(users, 'age'));
console.log("lod.mapValues(users, function(o) {return 12;})", lod.mapValues(users, function(o) {return 12;}));

// es6
function mapValues(obj, value) {
	let newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(typeof value === 'function'){
				newObj[prop] = value(obj[prop]);
			} else {
				newObj[prop] = obj[prop][value];
			}
		}
	}
	return newObj;
}

console.log("mapValues(users, function(o) {return o.age;})", mapValues(users, function(o) {return o.age;}));
console.log("mapValues(users, 'age')", mapValues(users, 'age'));
console.log("mapValues(users, function(o) {return 12;})", mapValues(users, function(o) {return 12;}));