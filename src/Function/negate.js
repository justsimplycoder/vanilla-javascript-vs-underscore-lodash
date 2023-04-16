const und = require('underscore');
const lod = require('lodash');

/**
 * negate - Создает функцию, которая инвертирует результат предиката func.
 */

function isEven(n) {
  return n % 2 == 0;
}

const arr = [1, 2, 3, 4, 5, 6];

// underscore
console.log("und.filter(arr, isEven)", und.filter(arr, isEven));
console.log("und.filter(arr, und.negate(isEven))", und.filter(arr, und.negate(isEven)));

// lodash
console.log("lod.filter(arr, isEven)", lod.filter(arr, isEven));
console.log("lod.filter(arr, lod.negate(isEven))", lod.filter(arr, lod.negate(isEven)));

// es6
console.log("arr.filter(e => isEven(e))", arr.filter(isEven));
console.log("arr.filter(e => !isEven(e))", arr.filter(e => !isEven(e)));