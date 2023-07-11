const und = require('underscore');
const lod = require('lodash');

/**
 * valuesIn - Создает массив собственных и унаследованных перечисляемых строковых значений свойств объекта.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// lodash
console.log("lod.valuesIn(new Foo)", lod.valuesIn(new Foo));

// es6
function valuesIn(obj) {
	let arr = [];
	for (let prop in obj) {
		arr.push(obj[prop]);
	}
	return arr;
}

console.log("valuesIn(new Foo)", valuesIn(new Foo));