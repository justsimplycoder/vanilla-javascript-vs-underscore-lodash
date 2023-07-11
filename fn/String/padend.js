const und = require('underscore');
const lod = require('lodash');

/**
 * padEnd - Добавляет пробельные символы в конце строки, если она короче длины
 */

// lodash
console.log("lod.padEnd('abc', 6)", lod.padEnd('abc', 6));
console.log("lod.padEnd('abc', 6, '_-')", lod.padEnd('abc', 6, '_-'));
console.log("lod.padEnd('abc', 3)", lod.padEnd('abc', 3));

// es6
console.log("'abc'.padEnd(6)", 'abc'.padEnd(6));
console.log("'abc'.padEnd(6, '_-')", 'abc'.padEnd(6, '_-'));
console.log("'abc'.padEnd(3)", 'abc'.padEnd(3));