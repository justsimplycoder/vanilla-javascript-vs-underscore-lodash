const und = require('underscore');
const lod = require('lodash');

/**
 * fill - Заполняет элементы массива значением от начала до конца, но не включая его.
 */

// lodash
console.log("lod.fill([5, 4, 3, 2, 1], 'js')", lod.fill([5, 4, 3, 2, 1], 'js'));
console.log("lod.fill([5, 4, 3, 2, 1], 'js', 1, 3)", lod.fill([5, 4, 3, 2, 1], 'js', 1, 3));
console.log("lod.fill(Array(4), 'js')", lod.fill(Array(4), 'js'));

// es6
console.log("[5, 4, 3, 2, 1].fill('js')", [5, 4, 3, 2, 1].fill('js'));
console.log("[5, 4, 3, 2, 1].fill('js', 1, 3)", [5, 4, 3, 2, 1].fill('js', 1, 3));
console.log("Array(4).fill('js')", Array(4).fill('js'));

function fill(arr, value, start=0, end=undefined) {
	if (end === undefined) end = arr.length;
	for(let i = start;i < end;i++) {
		arr[i] = value;
	}
	return arr;
}

console.log("fill([5, 4, 3, 2, 1], 'js')", fill([5, 4, 3, 2, 1], 'js'));
console.log("fill([5, 4, 3, 2, 1], 'js', 1, 3)", fill([5, 4, 3, 2, 1], 'js', 1, 3));
console.log("fill(Array(4), 'js')", fill(Array(4), 'js'));
