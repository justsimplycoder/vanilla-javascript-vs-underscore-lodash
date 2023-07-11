const und = require('underscore');
const lod = require('lodash');

/**
 * repeat - Повторяет заданную строку n раз.
 */

// lodash
console.log("lod.repeat('*', 3)", lod.repeat('*', 3));
console.log("lod.repeat('abc', 2)", lod.repeat('abc', 2));
console.log("lod.repeat('abc', 0)", lod.repeat('abc', 0));

// es6
console.log("'*'.repeat(3)", '*'.repeat(3));
console.log("'abc'.repeat(2)", 'abc'.repeat(2));
console.log("'abc'.repeat(0)", 'abc'.repeat(0));
