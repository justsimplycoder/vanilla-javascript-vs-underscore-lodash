const und = require('underscore');
const lod = require('lodash');

/**
 * includes - Проверяет, находится ли значение в коллекции.
 */

// lodash
console.log("lod.includes([1, 2, 3], 1)", lod.includes([1, 2, 3], 1));
console.log("lod.includes([1, 2, 3], 1, 2)", lod.includes([1, 2, 3], 1, 2));
console.log("lod.includes({ 'a': 1, 'b': 2 }, 1)", lod.includes({ 'a': 1, 'b': 2 }, 1));
console.log("lod.includes('abcd', 'bc')", lod.includes('abcd', 'bc'));

// es6
console.log("[1, 2, 3].includes(1)", [1, 2, 3].includes(1));
console.log("[1, 2, 3].includes(1, 2)", [1, 2, 3].includes(1, 2));
console.log("Object.values({'a':1, 'b':2}).includes(1)", Object.values({'a':1, 'b':2}).includes(1));
console.log("'abcd'.includes('bc')", 'abcd'.includes('bc'));