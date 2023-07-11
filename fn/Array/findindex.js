const und = require('underscore');
const lod = require('lodash');

/**
 * findIndex - Этот метод подобен _.find, за исключением того, что он возвращает индекс первого элемента, предикат возвращает true вместо самого элемента.
 */

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

// lodash
console.log(
	"lod.findIndex(users, function(o) { return o.user == 'barney'; })",
	lod.findIndex(users, function(o) { return o.user == 'barney'; })
);
// => 0
console.log(
	"lod.findIndex(users, { 'user': 'fred', 'active': false })",
	lod.findIndex(users, { 'user': 'fred', 'active': false })
);
// => 1
console.log("lod.findIndex(users, ['active', false])", lod.findIndex(users, ['active', false]));
// => 0
console.log("lod.findIndex(users, 'active')", lod.findIndex(users, 'active'));
// => 2

// underscore
console.log(
	"und.findIndex(users, function(o) { return o.user == 'barney'; })",
	und.findIndex(users, function(o) { return o.user == 'barney'; })
);
// => 0
console.log(
	"und.findIndex(users, { 'user': 'fred', 'active': false })",
	und.findIndex(users, { 'user': 'fred', 'active': false })
);
// => 1
console.log("und.findIndex(users, ['active', false])", und.findIndex(users, ['active', false]));
// => -1
console.log("und.findIndex(users, 'active')", und.findIndex(users, 'active'));
// => 2

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

console.log(
	"users.findIndex(o => o.user === 'barney')",
	users.findIndex(o => o.user === 'barney')
);
// => 0
console.log(
	"users.findIndex(o => equalObject(o, { 'user': 'fred', 'active': false }))",
	users.findIndex(o => equalObject(o, { 'user': 'fred', 'active': false }))
);
// => 1
console.log(
	"users.findIndex(o => o.active === false)",
	users.findIndex(o => o.active === false)
);
// => 0
console.log(
	"users.findIndex(o => Boolean(o.active) === true)",
	users.findIndex(o => Boolean(o.active) === true)
);
// => 2