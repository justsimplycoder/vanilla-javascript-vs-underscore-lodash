const und = require('underscore');
const lod = require('lodash');

/**
 * flatten - Выравнивает массив на один уровень в глубину.
 */

const arr = [1, [2, [3, [4]], 5]];

// lodash
console.log("lod.flatten(arr)", lod.flatten(arr));

// underscore
console.log("und.flatten(arr)", und.flatten(arr, true));

// es6
console.log("arr.flat(1)", arr.flat(1));
console.log("arr.flat()", arr.flat());
