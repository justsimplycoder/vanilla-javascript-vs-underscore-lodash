const und = require('underscore');
const lod = require('lodash');

/**
 * unionWith - Этот метод похож на _.unzip, за исключением того, что он принимает итерацию, чтобы указать, как следует комбинировать перегруппированные значения.
 */

// lodash
var objectsUnionWith = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var othersUnionWith = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(
	"lod.unionWith(objectsUnionWith, othersUnionWith, lod.isEqual)",
	lod.unionWith(objectsUnionWith, othersUnionWith, lod.isEqual)
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

function unionWith(arr1, arr2, callback) {
	const result = [...new Set(arr1)];

	result.forEach(elArr1 => {
		const findElement = arr2.find(elArr2 => {
			if(callback(elArr1, elArr2) === true) {
				return elArr2;
			} else {
				return undefined;
			}
		});
		if(findElement !== undefined) {
			result.push(findElement);
		}
	});

	return result;
}

console.log(
	"unionWith(objectsUnionWith, othersUnionWith, equalObject)",
	unionWith(objectsUnionWith, othersUnionWith, equalObject)
);