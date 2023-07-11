const und = require('underscore');
const lod = require('lodash');

/**
 * partition - Создает массив элементов, разбитых на две группы, первая из которых содержит элементы, возвращающие предикат truey for, вторая из которых содержит элементы, возвращаемые предикатом falsey for.
 */

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

// lodash
console.log("lod.partition(users, function(o) { return o.active; })", lod.partition(users, function(o) { return o.active; }));
console.log("lod.partition(users, { 'age': 1, 'active': false })", lod.partition(users, { 'age': 1, 'active': false }));
console.log("lod.partition(users, ['active', false])", lod.partition(users, ['active', false]));

console.log('-----------------------------------------------');

// es6
console.log(
users.reduce((acc, cur) => {
	cur.active ? acc[0].push(cur) : acc[1].push(cur)
	return acc;
}, [[],[]])
);
console.log(
users.reduce((acc, cur) => {
	cur.age === 1 && cur.active === false ? acc[0].push(cur) : acc[1].push(cur)
	return acc;
}, [[],[]])
);
console.log(
users.reduce((acc, cur) => {
	cur.active === false ? acc[0].push(cur) : acc[1].push(cur)
	return acc;
}, [[],[]])
);