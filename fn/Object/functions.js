const und = require('underscore');
const lod = require('lodash');

/**
 * functions - Создает массив имен свойств функции из собственных перечисляемых свойств объекта.
 */

function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

// lodash
console.log("lod.functions(new Foo)", lod.functions(new Foo));

// es6
function functions(obj) {
  const result = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'function') {
      result.push(prop);
    }
  }
  return result;
}

console.log("functions(new Foo())", functions(new Foo()));