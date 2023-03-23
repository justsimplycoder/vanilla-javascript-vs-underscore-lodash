const und = require('underscore');
const lod = require('lodash');

/**
 * compact - Создает массив, в котором удалены все ложные значения. Значения false, null, 0, '', undefined и NaN являются ложными.
 */

const arr = [0, 1, false, 2, '', undefined, null, NaN];

// underscore
console.log("und.compact(arr)", und.compact(arr));
// => [ 1, 2 ]

// lodash
console.log("lod.compact(arr)", lod.compact(arr));
// => [ 1, 2 ]

// Vanilla JavaScript
function compact(arr) {
	return arr.filter(elem => Boolean(elem) != false);
}
console.log("compact(arr)", compact(arr));
// => [ 1, 2 ]