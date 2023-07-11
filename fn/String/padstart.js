const und = require('underscore');
const lod = require('lodash');

/**
 * padStart - Добавляет пробельные символы в начало строки, если она короче длины
 */

// lodash
console.log("lod.padStart('abc', 6)", lod.padStart('abc', 6));
console.log("lod.padStart('abc', 6, '_-')", lod.padStart('abc', 6, '_-'));
console.log("lod.padStart('abc', 3)", lod.padStart('abc', 3));

// es6
console.log("'abc'.padStart(6)", 'abc'.padStart(6));
console.log("'abc'.padStart(6, '_-')", 'abc'.padStart(6, '_-'));
console.log("'abc'.padStart(3)", 'abc'.padStart(3));