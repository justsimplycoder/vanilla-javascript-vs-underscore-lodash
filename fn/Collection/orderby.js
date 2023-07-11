const und = require('underscore');
const lod = require('lodash');

/**
 * orderBy - Этот метод похож на _.sortBy, за исключением того, что он позволяет указать порядок сортировки итераций для сортировки.
 */

var users = [
	{ 'user': 'fred', 'age': 48 },
	{ 'user': 'barney', 'age': 34 },
	{ 'user': 'fred', 'age': 40 },
	{ 'user': 'barney', 'age': 36 }
];

// lodash
console.log("lod.orderBy(users, ['user', 'age'], ['asc', 'desc'])", lod.orderBy(users, ['user', 'age'], ['asc', 'desc']));

// es6
// Вариант 1
// универсальная функция сравнения объекта по нескольким полям
// взято https://habr.com/ru/post/279867/
function compare(field, order) {
	var len = arguments.length;
	if (len === 0) {
		return (a, b) => (a < b && -1) || (a > b && 1) || 0;
	}
	if (len === 1) {
		switch (typeof field) {
			case 'number':
				return field < 0 ?
					((a, b) => (a < b && 1) || (a > b && -1) || 0) :
					((a, b) => (a < b && -1) || (a > b && 1) || 0);
			case 'string':
				return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
		}
	}
	if (len === 2 && typeof order === 'number') {
		return order < 0 ?
			((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
			((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
	}
	var fields, orders;
	if (typeof field === 'object') {
		fields = Object.getOwnPropertyNames(field);
		orders = fields.map(key => field[key]);
		len = fields.length;
	} else {
		fields = new Array(len);
		orders = new Array(len);
		for (let i = len; i--;) {
			fields[i] = arguments[i];
			orders[i] = 1;
		}
	}
	return (a, b) => {
		for (let i = 0; i < len; i++) {
			if (a[fields[i]] < b[fields[i]]) return orders[i];
			if (a[fields[i]] > b[fields[i]]) return -orders[i];
		}
		return 0;
	};
}

console.log("users.sort(compare({user: 1, age: -1}))", users.sort(compare({ user: -1, age: 1 })));

// Вариант 2
console.log(
`users.sort(function(a, b) {
  if (b.user > a.user) return -1;
  if (b.user < a.user) return 1;
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;
  return 0;
})\n`,
	users.sort(function(a, b) {
		if (b.user > a.user) return -1;
		if (b.user < a.user) return 1;
		if (a.age > b.age) return -1;
		if (a.age < b.age) return 1;
		return 0;
	})
);