const und = require('underscore');
const lod = require('lodash');

/**
 * xorBy - Этот метод похож на _.xor, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массивов
 */

// lodash
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

console.log(
	"lod.xorWith(objects, others, lod.isEqual)",
	lod.xorWith(objects, others, lod.isEqual)
);

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

function xorWith(arr1, arr2, comparator) {
	let array1 = [...arr1];
	let array2 = [...arr2];

	array1.forEach((el, index) => {
		const length = array2.length;
		array2 = array2.filter(item => equalObject(el, item));
		if(length !== array2.length) {
			array1.splice(index, 1)
		}
	});

	return [...array1, ...array2];
}

console.log(
	"xorWith(objects, others, equalObject)",
	xorWith(objects, others, equalObject)
);
