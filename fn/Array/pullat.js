const und = require('underscore');
const lod = require('lodash');

/**
 * pullAt - Удаляет элементы из массива, соответствующие индексам, и возвращает массив удаленных элементов.
 */

// lodash
var arr = ['a', 'b', 'c', 'd'];
var pulled = lod.pullAt(arr, [1, 3]);

console.log("arr", arr);
console.log('pulled', pulled);

// es6
var arr1 = ['a', 'b', 'c', 'd'];

function pullAt(arr, value) {
	var array = [];
	value[0]++; // необходимо для правельной работы цикла
	// за каждый проход создаётся массив искомых элементов и уменьшается исходный
	value.forEach((elem, index) => {
		array.push(arr[elem - 1]);
		arr.splice(elem - 1, 1);
	});
	return array;
}

var pulled = pullAt(arr1, [1, 3]);

console.log("arr1", arr1);
console.log('pulled', pulled);

