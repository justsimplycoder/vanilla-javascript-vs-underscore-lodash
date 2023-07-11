const und = require('underscore');
const lod = require('lodash');

/**
 * sortedIndex - Использует двоичный поиск для определения наименьшего индекса, по которому значение должно быть вставлено в массив, чтобы сохранить его порядок сортировки.
 */
// underscore
console.log("und.sortedIndex([10, 30, 50, 60, 70], 40)", und.sortedIndex([10, 30, 50, 60, 70], 40));
console.log("und.sortedIndex([10, 30, 50, 60, 70], 80)", und.sortedIndex([10, 30, 50, 60, 70], 80));

// lodash
console.log("lod.sortedIndex([10, 30, 50, 60, 70], 40)", lod.sortedIndex([10, 30, 50, 60, 70], 40));
console.log("lod.sortedIndex([10, 30, 50, 60, 70], 80)", lod.sortedIndex([10, 30, 50, 60, 70], 80));

// es6
function sortedIndex(arr, value) {
	const length = arr.length;
	for(let i = 0, j = 1; i < length; i++, j++){
		if(arr[i] <= value && value <= arr[j] || length === j) {
			return j;
		}
	}
	return arr;
}

console.log("sortedIndex([10, 30, 50, 60, 70], 40)", sortedIndex([10, 30, 50, 60, 70], 40));
console.log("sortedIndex([10, 30, 50, 60, 70], 80)", sortedIndex([10, 30, 50, 60, 70], 80));





