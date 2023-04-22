const und = require('underscore');
const lod = require('lodash');

/**
 * endsWith - Проверяет, заканчивается ли строка заданной целевой строкой.
 */

// lodash
console.log("lod.endsWith('abc', 'c')", lod.endsWith('abc', 'c'));
console.log("lod.endsWith('abc', 'b')", lod.endsWith('abc', 'b'));
console.log("lod.endsWith('abc', 'b', 2)", lod.endsWith('abc', 'b', 2));

// es6
console.log("'abc'.endsWith('c')", 'abc'.endsWith('c'));
console.log("'abc'.endsWith('b')", 'abc'.endsWith('b'));
console.log("'abc'.endsWith('b', 2)", 'abc'.endsWith('b', 2));