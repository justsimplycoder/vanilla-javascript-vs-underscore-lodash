const und = require('underscore');
const lod = require('lodash');

/**
 * functionsIn - Создает массив имен свойств функций из собственных и унаследованных перечисляемых свойств объекта.
 */
function Foo() {
  this.a = () => 'a';
  this.b = function() { return 'b' };
  this.c = 'c';
}

Foo.prototype.d = function() { return 'd' };

// lodash
console.log("lod.functionsIn(new Foo)", lod.functionsIn(new Foo));

// es6
function functionsIn(obj) {
  const result = [];
  for (let prop in obj) {
    if (typeof obj[prop] === 'function') {
      result.push(prop);
    }
  }
  return result;
}

console.log("functionsIn(new Foo)", functionsIn(new Foo));
