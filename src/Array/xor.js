const und = require('underscore');
const lod = require('lodash');

/**
 * xor - Создает массив уникальных значений, представляющих собой симметричную разность заданных массивов.
 */

// lodash
console.log("lod.xor([2, 1], [2, 3])", lod.xor([2, 1], [2, 3]));
console.log("lod.xor([2, 1, 2], [2, 3, 1])", lod.xor([2, 1, 2], [2, 3, 1]));
console.log("lod.xor([2, 1, 1], [2, 3, 3])", lod.xor([2, 1, 1], [2, 3, 3]));
console.log("lod.xor([2, 2], [2, 4])", lod.xor([2, 2], [2, 4]));

// es6
function xor(arr1, arr2) {
	let s1 = new Set(arr1);
	let s2 = new Set(arr2);
	s1.forEach(elem => {
		if(s2.has(elem)) {
			s1.delete(elem);
			s2.delete(elem);
		}
	});
	return [...s1, ...s2];
}

console.log("xor([2, 1], [2, 3])", xor([2, 1], [2, 3]));
console.log("xor([2, 1, 2], [2, 3, 1])", xor([2, 1, 2], [2, 3, 1]));
console.log("xor([2, 1, 1], [2, 3, 3])", xor([2, 1, 1], [2, 3, 3]));
console.log("xor([2, 2], [2, 4])", xor([2, 2], [2, 4]));