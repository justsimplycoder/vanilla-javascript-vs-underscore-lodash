const und = require('underscore');
const lod = require('lodash');

/**
 * initial - возвращает все кроме последнего элемента массива
 */

const arr = [1, 2, 3, 4, 5];

// lodash
console.log("lod.initial(arr)", lod.initial(arr));

// underscore
console.log("und.initial(arr)", und.initial(arr));

// es6
console.log("arr.slice(0, -1)", arr.slice(0, -1));
