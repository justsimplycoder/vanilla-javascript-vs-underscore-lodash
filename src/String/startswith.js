const und = require('underscore');
const lod = require('lodash');

/**
 * startsWith - Проверяет, начинается ли строка с заданной целевой строки.
 */

// lodash
console.log("lod.startsWith('abc', 'a')", lod.startsWith('abc', 'a'));
console.log("lod.startsWith('abc', 'b')", lod.startsWith('abc', 'b'));
console.log("lod.startsWith('abc', 'b', 1)", lod.startsWith('abc', 'b', 1));

// es6
console.log("'abc'.startsWith('a')", 'abc'.startsWith('a'));
console.log("'abc'.startsWith('b')", 'abc'.startsWith('b'));
console.log("'abc'.startsWith('b', 1)", 'abc'.startsWith('b', 1));