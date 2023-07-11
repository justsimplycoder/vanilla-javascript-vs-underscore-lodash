const und = require('underscore');
const lod = require('lodash');

/**
 * take - Создает срез массива с n элементами, взятыми с самого начала.
 */

// lodash
console.log("lod.take([1, 2, 3])", lod.take([1, 2, 3]));
console.log("lod.take([1, 2, 3], 2)", lod.take([1, 2, 3], 2));
console.log("lod.take([1, 2, 3], 5)", lod.take([1, 2, 3], 5));

// es6
console.log("[1, 2, 3].slice(0, 1)", [1, 2, 3].slice(0, 1));
console.log("[1, 2, 3].slice(0, 2)", [1, 2, 3].slice(0, 2));
console.log("[1, 2, 3].slice(0, 5)", [1, 2, 3].slice(0, 5));
