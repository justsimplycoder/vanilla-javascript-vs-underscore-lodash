const und = require('underscore');
const lod = require('lodash');

/**
 * pullAll - Этот метод похож на _.pull, за исключением того, что он принимает массив значений для удаления.
 */

// lodash
var arr = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log("lod.pullAll(arr, ['a', 'c'])", lod.pullAll(arr, ['a', 'c']));

// es6
function pullAll(arr, value) {
	return arr.filter(function(elem) {
		return value.indexOf(elem) == -1;
	});
}

console.log("pullAll(arr, ['a', 'c'])", pullAll(arr, ['a', 'c']));





