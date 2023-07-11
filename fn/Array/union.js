const und = require('underscore');
const lod = require('lodash');

/**
 * union - Создает массив уникальных значений по порядку из всех заданных массивов, используя SameValueZero для сравнения на равенство.
 */
// underscore
console.log("und.union([2], [1, 2, 3, 4])", und.union([2], [1, 2, 3, 4]));
console.log("und.union([2, 3], [1, 2, 3, 4])", und.union([2, 3], [1, 2, 3, 4]));

// lodash
console.log("lod.union([2], [1, 2, 3, 4])", lod.union([2], [1, 2, 3, 4]));
console.log("lod.union([2, 3], [1, 2, 3, 4])", lod.union([2, 3], [1, 2, 3, 4]));

// es6
function union(arr, arrInsert) {
	let setUnionElem = new Set([...arr, ...arrInsert]);
	return Array.from(setUnionElem);
}
console.log("union([2], [1, 2, 3, 4])", union([2], [1, 2, 3, 4]));
console.log("union([2, 3], [1, 2, 3, 4])", union([2, 3], [1, 2, 3, 4]));