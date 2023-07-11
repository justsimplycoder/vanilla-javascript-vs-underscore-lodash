const und = require('underscore');
const lod = require('lodash');

/**
 * chunk - Создает массив элементов, разбитых на группы по размеру длины. Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.
 */

const arr = [1, 2, 3, 4, 5, 6, 7];

// underscore
console.log("und.chunk(arr)", und.chunk(arr));
// => [] фторой аргунмет обязателен
console.log("und.chunk(arr, 2)", und.chunk(arr, 2));
// => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
console.log("und.chunk(arr, 3)", und.chunk(arr, 3));
// => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

// lodash
console.log("lod.chunk(arr)", lod.chunk(arr));
// => [[ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ]
console.log("lod.chunk(arr, 2)", lod.chunk(arr, 2));
// => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
console.log("lod.chunk(arr, 3)", lod.chunk(arr, 3));
// => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

// es6
function chunk(arr, sizeChunk = 1) {
	const result = [[]];
	let index = 0;
	let size = sizeChunk;
	arr.forEach(el => {
		if(size <= 0) {
			size = sizeChunk;
			index++;
			result[index] = [];
		}
		result[index].push(el);
		size--;
	});
	return result;
}
console.log("chunk(arr)", chunk(arr));
// => [[ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ]
console.log("chunk(arr, 2)", chunk(arr, 2));
// => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
console.log("chunk(arr, 3)", chunk(arr, 3));
// => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]