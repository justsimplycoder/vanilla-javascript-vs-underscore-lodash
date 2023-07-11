const und = require('underscore');
const lod = require('lodash');

/**
 * dropRight - Создает срез массива с n элементами, удаленными с конца.
 */

const arr = [5, 4, 3, 2, 1];

// lodash
console.log("lod.dropRight(arr)", lod.dropRight(arr));
console.log("lod.dropRight(arr, 2)", lod.dropRight(arr, 2));
console.log("lod.dropRight(arr, 6)", lod.dropRight(arr, 6));
console.log("lod.dropRight(arr, 0)", lod.dropRight(arr, 0));

// es6
console.log("arr.slict(-1)", arr.slice(0, -1));
console.log("arr.slice(0, -2)", arr.slice(0, -2));
console.log("arr.slice(0, -6)", arr.slice(0, -6));
console.log("arr.slice()", arr.slice());