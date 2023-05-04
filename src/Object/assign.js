const und = require('underscore');
const lod = require('lodash');

/**
 * assign - Присваивает собственные перечисляемые строковые свойства исходных объектов целевому объекту.
 */

function Foo() {
  this.a = 1;
}

Foo.prototype.b = 2;

function Bar() {
  this.c = 3;
}

Bar.prototype.d = 4;

console.log("lod.assign({ 'a': 0 }, new Foo, new Bar)", lod.assign({ 'a': 0 }, new Foo, new Bar));

// es6
console.log("Object.assign({ 'a': 0 }, new Foo, new Bar)", Object.assign({ 'a': 0 }, new Foo, new Bar));
console.log("{...{'a': 0}, ...new Foo, ...new Bar}", {...{'a': 0}, ...new Foo, ...new Bar});