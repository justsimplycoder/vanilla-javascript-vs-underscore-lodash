const und = require('underscore');
const lod = require('lodash');

/**
 * takeRight - Создает срез массива с n элементами, взятыми с конца.
 */

// lodash
console.log("lod.takeRight([1, 2, 3])", lod.takeRight([1, 2, 3]));
console.log("lod.takeRight([1, 2, 3], 2)", lod.takeRight([1, 2, 3], 2));
console.log("lod.takeRight([1, 2, 3], 5)", lod.takeRight([1, 2, 3], 5));

// es6
console.log("[1, 2, 3].slice(-1)", [1, 2, 3].slice(-1));
console.log("[1, 2, 3].slice(-2)", [1, 2, 3].slice(-2));
console.log("[1, 2, 3].slice(-5)", [1, 2, 3].slice(-5));
