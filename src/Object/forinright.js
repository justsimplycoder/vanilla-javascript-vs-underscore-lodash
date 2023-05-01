const und = require('underscore');
const lod = require('lodash');

/**
 * forInRight - Этот метод похож на _.forIn, за исключением того, что он перебирает свойства объекта в обратном порядке.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
lod.forInRight(new Foo, function(value, key) {
	console.log(key, value);
});

// es6
function forInRight(obj, callback) {
	let arr = [];
	for (let prop in obj) {
		arr.push([prop, obj[prop]]);
	}
	for (let i = arr.length - 1; i >= 0; --i) {
		callback(arr[i][1], arr[i][0])
	}
}

forInRight(new Foo, function (value, key) {
	console.log(key, value);
});