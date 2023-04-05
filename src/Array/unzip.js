const und = require('underscore');
const lod = require('lodash');

/**
 * unzip - Этот метод подобен _.zip, за исключением того, что он принимает массив сгруппированных элементов и создает массив, перегруппировывая элементы до их конфигурации до архивирования.
 */

// underscore
console.log("und.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ])", und.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]));

// lodash
console.log("lod.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ])", lod.unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]));

// es6
function unzip(arr) {
	var arrUnzip = [];
	arr[0].forEach(function (elem, index) {
		arrUnzip.push([elem, arr[1][index]]);
	});
	return arrUnzip;
}

console.log("unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ])", unzip([ [ 'a', 1, true ], [ 'b', 2, false ] ]));