const und = require('underscore');
const lod = require('lodash');

/**
 * sortBy - Создает массив элементов, отсортированных в порядке возрастания по результатам выполнения каждого элемента в коллекции через каждую итерацию.
 */

var users = [
	{ 'user': 'fred',   'age': 48 },
	{ 'user': 'barney', 'age': 56 },
	{ 'user': 'fred',   'age': 40 },
	{ 'user': 'barney', 'age': 34 }
];

// lodash
console.log("lod.sortBy(users, [(o) => o.user ])", lod.sortBy(users, [(o) => o.user ]));
console.log("lod.sortBy(users, ['user', 'age'])", lod.sortBy(users, ['user', 'age']));

// underscore
console.log(
	"und.sortBy(users, (o) => o.user)",
	und.sortBy(users, (o) => o.user)
);
console.log(
	"und.sortBy(users, 'user')",
	und.sortBy(users, 'user')
);
// Сортивровки по нескольким полям нет

// es6
function sortUser(a, b) {
	if (a.user > b.user) return 1;
	if (a.user < b.user) return -1;
	return 0;
}

console.log("users.sort(sortUser)", users.sort(sortUser));

function sortUserAge(a, b) {
	if (a.user > b.user) return 1;
	if (a.user < b.user) return -1;
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

console.log("users.sort(sortUserAge)", users.sort(sortUserAge));