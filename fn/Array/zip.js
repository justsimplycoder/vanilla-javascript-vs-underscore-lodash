const und = require('underscore');
const lod = require('lodash');

/**
 * zip - Создает массив сгруппированных элементов, первый из которых содержит первые элементы заданных массивов, второй из которых содержит вторые элементы заданных массивов и так далее.
 */

// underscore
console.log("und.zip(['a', 'b'], [1, 2], [true, false])", und.zip(['a', 'b'], [1, 2], [true, false]));
console.log("und.zip([1, 2], [3, 4], [5, 6], [7, 8])", und.zip([1, 2], [3, 4], [5, 6], [7, 8]));

// lodash
console.log("lod.zip(['a', 'b'], [1, 2], [true, false])", lod.zip(['a', 'b'], [1, 2], [true, false]));
console.log("lod.zip([1, 2], [3, 4], [5, 6], [7, 8])", lod.zip([1, 2], [3, 4], [5, 6], [7, 8]));

// es6
function zip(...arr) {
	var arrZip = [[], []];
	arr.forEach(function (elem) {
		arrZip[0].push(elem[0]);
		arrZip[1].push(elem[1]);
	});
	return arrZip;
}

console.log("zip(['a', 'b'], [1, 2], [true, false])", zip(['a', 'b'], [1, 2], [true, false]));
console.log("zip([1, 2], [3, 4], [5, 6], [7, 8])", zip([1, 2], [3, 4], [5, 6], [7, 8]));