const und = require('underscore');
const lod = require('lodash');

/**
 * map - Создает массив значений, запуская каждый элемент в коллекции через итерацию.
 */

var users = [
	{ 'user': 'barney' },
	{ 'user': 'fred' }
];

// underscore
console.log("und.map([4, 8], n => n**2)", und.map([4, 8], n => n**2));
console.log("und.map({ 'a': 4, 'b': 8 }, n => n**2)", und.map({ 'a': 4, 'b': 8 }, n => n**2));
console.log("und.map(users, 'user')", und.map(users, 'user'));

// lodash
console.log("lod.map([4, 8], n => n**2)", lod.map([4, 8], n => n**2));
console.log("lod.map({ 'a': 4, 'b': 8 }, n => n**2)", lod.map({ 'a': 4, 'b': 8 }, n => n**2));
console.log("lod.map(users, 'user')", lod.map(users, 'user'));

// es6
console.log("[4, 8].map(n => n * n)", [4, 8].map(n => n * n));
console.log("Object.values({ 'a': 4, 'b': 8 }).map(n => n**2)", Object.values({ 'a': 4, 'b': 8 }).map(n => n**2));
console.log("users.map(el => el.user)", users.map(el => el.user));