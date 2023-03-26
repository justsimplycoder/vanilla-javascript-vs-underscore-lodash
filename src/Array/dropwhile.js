const und = require('underscore');
const lod = require('lodash');

/**
 * dropWhile - Создает срез массива, исключая элементы, отброшенные с самого начала.
 */

var users = [
	{ 'user': 'barney',  'active': false },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': true }
];

// lodash
console.log("lod.dropWhile(users, function(o) { return !o.active; })", lod.dropWhile(users, function(o) { return !o.active; }));
console.log("lod.dropWhile(users, { 'user': 'barney', 'active': false })", lod.dropWhile(users, { 'user': 'barney', 'active': false }));
console.log("lod.dropWhile(users, ['active', false])", lod.dropWhile(users, ['active', false]));
console.log("lod.dropWhile(users, 'active')", lod.dropWhile(users, 'active'));

// es6
function equalObject(...objects) {
	var arrEqual = objects.map(function (elem) {
		return Object.entries(elem).sort(function(a, b) {
			if (a[0] > b[0]) {
				return 1;
			}
			if (a[0] < b[0]) {
				return -1;
			}
			return 0;
		});
	});
	return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

function dropWhile(arr, condition) {
	if(typeof condition === 'function') {
		return arr.filter(condition);
	} else if (Array.isArray(condition)) {
		return arr.filter(el => el[condition[0]] !== condition[1]);
	} else if (typeof condition === 'object' && condition !== null){
		return arr.filter(el => !equalObject(el, condition));
	} else if (typeof condition === 'string') {
		return arr.filter(el => condition in el)
	} else {
		return arr;
	}
}

console.log("dropWhile(users, function(o) { return !o.active; })", dropWhile(users, function(o) { return o.active; }));
console.log("dropWhile(users, { 'user': 'barney', 'active': false })", dropWhile(users, { 'user': 'barney', 'active': false }));
console.log("dropWhile(users, 'active')", dropWhile(users, 'active'));
console.log("dropWhile(users, ['active', false])", dropWhile(users, ['active', false]));