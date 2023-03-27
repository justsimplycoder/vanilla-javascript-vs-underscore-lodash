const und = require('underscore');
const lod = require('lodash');

/**
 * findLastIndex - Этот метод похож на _.findIndex, за исключением того, что он перебирает элементы коллекции справа налево.
 */

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

// lodash
console.log(
	"lod.findLastIndex(users, function(o) { return o.user == 'barney'; })",
	lod.findLastIndex(users, function(o) { return o.user == 'barney'; })
);
// => 0
console.log(
	"lod.findLastIndex(users, { 'user': 'fred', 'active': false })",
	lod.findLastIndex(users, { 'user': 'fred', 'active': false })
);
// => 1
console.log("lod.findLastIndex(users, ['active', false])", lod.findLastIndex(users, ['active', false]));
// => 1
console.log("lod.findLastIndex(users, 'active')", lod.findLastIndex(users, 'active'));
// => 2

// underscore
console.log(
	"und.findLastIndex(users, function(o) { return o.user == 'barney'; })",
	und.findLastIndex(users, function(o) { return o.user == 'barney'; })
);
// => 0
console.log(
	"und.findLastIndex(users, { 'user': 'fred', 'active': false })",
	und.findLastIndex(users, { 'user': 'fred', 'active': false })
);
// => 1
console.log("und.findLastIndex(users, ['active', false])", und.findLastIndex(users, ['active', false]));
// => -1
console.log("und.findLastIndex(users, 'active')", und.findLastIndex(users, 'active'));
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
	"users.findLastIndex(o => o.user === 'barney')",
	users.findLastIndex(o => o.user === 'barney')
);
// => 0
console.log(
	"users.findLastIndex(o => equalObject(o, { 'user': 'fred', 'active': false }))",
	users.findLastIndex(o => equalObject(o, { 'user': 'fred', 'active': false }))
);
// => 1
console.log(
	"users.findLastIndex(o => o.active === false)",
	users.findLastIndex(o => o.active === false)
);
// => 1
console.log(
	"users.findLastIndex(o => Boolean(o.active) === true)",
	users.findLastIndex(o => Boolean(o.active) === true)
);
// => 2