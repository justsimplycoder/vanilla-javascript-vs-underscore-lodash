const und = require('underscore');
const lod = require('lodash');

/**
 * without - Создает массив, исключая все заданные значения, используя SameValueZero для сравнения на равенство.
 */

// underscore
console.log("und.without([2, 1, 2, 3, 1, 4], 1, 2)", und.without([2, 1, 2, 3, 1, 4], 1, 2));

// lodash
console.log("lod.without([2, 1, 2, 3, 1, 4], 1, 2)", lod.without([2, 1, 2, 3, 1, 4], 1, 2));

// es6
function without(arr, ...value) {
	return arr.filter(elem => !value.includes(elem))
}

console.log("without([2, 1, 2, 3, 1, 4], 1, 2)", without([2, 1, 2, 3, 1, 4], 1, 2));
