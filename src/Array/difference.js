const und = require('underscore');
const lod = require('lodash');

/**
 * difference - Создает массив значений массива, не включенных в другие заданные массивы, используя SameValueZero для сравнения на равенство. Порядок и ссылки значений результата определяются первым массивом.
 */

// underscore
console.log("und.difference([2, 1, 4], [2, 3, 5])", und.difference([2, 1, 4], [2, 3, 5]));
// => [ 1, 4 ]

// lodash
console.log("lod.difference([2, 1, 4], [2, 3, 5])", lod.difference([2, 1, 4], [2, 3, 5]));
// => [ 1, 4 ]

// es6
function difference(arr, value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
}

console.log("difference([2, 1, 4], [2, 3, 5])", difference([2, 1, 4], [2, 3, 5]));
// => [ 1, 4 ]

