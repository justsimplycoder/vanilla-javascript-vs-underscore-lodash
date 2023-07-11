const und = require('underscore');
const lod = require('lodash');

/**
 * intersection - возвращает массив значений из первого массива, которые присутствует во втором массиве
 */

// underscore
console.log("und.intersection([2, 1], [2, 3])", und.intersection([2, 1], [2, 3]));

// lodash
console.log("lod.intersection([2, 1], [2, 3])", lod.intersection([2, 1], [2, 3]));

// es6
function intersection(arr, value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) != -1;
	});
}

console.log("intersection([2, 1], [2, 3])", intersection([2, 1], [2, 3]));

