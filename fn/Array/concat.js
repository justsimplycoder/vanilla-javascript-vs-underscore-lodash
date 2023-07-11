const lod = require('lodash');

/**
 * concat - Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.
 */

const arr = [1];

// lodash
console.log("lod.concat(arr, 2, [3], [[4]])", lod.concat(arr, 2, [3], [[4]]));
// => [ 1, 2, 3, [ 4 ]]

// es6
console.log("[...arr, 2, ...[3], ...[[4]]]", [...arr, 2, ...[3], ...[[4]]]);
// => [ 1, 2, 3, [ 4 ]]
console.log("arr.concat(2, [3], [[4]])", arr.concat(2, [3], [[4]]));
// => [ 1, 2, 3, [ 4 ]]