const und = require('underscore');
const lod = require('lodash');

/**
 * values - Создает массив значений собственных перечисляемых строковых ключей объекта.
 */

function Foo() {
	this.a = 1;
	this.b = 2;
}

Foo.prototype.c = 3;

// underscore
console.log("und.values(new Foo)", und.values(new Foo));
console.log("und.values('hi')", und.values('hi')); // -> []

// lodash
console.log("lod.values(new Foo)", lod.values(new Foo));
console.log("lod.values('hi')", lod.values('hi'));

// es6
console.log("Object.values(new Foo)", Object.values(new Foo));
console.log("Object.values('hi')", Object.values('hi'));