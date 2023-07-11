const und = require('underscore');
const lod = require('lodash');

/**
 * isPlainObject - Проверяет, является ли value простым объектом, то есть объектом, созданным конструктором Object, или объектом с [[Prototype]] равным null.
 */

// lodash
function Foo() {
  this.a = 1;
}

console.log("lod.isPlainObject(new Foo)", lod.isPlainObject(new Foo));
console.log("lod.isPlainObject([1, 2, 3])", lod.isPlainObject([1, 2, 3]));
console.log("lod.isPlainObject({ 'x': 0, 'y': 0 })", lod.isPlainObject({ 'x': 0, 'y': 0 }));
console.log("lod.isPlainObject(Object.create(null))", lod.isPlainObject(Object.create(null)));

// es6
function isPlainObject(obj) {
	return Object.getPrototypeOf(obj) === Object.prototype || Object.getPrototypeOf(obj) === null;
}

console.log("isPlainObject(new Foo)", isPlainObject(new Foo));
console.log("isPlainObject([1, 2, 3])", isPlainObject([1, 2, 3]));
console.log("isPlainObject({ 'x': 0, 'y': 0 })", isPlainObject({ 'x': 0, 'y': 0 }));
console.log("isPlainObject(Object.create(null))", isPlainObject(Object.create(null)));
