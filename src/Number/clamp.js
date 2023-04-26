const und = require('underscore');
const lod = require('lodash');

/**
 * clamp - возвращает число если оно входит в диапазон, если нет то верхнюю или нижнюю границу в зависимости от того, число положительное или отрицательное.
 */

// lodash
console.log("lod.clamp(-10, -5, 5)", lod.clamp(-10, -5, 5));
console.log("lod.clamp(-3, -5, 5)", lod.clamp(-3, -5, 5));
console.log("lod.clamp(0, -5, 5)", lod.clamp(0, -5, 5));
console.log("lod.clamp(4, -5, 5)", lod.clamp(4, -5, 5));
console.log("lod.clamp(10, -5, 5)", lod.clamp(10, -5, 5));

// es6
function clamp(num, lower, upper) {
	if(num >= lower && num <= upper) return num;
	if(num < lower) return lower;
	if(num > upper) return upper;
}

console.log("clamp(-10, -5, 5)", clamp(-10, -5, 5));
console.log("clamp(-3, -5, 5)", clamp(-3, -5, 5));
console.log("clamp(0, -5, 5)", clamp(0, -5, 5));
console.log("clamp(4, -5, 5)", clamp(4, -5, 5));
console.log("clamp(10, -5, 5)", clamp(10, -5, 5));
