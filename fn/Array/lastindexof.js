const und = require('underscore');
const lod = require('lodash');

/**
 * lastIndexOf - Этот метод похож на _.indexOf, за исключением того, что он перебирает элементы массива справа налево.
 */

const arr = [1, 2, 1, 3, 2];

// underscore
console.log("und.lastIndexOf(arr, 2)", und.lastIndexOf(arr, 2));
console.log("und.lastIndexOf(arr, 2, 2)", und.lastIndexOf(arr, 2, 2));

// lodash
console.log("lod.lastIndexOf(arr, 2)", lod.lastIndexOf(arr, 2));
console.log("lod.lastIndexOf(arr, 2, 2)", lod.lastIndexOf(arr, 2, 2));

// es6
console.log("arr.lastIndexOf(2)", arr.lastIndexOf(2));
console.log("arr.lastIndexOf(2, 2)", arr.lastIndexOf(2, 2));