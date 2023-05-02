const und = require('underscore');
const lod = require('lodash');

/**
 * keysIn - Создает массив имен собственных и унаследованных перечисляемых свойств объекта.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// underscore
console.log("und.allKeys(new Foo)", und.allKeys(new Foo));

// lodash
console.log("lod.keysIn(new Foo)", lod.keysIn(new Foo));

// es6
function keysIn(obj) {
	let arr = [];
	for (let prop in obj) {
		arr.push(prop);
	}
	return arr;
}

console.log("keysIn(new Foo)", keysIn(new Foo));