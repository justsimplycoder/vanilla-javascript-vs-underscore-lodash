const und = require('underscore');
const lod = require('lodash');

/**
 * bindKey - Создает функцию, которая вызывает метод в object[key] с частью аргументов
 */

const object = {
  'user': 'Fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

// lodash

const bound = lod.bindKey(object, 'greet', 'Hi');
console.log(bound('!'));

// es6
const mybound = object.greet.bind(object, 'Hi');
console.log(mybound('!'));
