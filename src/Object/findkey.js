const und = require('underscore');
const lod = require('lodash');

/**
 * pickBy - Этот метод подобен _.find, за исключением того, что он возвращает ключ первого элемента, предикат возвращает true вместо самого элемента.
 */

var users = {
  'barney':  { 'age': 36, 'active': true },
  'pebbles': { 'age': 1,  'active': true },
  'fred':    { 'age': 40, 'active': false }
};

// lodash
console.log("lod.findKey(users, function(o) { return o.age < 40; })", lod.findKey(users, function(o) { return o.age < 40; }));
console.log("lod.findKey(users, { 'age': 1, 'active': true })", lod.findKey(users, { 'age': 1, 'active': true }));
console.log("lod.findKey(users, { 'age': 1 })", lod.findKey(users, { 'age': 1, }));
console.log("lod.findKey(users, ['active', false])", lod.findKey(users, ['active', false]));
console.log("lod.findKey(users, 'active')", lod.findKey(users, 'active'));

// es6
const strategy = {};

strategy.functionFindKey = (obj, value) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(value(obj[prop])) return prop;
		}
	}
	return false;
}

strategy.stringFindKey = (obj, value) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(obj[prop][value] !== undefined) return prop;
		}
	}
	return false;
}

strategy.arrayFindKey = (obj, value) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if(obj[prop][value[0]] === value[1]) return prop;
		}
	}
	return false;
}

strategy.objectFindKey = (obj, value) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			let isEqual = false;
				for (let p in value) {
					if(obj[prop][p] === value[p]) isEqual = true;
					if(isEqual === false) break;
				}
				if(isEqual === true) return prop;
		}
	}
	return false;
}

function findKey(obj, value) {
	if(Array.isArray(value)) return strategy['arrayFindKey'](obj, value);
	return strategy[typeof value + 'FindKey'](obj, value);
}

console.log("findKey(users, (o) => o.age < 40)", findKey(users, (o) => o.age < 40));
console.log("findKey(users, { 'age': 1, 'active': true })", findKey(users, { 'age': 1, 'active': true }));
console.log("findKey(users, { 'age': 1 })", findKey(users, { 'age': 1 }));
console.log("findKey(users, ['active', false])", findKey(users, ['active', false]));
console.log("findKey(users, 'active')", findKey(users, 'active'));
