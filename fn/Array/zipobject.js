const und = require('underscore');
const lod = require('lodash');

/**
 * zipObject - Этот метод подобен _.fromPairs, за исключением того, что он принимает два массива, один из идентификаторов свойств и один из соответствующих значений.
 */

// lodash
console.log("lod.zipObject(['b', 'a'], [1, 2])", lod.zipObject(['b', 'a'], [1, 2]));

// es6
function zipObject(arr1, arr2) {
	var obj = {};
	for(let i = 0;i < arr1.length;i++) {
		obj[arr1[i]] = arr2[i];
	}
	return obj;
}

console.log("zipObject(['b', 'a'], [1, 2])", zipObject(['b', 'a'], [1, 2]));