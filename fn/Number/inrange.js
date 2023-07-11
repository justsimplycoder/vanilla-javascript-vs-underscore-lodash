const und = require('underscore');
const lod = require('lodash');

/**
 * inRange - Проверяет входит ли число в заданный диапазон
 */

// lodash
console.log("lod.inRange(4, 8)", lod.inRange(4, 8));
console.log("lod.inRange(-4, 8)", lod.inRange(-4, 8)); // -4 меньше 8 но возвращает false
console.log("lod.inRange(3, 2, 4)", lod.inRange(3, 2, 4));
console.log("lod.inRange(4, 2)", lod.inRange(4, 2));
console.log("lod.inRange(2, 2)", lod.inRange(2, 2));
console.log("lod.inRange(-3, -2, -6)", lod.inRange(-3, -2, -6));

// es6
function inRange(num, start, end){
	if(arguments.length <= 1) return false
	if(arguments.length == 2) {
		end = start;
		start = 0;
	}
	// если end меньше start, поменять переменные местами
	if(end < start) [start, end] = [end, start];
	if(num > start && num < end) return true;
	return false;
}

console.log("inRange(4, 8)", inRange(4, 8));
console.log("inRange(-4, 8)", inRange(-4, 8));
console.log("inRange(3, 2, 4)", inRange(3, 2, 4));
console.log("inRange(4, 2)", inRange(4, 2));
console.log("inRange(2, 2)", inRange(2, 2));
console.log("inRange(-3, -2, -6)", inRange(-3, -2, -6));
