const und = require('underscore');
const lod = require('lodash');

/**
 * capitalize - Преобразует первый символ строки в верхний регистр, а остальные — в нижний.
 */

// lodash
console.log("lod.capitalize('FRED')", lod.capitalize('FRED'));

// es6
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log("capitalize('FRED')", capitalize('FRED'));
