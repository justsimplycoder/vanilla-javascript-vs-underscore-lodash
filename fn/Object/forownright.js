const und = require('underscore');
const lod = require('lodash');

/**
 * forOwnRight - Этот метод похож на _.forOwn, за исключением того, что он перебирает свойства объекта в обратном порядке.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forOwnRight(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
function forOwnRight(obj, callback) {
	let arr = Object.entries(obj);
	for (let i = arr.length - 1; i >= 0; --i) {
		callback(arr[i][1], arr[i][0])
	}
}

forOwnRight(new Foo, function (value, key) {
	console.log(key, value);
});
