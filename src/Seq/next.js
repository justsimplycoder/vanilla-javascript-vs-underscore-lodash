const und = require('underscore');
const lod = require('lodash');

/**
 * next - возвращает следующее значение итератора
 */

// lodash
var wrapped = lod([1, 2]);
console.log("wrapped.next()", wrapped.next());
console.log("wrapped.next()", wrapped.next());
console.log("wrapped.next()", wrapped.next());

// es6
var wrapped2 = [1, 2].values();
console.log("wrapped2.next()", wrapped2.next());
console.log("wrapped2.next()", wrapped2.next());
console.log("wrapped2.next()", wrapped2.next());