const und = require('underscore');
const lod = require('lodash');

/**
 * pullAllWith - Этот метод подобен _.pullAll, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массива со значениями.
 */

// lodash
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
lod.pullAllWith(array, [{ 'x': 3, 'y': 4 }], lod.isEqual);
console.log(array);

// es6
function equalObject(...objects) {
	var arrEqual = objects.map(function (elem) {
		return Object.entries(elem).sort(function(a, b) {
			if (a[0] > b[0]) {
				return 1;
			}
			if (a[0] < b[0]) {
				return -1;
			}
			return 0;
		});
	});

	return JSON.stringify(arrEqual[0]) == JSON.stringify(arrEqual[1]);
}

var array2 = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
array2 = array2.filter(el => !equalObject(el, { 'x': 3, 'y': 4 }))
console.log(array2);
