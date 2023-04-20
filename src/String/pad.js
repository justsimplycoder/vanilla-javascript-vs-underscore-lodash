const und = require('underscore');
const lod = require('lodash');

/**
 * pad - Добавляет пробельные символы вокруг строки, если она короче длины
 */

// lodash
console.log("lod.pad('abc', 8)", lod.pad('abc', 8));
console.log("lod.pad('abc', 8, '_-')", lod.pad('abc', 8, '_-'));
console.log("lod.pad('abc', 3)", lod.pad('abc', 3));

// es6
function pad(str='', length=0, chars=' ') {
	let strLength = str.length;
	// количество символов на отступы с обоих сторон
	let paddingSrt = length - strLength;

	if(paddingSrt <= 0) return str;

	let paddingLeft = strLength + Math.floor((paddingSrt) / 2);
	let paddingRight = paddingLeft + Math.ceil((paddingSrt) / 2);

	return str.padStart(paddingLeft, chars).padEnd(paddingRight, chars);
}

console.log("pad('abc', 8)", pad('abc', 8));
console.log("pad('abc', 8, '_-')", pad('abc', 8, '_-'));
console.log("pad('abc', 3)", pad('abc', 3));
