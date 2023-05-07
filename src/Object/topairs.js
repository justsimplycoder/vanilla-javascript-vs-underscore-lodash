const und = require('underscore');
const lod = require('lodash');

/**
 * toPairs - Создает массив собственных перечисляемых пар ключ-значение
 */

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

// lodash
console.log("lod.toPairs(new Foo)", lod.toPairs(new Foo));
console.log("lod.entries(new Foo)", lod.entries(new Foo)); // alias

// es6
console.log("Object.entries(new Foo)", Object.entries(new Foo));
