const und = require('underscore');
const lod = require('lodash');

/**
 * remove - Удаляет все элементы из массива, для которого предикат возвращает истину, и возвращает массив удаленных элементов.
 */

const arr = [1, 2, 3, 4];

// lodash
const evens = lod.remove(arr, n => n % 2 == 0);
console.log("evens", evens);
console.log("arr", arr);

// es6
const arr2 = [1, 2, 3, 4];

const evens2 = arr2.filter(function(elem, index, arr) {
	if(elem % 2 == 0){
		arr.splice(index, 1);
		return true;
	} else {
		return false;
	}
});

console.log("evens2", evens2);
console.log("arr2", arr2);
