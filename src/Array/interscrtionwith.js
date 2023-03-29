const und = require('underscore');
const lod = require('lodash');

/**
 * intersectionWith - Этот метод похож на _.intersection, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массивов.
 */

const arr1 = [{'x':1, 'y':2}, {'x':2, 'y':1}];
const arr2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

// lodash
console.log("lod.intersectionWith(arr1, arr2, lod.isEqual)", lod.intersectionWith(arr1, arr2, lod.isEqual));

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

function intersectionWith(obj1, obj2, callback) {
	var arr = [];

	for(let elem of obj2) {
		let isEqualObject = false;
		for(let item of obj1) {
			if(callback(elem, item)) {
				arr.push(item);
			}
		}
	}

	return arr;
}

console.log(`intersectionWith(arr1, arr2, equalObject)`, intersectionWith(arr1, arr2, equalObject));
