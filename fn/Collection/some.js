const und = require('underscore');
const lod = require('lodash');

/**
 * some - Проверяет, возвращает ли предикат истину для какого-либо элемента коллекции.
 */

var users = [
	{ 'user': 'barney', 'active': true },
	{ 'user': 'fred',   'active': false }
];

// underscore
console.log("und.some([null, 0, 'yes', false], Boolean)", und.some([null, 0, 'yes', false], Boolean));
console.log("und.some(users, o => o.user == 'barney' && o.active === false)", und.some(users, o => o.user == 'barney' && o.active === false));
console.log("und.some(users, o => o.active === false)", und.some(users, o => o.active === false));
console.log("und.some(users, o => 'active' in o)", und.some(users, o => 'active' in o));

// lodash
console.log("lod.some([null, 0, 'yes', false], Boolean)", lod.some([null, 0, 'yes', false], Boolean));
console.log("lod.some(users, { 'user': 'barney', 'active': false })", lod.some(users, { 'user': 'barney', 'active': false }));
console.log("lod.some(users, ['active', false])", lod.some(users, ['active', false]));
console.log("lod.some(users, 'active')", lod.some(users, 'active'));

// es6
console.log("[null, 0, 'yes', false].some(Boolean)", [null, 0, 'yes', false].some(Boolean));
console.log("users.some(o => o.user == 'barney' && o.active === false)", users.some(o => o.user == 'barney' && o.active === false));
console.log("users.some(o => o.active === false)", users.some(o => o.active === false));
console.log("users.some(o => 'active' in o)", users.some(o => o['active']));