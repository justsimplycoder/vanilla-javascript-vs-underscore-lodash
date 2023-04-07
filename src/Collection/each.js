const und = require('underscore');
const lod = require('lodash');

/**
 * forEach - Перебирает элементы коллекции и вызывает iteratee для каждого элемента. Итерируемый объект вызывается с тремя аргументами: (значение, индекс|ключ, коллекция). Итерируемые функции могут выйти из итерации досрочно, явно возвращая false.
 */

// underscore
und.each([1, 2], (value) => {
	console.log(value * 2);
});
und.each({ 'a': 1, 'b': 2 }, (value, key, list) => {
	console.log(key);
});

// lodash
lod.forEach([1, 2], (value) => {
	console.log(value * 2);
});
lod.each({ 'a': 1, 'b': 2 }, (value, key) => {
	console.log(key);
});

// es6
[1, 2].forEach(value => {
	console.log(value * 2)
});

Object.keys({ 'a': 1, 'b': 2 }).forEach(key => {
	console.log(key)
});