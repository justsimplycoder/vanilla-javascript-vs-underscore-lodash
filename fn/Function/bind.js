const und = require('underscore');
const lod = require('lodash');

/**
 * bind - Создает функцию, которая вызывает func с привязкой this для thisArg и партиалов, добавленных перед аргументами, которые она получает.
 */

function greet(greeting) {
  return greeting + ' ' + this.user;
}

const object = { 'user': 'Fred' };

// underscore
console.log("und.bind(greet, object, 'hi')()", und.bind(greet, object, 'hi')());

// lodash

console.log("lod.bind(greet, object, 'hi')()", lod.bind(greet, object, 'hi')());

// es6
console.log("greet.bind(object)('hi')", greet.bind(object)('hi'));