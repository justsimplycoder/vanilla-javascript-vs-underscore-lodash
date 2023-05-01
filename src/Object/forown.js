const und = require('underscore');
const lod = require('lodash');

/**
 * forOwn - Перебирает собственные перечисляемые свойства объекта.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forOwn(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
function forOwn(obj, callback) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			callback(obj[key], key);
		}
	}
}

forOwn(new Foo, function (value, key) {
	console.log(key, value);
});
