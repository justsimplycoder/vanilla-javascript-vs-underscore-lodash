const und = require('underscore');
const lod = require('lodash');

/**
 * nth - Получает элемент с индексом n массива. Если n отрицательно, возвращается n-й элемент с конца.
 */

const arr = ['a', 'b', 'c', 'd'];

// lodash
console.log("lod.nth(arr, 1)", lod.nth(arr, 1));
console.log("lod.nth(arr, -2)", lod.nth(arr, -2));

// es6
console.log("arr[1]", arr[1]);
console.log("arr[arr.length - 2]", arr[arr.length - 2]);
console.log("arr.slice(-2)[0]", arr.slice(-2)[0]);
