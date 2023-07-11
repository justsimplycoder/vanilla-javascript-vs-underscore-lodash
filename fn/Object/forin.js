const und = require('underscore');
const lod = require('lodash');

/**
 * forIn - Перебирает собственные и унаследованные перечисляемые строковые свойства объекта и вызывает итерацию для каждого свойства.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forIn(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
function forIn(obj, callback) {
	for (let key in obj) {
		callback(obj[key], key);
	}
}

forIn(new Foo, function (value, key) {
	console.log(key, value);
});