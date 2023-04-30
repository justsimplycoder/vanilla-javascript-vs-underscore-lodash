const und = require('underscore');
const lod = require('lodash');

/**
 * toPlainObject - конвертирует объект в новый, но со свойствами прототипа
 */

function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

// lodash
console.log("lod.assign({ 'a': 1 }, new Foo)", lod.assign({ 'a': 1 }, new Foo));
console.log("lod.assign({ 'a': 1 }, lod.toPlainObject(new Foo))", lod.assign({ 'a': 1 }, lod.toPlainObject(new Foo)));

// es6
function toPlainObject(obj) {
	const objNew = {};
	for (let prop in obj) {
		objNew[prop] = obj[prop]
	}
	return objNew;
}

console.log("Object.assign({ 'a': 1 }, new Foo)", Object.assign({ 'a': 1 }, new Foo));
console.log("Object.assign({ 'a': 1 }, toPlainObject(new Foo))", Object.assign({ 'a': 1 }, toPlainObject(new Foo)));
